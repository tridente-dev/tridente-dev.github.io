/* ============================================================
   CHRONOS — script.js
   Pointer Events unificati (Mouse + Touch)
   ============================================================ */

const sections = [
  { num: "00", name: "Threshold", desc: "The transition point between nothingness and the first instant of perception." },
  { num: "01", name: "Echo", desc: "The resonance of past decisions still vibrating in the present." },
  { num: "02", name: "Abyss", desc: "The depth of unmeasured time when surrendering to darkness." },
  { num: "03", name: "Insomnia", desc: "Hours stretching while the mind chases thoughts in circles." },
  { num: "04", name: "Waiting", desc: "The suspension of time before a decisive moment." },
  { num: "05", name: "Omen", desc: "The intuition of the future manifesting in an imperceptible instant." },
  { num: "06", name: "Awakening", desc: "The realignment of senses with the rhythm of the outside world." },
  { num: "07", name: "Momentum", desc: "The acceleration of action clearing all hesitation." },
  { num: "08", name: "Rhythm", desc: "The steady cadence of heartbeat and synchronized breathing." },
  { num: "09", name: "Trajectory", desc: "The vector path towards a defined destination." },
  { num: "10", name: "Friction", desc: "The resistance of matter against the unstoppable flow of hours." },
  { num: "11", name: "Peak", desc: "The point of maximum sensory intensity of the day." },
  { num: "12", name: "Suspension", desc: "Exact noon, where shadow disappears and time falls silent." },
  { num: "13", name: "Drift", desc: "The slow sliding away from the rigidity of planning." },
  { num: "14", name: "Repetition", desc: "The reassuring and hypnotic loop of daily gestures." },
  { num: "15", name: "Inertia", desc: "Movement continuing by its own force without further effort." },
  { num: "16", name: "Shadow", desc: "The lengthening projection foretelling the decline of light." },
  { num: "17", name: "Dilatation", desc: "There are minutes that contain an entire day." },
  { num: "18", name: "Transition", desc: "The shifting colors of the spectrum as light surrenders to dark." },
  { num: "19", name: "Return", desc: "The convergence of paths back to the original starting point." },
  { num: "20", name: "Distance", desc: "The perspective space created between us and past events." },
  { num: "21", name: "Memory", desc: "The imperfect yet vivid reconstruction of what has already been." },
  { num: "22", name: "Silence", desc: "The absence of noise allowing us to listen to internal flow." },
  { num: "23", name: "Fadeout", desc: "The final reabsorption of all forms into the restarting cycle." }
];

const MODAL_DETAILS = "You are exploring the temporal dimension of this section. Each instant is a coordinate in the space of human perception.";

let activeIndex = 17;
let isTimeFrozen = false;
let scene, camera, renderer, networkGroup, nodesMesh, linesMesh;
let positions = [], colors = [];
let nodeCount = 180;
let isDragging = false;
let previousPointer = { x: 0, y: 0 };
let lastPointerPos = { x: 0, y: 0 };
let pointerSpeed = 0;
let audioCtx = null, osc = null, gainNode = null;
let isAutoRotating = true;

const IS_TOUCH = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
const IS_ANDROID = /Android/i.test(navigator.userAgent);
// Soglia portata a 1024 per includere gli Android in landscape
const IS_MOBILE = IS_TOUCH && window.matchMedia('(max-width: 1024px)').matches;

function updateAudioButtonUI() {
  const btn = document.getElementById('audio-toggle');
  if (!btn) return;
  btn.textContent = (audioCtx && audioCtx.state === 'running') ? '⊙ ACTIVE' : '⊙ MUTE';
}

function renderIndexList() {
  const listEl = document.getElementById('index-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  sections.forEach((sec, idx) => {
    const li = document.createElement('li');
    li.className = `index-item ${idx === activeIndex ? 'active' : ''}`;
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');
    li.innerHTML = `<span class="item-num">${sec.num}</span><span class="item-name">${sec.name}</span>`;
    li.addEventListener('click', () => { if (!isTimeFrozen) selectSection(idx); });
    listEl.appendChild(li);
  });
}

function updateSectionDataUI(idx) {
  const data = sections[idx];
  const kickerEl = document.getElementById('section-kicker');
  const titleEl = document.getElementById('section-title');
  const descEl = document.getElementById('section-desc');
  if (kickerEl) kickerEl.textContent = `NOW / SECTION ${data.num}`;
  if (titleEl) titleEl.textContent = data.name;
  if (descEl) descEl.textContent = data.desc;
}

function selectSection(idx) {
  if (idx === activeIndex || isTimeFrozen) return;
  activeIndex = idx;

  document.querySelectorAll('.index-item').forEach((item, i) => {
    item.classList.toggle('active', i === idx);
    if (i === idx) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  if (window.gsap) {
    gsap.to(['#section-title', '#section-desc'], {
      opacity: 0, y: -6, duration: 0.15,
      onComplete: () => {
        updateSectionDataUI(activeIndex);
        gsap.to(['#section-title', '#section-desc'], { opacity: 1, y: 0, duration: 0.25 });
      }
    });
  } else {
    updateSectionDataUI(activeIndex);
  }

  if (osc && audioCtx && audioCtx.state === 'running') {
    const freq = 120 + idx * 18;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    const freqEl = document.getElementById('freq-val');
    if (freqEl) freqEl.textContent = `${Math.round(freq)} HZ`;
  }
}

function init3D() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  if (IS_ANDROID) nodeCount = 90;
  else if (IS_MOBILE) nodeCount = 120;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 7.5);

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !IS_MOBILE,
    alpha: true,
    powerPreference: 'high-performance'
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, IS_MOBILE ? 1.5 : 2));

  networkGroup = new THREE.Group();
  positions = [];
  colors = [];
  const baseColor = new THREE.Color(0xdddddd);
  const limeColor = new THREE.Color(0xd7ff3f);

  for (let i = 0; i < nodeCount; i++) {
    const theta = Math.random() * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * Math.random() - 1.0);
    const r = 2.0 + (Math.random() - 0.5) * 0.4;
    positions.push(r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi));
    const mixColor = baseColor.clone().lerp(limeColor, Math.random() * 0.45);
    colors.push(mixColor.r, mixColor.g, mixColor.b);
  }

  const nodesGeo = new THREE.BufferGeometry();
  nodesGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  nodesGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const nodesMat = new THREE.PointsMaterial({
    size: IS_MOBILE ? 0.08 : 0.06,
    vertexColors: true, transparent: true, opacity: 0.95, sizeAttenuation: true
  });

  nodesMesh = new THREE.Points(nodesGeo, nodesMat);
  networkGroup.add(nodesMesh);

  const linePositions = [];
  const lineColors = [];
  const maxDist = IS_MOBILE ? 0.75 : 0.85;
  const maxDistSq = maxDist * maxDist;

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      if (dx*dx + dy*dy + dz*dz < maxDistSq) {
        linePositions.push(positions[i*3], positions[i*3+1], positions[i*3+2], positions[j*3], positions[j*3+1], positions[j*3+2]);
        lineColors.push(colors[i*3], colors[i*3+1], colors[i*3+2], colors[j*3], colors[j*3+1], colors[j*3+2]);
      }
    }
  }

  const linesGeo = new THREE.BufferGeometry();
  linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
  const linesMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: IS_MOBILE ? 0.25 : 0.35 });
  linesMesh = new THREE.LineSegments(linesGeo, linesMat);
  networkGroup.add(linesMesh);

  networkGroup.rotation.y = (activeIndex / 24) * Math.PI * 2;
  scene.add(networkGroup);
  window.addEventListener('resize', onResize, { passive: true });
}

function onResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, IS_MOBILE ? 1.5 : 2));
}

function initInteractions() {
  const cursor = document.getElementById('cursor');
  if (cursor && IS_TOUCH) cursor.style.display = 'none';

  const speedEl = document.getElementById('speed-val');
  // Il target del drag ora è esplicitamente la zona centrale (#sphere-zone)
  const sphereZone = document.getElementById('sphere-zone');

  function handlePointerMove(clientX, clientY) {
    if (cursor && !IS_TOUCH) {
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    }

    const dx = clientX - lastPointerPos.x;
    const dy = clientY - lastPointerPos.y;
    pointerSpeed = Math.sqrt(dx * dx + dy * dy) * 0.05;
    lastPointerPos = { x: clientX, y: clientY };

    if (speedEl) speedEl.textContent = `${pointerSpeed.toFixed(2)} M/S`;
    updateSparkline(pointerSpeed);

    if (isDragging && networkGroup && !isTimeFrozen) {
      const deltaX = clientX - previousPointer.x;
      const deltaY = clientY - previousPointer.y;

      networkGroup.rotation.y += deltaX * 0.008;
      networkGroup.rotation.x += deltaY * 0.008;
      networkGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, networkGroup.rotation.x));

      let normalizedAngle = (networkGroup.rotation.y % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      let calculatedIndex = Math.floor((normalizedAngle / (Math.PI * 2)) * 24);
      calculatedIndex = (calculatedIndex + 24) % 24;

      selectSection(calculatedIndex);
    }
    previousPointer = { x: clientX, y: clientY };
  }

  /* ------------------------------------------------------------
     POINTER EVENTS: funzionano per Mouse, Touch e Penna in un colpo solo.
     Evitano i bug di iOS e Android relativi alle gesture native.
     ------------------------------------------------------------ */
  if (sphereZone) {
    sphereZone.addEventListener('pointerdown', (e) => {
      // Ignora se overlay o modale sono aperti
      const overlay = document.getElementById('rotate-overlay');
      if (overlay && getComputedStyle(overlay).display !== 'none') return;
      const modal = document.getElementById('modal-hour');
      if (modal && modal.classList.contains('open')) return;

      isDragging = true;
      isAutoRotating = false;
      previousPointer = { x: e.clientX, y: e.clientY };
      lastPointerPos = { x: e.clientX, y: e.clientY };
      
      // Cattura il puntatore fuori dall'elemento (evita che il drag si interrompa)
      if (sphereZone.setPointerCapture) {
        try { sphereZone.setPointerCapture(e.pointerId); } catch(err) {}
      }
      
      // Previene gesture native tipo edge-swipe su iOS
      if (e.pointerType === 'touch' && e.cancelable) {
        e.preventDefault();
      }
    }, { passive: false });

    sphereZone.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      handlePointerMove(e.clientX, e.clientY);
      
      if (e.pointerType === 'touch' && e.cancelable) {
        e.preventDefault();
      }
    }, { passive: false });

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      isAutoRotating = true;
      if (sphereZone.releasePointerCapture && e.pointerId) {
        try { sphereZone.releasePointerCapture(e.pointerId); } catch(err) {}
      }
    }

    sphereZone.addEventListener('pointerup', endDrag);
    sphereZone.addEventListener('pointercancel', endDrag);
    sphereZone.addEventListener('pointerleave', (e) => {
      // Su mouse se esce dal box mentre trascina
      if (e.pointerType === 'mouse') endDrag(e);
    });
  }

  // Cursore custom (solo hover, non tocca il drag)
  const hoverables = document.querySelectorAll('button, .index-item, .brand, .card-link, .audio-toggle');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hovered'));
  });

  const btnAudio = document.getElementById('audio-toggle');
  if (btnAudio) btnAudio.addEventListener('click', toggleAudio);

  const btnLogo = document.getElementById('btn-logo');
  if (btnLogo) {
    btnLogo.addEventListener('click', goToThreshold);
    btnLogo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToThreshold(); }
    });
  }

  const btnAtlas = document.getElementById('btn-atlas');
  if (btnAtlas) btnAtlas.addEventListener('click', goToAtlas);

  const btnUseless = document.getElementById('btn-useless');
  if (btnUseless) btnUseless.addEventListener('click', triggerUselessPulse);

  const sectionLink = document.getElementById('section-link');
  if (sectionLink) sectionLink.addEventListener('click', openModal);

  const modalClose = document.getElementById('modal-close');
  if (modalClose) modalClose.addEventListener('click', closeModal);

  const modal = document.getElementById('modal-hour');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'modal-hour') closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal();
  });

  updateSparkline(0);
}

function goToThreshold() {
  if (isTimeFrozen || !networkGroup || !window.gsap) return;
  gsap.to(networkGroup.rotation, { x: 0, y: 0, duration: 1.2, ease: "power2.inOut" });
  selectSection(0);
}

function goToAtlas() {
  if (isTimeFrozen || !networkGroup || !window.gsap) return;
  const targetY = (17 / 24) * Math.PI * 2;
  gsap.to(networkGroup.rotation, { x: 0, y: targetY, duration: 1.2, ease: "power2.inOut" });
  selectSection(17);
}

function triggerUselessPulse() {
  if (!networkGroup || !window.gsap) return;
  gsap.to(networkGroup.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.2, yoyo: true, repeat: 1, ease: "power2.out" });
  if (osc && audioCtx && audioCtx.state === 'running') {
    const baseFreq = 120 + activeIndex * 18;
    osc.frequency.cancelScheduledValues(audioCtx.currentTime);
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    setTimeout(() => {
      if (osc && audioCtx) osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
    }, 300);
  }
}

function openModal() {
  isTimeFrozen = true;
  const modal = document.getElementById('modal-hour');
  const sec = sections[activeIndex];
  document.getElementById('modal-kicker').textContent = `NOW / SECTION ${sec.num}`;
  document.getElementById('modal-title').textContent = sec.name;
  document.getElementById('modal-body').textContent = `${sec.desc}\n\n${MODAL_DETAILS}`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  isTimeFrozen = false;
  document.getElementById('modal-hour').classList.remove('open');
  document.body.style.overflow = '';
}

const sparklineVals = new Array(12).fill(2);
function updateSparkline(val) {
  sparklineVals.shift();
  sparklineVals.push(Math.min(Math.max(val * 5, 2), 16));
  const container = document.getElementById('sparkline');
  if (!container) return;
  container.innerHTML = '';
  sparklineVals.forEach(v => {
    const bar = document.createElement('div');
    bar.className = 'spark-bar';
    bar.style.height = `${v}px`;
    container.appendChild(bar);
  });
}

function toggleAudio() {
  if (!audioCtx) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioCtx = new AudioCtx();
      osc = audioCtx.createOscillator();
      gainNode = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120 + activeIndex * 18, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start();
      gainNode.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.3);
    } catch (e) {
      console.warn('Audio not available:', e);
      return;
    }
  } else if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  } else {
    audioCtx.suspend();
  }
  updateAudioButtonUI();
}

function updateClock() {
  const el = document.getElementById('clock-val');
  if (!el) return;
  el.textContent = new Date().toTimeString().split(' ')[0];
}

let lastTime = 0;
let frameSkipCounter = 0;
function animate(time) {
  requestAnimationFrame(animate);
  const delta = time - lastTime;
  lastTime = time;
  if (IS_ANDROID) {
    frameSkipCounter++;
    if (frameSkipCounter % 2 !== 0) return;
  }
  if (isAutoRotating && !isDragging && networkGroup && !isTimeFrozen) {
    const speed = 0.00015;
    networkGroup.rotation.y += speed * Math.min(delta, 50);
    let normalizedAngle = (networkGroup.rotation.y % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    let calculatedIndex = Math.floor((normalizedAngle / (Math.PI * 2)) * 24);
    calculatedIndex = (calculatedIndex + 24) % 24;
    selectSection(calculatedIndex);
  }
  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  init3D();
  renderIndexList();
  updateSectionDataUI(activeIndex);
  updateAudioButtonUI();
  initInteractions();
  animate(0);
  setInterval(updateClock, 1000);
  updateClock();
});
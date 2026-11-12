/* ============================================================
   AETHER — script.js
   Catalog + cart, checkout, contact — fully in English
   ============================================================ */

/* ------------------------------------------------------------
   PRODUCTS — Permanent collection (20 objects)
   ------------------------------------------------------------ */
const products = [
  { id: 1,  name: "Monolite Lumina Lamp",   category: "illuminazione",  material: "alluminio", price: 240, stock: 12, img: "img/lampada-monolite-lumina.jpg", desc: "Sculptural table lamp in brushed aluminum with opal glass diffuser. Adjustable warm light." },
  { id: 2,  name: "Halo Arc Lamp",      category: "illuminazione",  material: "alluminio", price: 310, stock: 7,  img: "img/lampada-ad-arco-halo.png", desc: "Integrated LED light arc, adjustable in intensity and color temperature." },
  { id: 3,  name: "Ember Ceramic Wall Light",   category: "illuminazione",  material: "ceramica",  price: 190, stock: 15, img: "img/Applique-Ceramica-Ember.png", desc: "Matte ceramic wall light with amber finish and diffused warm light." },
  { id: 4,  name: "Smoked Glass Pendant",    category: "illuminazione",  material: "vetro",     price: 285, stock: 9,  img: "img/Sospensione-Vetro-Fume.png", desc: "Mouth-blown smoked glass pendant with braided fabric cable." },

  { id: 5,  name: "Ceramic Pen Holder",  category: "organizzazione", material: "ceramica",  price: 85,  stock: 24, img: "img/Vaso-Portapenne-Ceramica.png", desc: "Hand-thrown pen holder in matte ceramic, ivory glaze." },
  { id: 6,  name: "Anodized Laptop Stand",category: "organizzazione", material: "alluminio", price: 110, stock: 18, img: "img/Supporto-Laptop-Anodizzato.png", desc: "Anodized aluminum laptop stand, adjustable tilt, non-slip pads." },
  { id: 7,  name: "Grid Desk Tray",    category: "organizzazione", material: "alluminio", price: 95,  stock: 14, img: "img/Vassoio-Scrivania-Grid.png", desc: "Modular tray for small objects, with grey felt inserts." },
  { id: 8,  name: "Mineral Glass Pen Holder", category: "organizzazione", material: "vetro",     price: 60,  stock: 30, img: "img/Portapenne-Vetro-Minerale.png", desc: "Smoked mineral glass pen holder." },
  { id: 9,  name: "Floating Suspended Folder", category: "organizzazione", material: "alluminio", price: 120, stock: 11, img: "img/Cartelletta-Sospesa-Flottante.png", desc: "Suspended document folder, minimalist design, 200-sheet capacity." },
  { id: 10, name: "Ceramic Paperweight",       category: "organizzazione", material: "ceramica",  price: 45,  stock: 40, img: "img/Fermacarte-Ceramica.png", desc: "Glazed ceramic paperweight, calibrated weight 380g." },
  { id: 11, name: "Leather Desk Mat", category: "organizzazione", material: "pelle",     price: 130, stock: 8,  img: "img/Tappetino-Scrivania-Pelle.png", desc: "Full-grain brown leather desk mat, hand-stitched." },
  { id: 12, name: "Metal Card Holder",  category: "organizzazione", material: "alluminio", price: 45,  stock: 22, img: "img/Portabiglietti.png", desc: "Brushed metal card holder with black insert, matte finish." },

  { id: 13, name: "Resonance 5 Stabilizer", category: "audio",         material: "alluminio", price: 220, stock: 6,  img: "img/Blocco-Sonoro-Resonance.png", desc: "Black anodized aluminum stabilizer weight with graphite core, ideal for turntables." },
  { id: 14, name: "Echo Sound-Absorbing Panel", category: "audio",       material: "alluminio", price: 130, stock: 16, img: "img/Pannello-Fonoassorbente-Echo.png", desc: "Rigid sound-absorbing panel with technical coating, 40×40 cm, reduces echo by 30%." },
  { id: 15, name: "Silent Acoustic Cubes",  category: "audio",          material: "lana",      price: 65,  stock: 13, img: "img/Cubo-Acustico-Silenzioso.png", desc: "High-density foam acoustic cubes, dampen primary reflections." },
  { id: 16, name: "Red Glass Diffuser",     category: "audio",          material: "vetro",     price: 175, stock: 5,  img: "img/Diffusore-Vetro-Fume.png", desc: "Ruby red glass room diffuser with black rattan sticks." },
  { id: 17, name: "White Ceramic Isolators", category: "audio",          material: "ceramica",  price: 55,  stock: 20, img: "img/Piastrella-Acustica-Lana.png", desc: "Pair of white glazed ceramic isolators for cables and audio supports." },
  { id: 18, name: "Aluminum Headphone Stand", category: "audio",          material: "alluminio", price: 165, stock: 10, img: "img/Supporto-Cuffie-Titanio.png", desc: "Matte black aluminum headphone stand with heavy metal base." },
  { id: 19, name: "Under-Desk Cable Organizer", category: "audio",      material: "alluminio", price: 45,  stock: 28, img: "img/Dock-Cavi.png", desc: "White painted steel under-desk rack with cable hooks." },
  { id: 20, name: "Marbleized Vase",         category: "organizzazione", material: "ceramica",  price: 75,  stock: 17, img: "img/Vaso-Marmorizzato.png", desc: "Cylindrical white marbleized ceramic vase, ideal as a pen holder or organizer." },
];

/* ------------------------------------------------------------
   LIMITED EDITION (3 numbered objects)
   ------------------------------------------------------------ */
const limitedProducts = [
  { id: 101, name: "Aether N. 01 — Monolith",  category: "illuminazione", material: "ceramica",  price: 890,  stock: 3, img: "img/Aether-01-Monolite.png", desc: "Monolithic raku ceramic sculpture with natural veining, numbered edition of 50.", edition: "ED. 01 / 50" },
  { id: 102, name: "Aether N. 02 — Vase",      category: "organizzazione", material: "vetro",     price: 640,  stock: 2, img: "img/Aether-02-Vaso.png", desc: "Sculptural mouth-blown glass vase with white net decoration, numbered edition of 30.", edition: "ED. 02 / 30" },
  { id: 103, name: "Aether N. 03 — Amplifier", category: "audio",      material: "alluminio", price: 1180, stock: 1, img: "img/Aether-03-Risonanza.png", desc: "Integrated amplifier in brushed aluminum, silver/orange two-tone finish, numbered edition of 20.", edition: "ED. 03 / 20" },
];

const FALLBACK_IMG = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80";

/* ------------------------------------------------------------
   GLOBAL STATE
   ------------------------------------------------------------ */
let selectedCategory = 'all';
let selectedMaterial = 'all';
let searchQuery = '';
let sortBy = 'default';

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem('aether-cart') || '[]');
  if (!Array.isArray(cart)) cart = [];
} catch (_) { cart = []; }

const sortLabels = {
  'default': 'Default',
  'price-asc': 'Price: low to high',
  'price-desc': 'Price: high to low',
  'name': 'Name A–Z'
};

/* ------------------------------------------------------------
   HELPERS
   ------------------------------------------------------------ */
const allProducts = () => [...products, ...limitedProducts];
const findProduct = id => allProducts().find(p => p.id === id);
const fmt = n => `€${n.toLocaleString('en-US')}`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
}[c]));

function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (_) {}
}

function showToast(message, type = 'info') {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity .3s';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ------------------------------------------------------------
   FILTERS & SORTING
   ------------------------------------------------------------ */
function getFilteredProducts() {
  let list = products.filter(p => {
    const mc = selectedCategory === 'all' || p.category === selectedCategory;
    const mm = selectedMaterial === 'all' || p.material === selectedMaterial;
    const ms = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return mc && mm && ms;
  });
  if (sortBy === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sortBy === 'name')       list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function setCategory(cat, btn) {
  selectedCategory = cat;
  document.querySelectorAll('.filter-block .filter-btn').forEach(b => b.classList.remove('active'));
  btn?.classList.add('active');
  renderProducts();
}

function setMaterial(mat, btn) {
  selectedMaterial = mat;
  const blocks = document.querySelectorAll('.filter-block');
  if (blocks[1]) {
    blocks[1].querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  }
  btn?.classList.add('active');
  renderProducts();
}

function filterProducts() {
  const input = document.getElementById('search-input');
  if (!input) return;
  searchQuery = input.value;
  renderProducts();
}

function toggleSortMenu() {
  document.querySelector('.sort-wrap')?.classList.toggle('open');
}

function setSort(value) {
  sortBy = value;
  const labelEl = document.getElementById('sort-value');
  if (labelEl) labelEl.innerText = sortLabels[value] || 'Default';
  document.querySelectorAll('.sort-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === value);
  });
  document.querySelector('.sort-wrap')?.classList.remove('open');
  renderProducts();
}

document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.sort-wrap');
  if (wrap && !wrap.contains(e.target)) wrap.classList.remove('open');
  const mobileNav = document.getElementById('mobile-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  if (mobileNav && mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) && menuToggle && !menuToggle.contains(e.target)) {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

/* ------------------------------------------------------------
   RENDER CATALOG
   ------------------------------------------------------------ */
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const filtered = getFilteredProducts();
  const countEl = document.getElementById('search-count');
  if (countEl) countEl.innerText = `${filtered.length} ${filtered.length === 1 ? 'object' : 'objects'}`;

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color: var(--text-sub); grid-column: 1/-1;">No objects found.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <a href="product.html?id=${p.id}">
        <div class="image-container">
          <img src="${esc(p.img)}" alt="${esc(p.name)}" class="product-image" loading="lazy" decoding="async"
               onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>
        <div class="product-info">
          <div class="product-title">${esc(p.name)}</div>
          <div class="product-material">${esc(p.material)}</div>
          <div class="product-price">${fmt(p.price)}</div>
          <div class="product-stock">${p.stock} available</div>
        </div>
      </a>
      <div class="qty-row">
        <div class="qty-picker">
          <button type="button" onclick="changeQty(${p.id}, -1, event)" aria-label="Decrease">−</button>
          <input type="number" id="qty-${p.id}" value="1" min="1" max="${p.stock}"
                 onchange="setQty(${p.id}, this.value)" aria-label="Quantity">
          <button type="button" onclick="changeQty(${p.id}, 1, event)" aria-label="Increase">+</button>
        </div>
        <button class="add-btn" onclick="addToCartWithQty(${p.id})">Add</button>
      </div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------
   RENDER LIMITED EDITION (clickable cards → detail modal)
   ------------------------------------------------------------ */
function renderLimited() {
  const grid = document.getElementById('limited-grid');
  if (!grid) return;

  grid.innerHTML = limitedProducts.map(p => `
    <div class="limited-card">
      <div class="edition-num">${esc(p.edition)}</div>

      <button type="button" class="limited-card-trigger"
              onclick="openLimitedModal(${p.id})"
              aria-label="Discover ${esc(p.name)}">
        <div class="image-container">
          <img src="${esc(p.img)}" alt="${esc(p.name)}" class="product-image" loading="lazy" decoding="async"
               onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>
        <div class="product-info">
          <div class="product-title">${esc(p.name)}</div>
          <div class="product-material">${esc(p.material)}</div>
          <p style="color: var(--text-sub); font-size: 13px; margin: 10px 0 16px;">${esc(p.desc)}</p>
          <div class="product-price">${fmt(p.price)}</div>
          <div class="product-stock">Only ${p.stock} available</div>
          <span class="limited-discover">Discover the edition →</span>
        </div>
      </button>

      <div class="qty-row" style="margin-top: 16px;">
        <div class="qty-picker">
          <button type="button" onclick="changeQty(${p.id}, -1, event)" aria-label="Decrease">−</button>
          <input type="number" id="qty-${p.id}" value="1" min="1" max="${p.stock}"
                 onchange="setQty(${p.id}, this.value)" aria-label="Quantity">
          <button type="button" onclick="changeQty(${p.id}, 1, event)" aria-label="Increase">+</button>
        </div>
        <button class="add-btn" onclick="addToCartWithQty(${p.id}, true)">Add</button>
      </div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------
   LIMITED EDITION MODAL
   ------------------------------------------------------------ */
function openLimitedModal(id) {
  const p = limitedProducts.find(x => x.id === id);
  if (!p) return;

  let modal = document.getElementById('limited-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'limited-modal';
    modal.className = 'limited-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="limited-modal-backdrop" onclick="closeLimitedModal()"></div>
      <div class="limited-modal-panel" role="document">
        <button type="button" class="limited-modal-close" onclick="closeLimitedModal()" aria-label="Close">&times;</button>
        <div class="limited-modal-content" id="limited-modal-content"></div>
      </div>
    `;
    document.body.appendChild(modal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLimitedModal();
    });
  }

  const content = document.getElementById('limited-modal-content');
  content.innerHTML = `
    <div class="limited-modal-image">
      <img src="${esc(p.img)}" alt="${esc(p.name)}"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </div>
    <div class="limited-modal-info">
      <div class="hero-tag">${esc(p.edition)}</div>
      <h2>${esc(p.name)}</h2>
      <div class="limited-modal-material">${esc(p.material.toUpperCase())}</div>
      <div class="limited-modal-price">${fmt(p.price)}</div>
      <p class="limited-modal-desc">${esc(p.desc)}</p>

      <div class="limited-modal-specs">
        <div class="spec-row"><span>Edition</span><span>${esc(p.edition)}</span></div>
        <div class="spec-row"><span>Material</span><span>${esc(p.material)}</span></div>
        <div class="spec-row"><span>Category</span><span>${esc(p.category)}</span></div>
        <div class="spec-row"><span>Availability</span><span>${p.stock} pieces left</span></div>
        <div class="spec-row"><span>Certificate</span><span>Signed author's card</span></div>
        <div class="spec-row"><span>Shipping</span><span>Free in EU</span></div>
      </div>

      <div class="limited-modal-actions">
        <button type="button" class="add-btn" onclick="addFromModal(${p.id})">
          Add to selection
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLimitedModal() {
  const modal = document.getElementById('limited-modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function addFromModal(id) {
  addToCartWithQty(id, true);
  closeLimitedModal();
}

window.openLimitedModal = openLimitedModal;
window.closeLimitedModal = closeLimitedModal;
window.addFromModal = addFromModal;

/* ------------------------------------------------------------
   QUANTITY MANAGEMENT
   ------------------------------------------------------------ */
function setQty(id, val) {
  const input = document.getElementById(`qty-${id}`);
  if (!input) return;
  let v = parseInt(val) || 1;
  const min = parseInt(input.min) || 1;
  const max = parseInt(input.max) || 99;
  if (v < min) v = min;
  if (v > max) v = max;
  input.value = v;
}

function changeQty(id, delta, event) {
  if (event) event.preventDefault();
  const input = document.getElementById(`qty-${id}`);
  if (!input) return;
  const current = parseInt(input.value) || 1;
  setQty(id, current + delta);
}

/* ------------------------------------------------------------
   PRODUCT DETAIL (product.html)
   ------------------------------------------------------------ */
function renderProductDetail() {
  const container = document.getElementById('product-detail');
  if (!container) return;

  const id = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
  const product = findProduct(id);

  if (!product) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 40px 0;">
        <p style="color: var(--text-sub);">Product not found.
          <a href="index.html" style="color:var(--accent); text-decoration: underline;">Back to catalog</a>
        </p>
      </div>`;
    return;
  }

  const isLimited = !!product.edition;

  container.innerHTML = `
    <div class="detail-image">
      <img src="${esc(product.img)}" alt="${esc(product.name)}"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </div>
    <div class="detail-info">
      ${isLimited ? `<div class="hero-tag">${esc(product.edition)}</div>` : ''}
      <h1>${esc(product.name)}</h1>
      <div class="detail-material">${esc(product.material.toUpperCase())}</div>
      <div class="detail-price">${fmt(product.price)}</div>
      <p class="detail-desc">${esc(product.desc)}</p>
      <div class="detail-specs">
        <div class="spec-row"><span>Category</span><span>${esc(product.category)}</span></div>
        <div class="spec-row"><span>Material</span><span>${esc(product.material)}</span></div>
        <div class="spec-row"><span>Availability</span><span>${product.stock} pieces in stock</span></div>
        <div class="spec-row"><span>Shipping</span><span>Free in EU</span></div>
        <div class="spec-row"><span>Warranty</span><span>2 years</span></div>
      </div>
      <div class="qty-row" style="margin-bottom: 20px;">
        <div class="qty-picker">
          <button type="button" onclick="changeQty(${product.id}, -1, event)" aria-label="Decrease">−</button>
          <input type="number" id="qty-${product.id}" value="1" min="1" max="${product.stock}"
                 onchange="setQty(${product.id}, this.value)" aria-label="Quantity">
          <button type="button" onclick="changeQty(${product.id}, 1, event)" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="checkout-btn" onclick="addToCartWithQty(${product.id}, ${isLimited})">
        Add to selection
      </button>
    </div>
  `;
}

/* ------------------------------------------------------------
   CART
   ------------------------------------------------------------ */
function addToCartWithQty(id, isLimited = false) {
  const input = document.getElementById(`qty-${id}`);
  const qty = input ? Math.max(1, parseInt(input.value) || 1) : 1;
  addToCart(id, isLimited, qty);
}

function addToCart(id, isLimited = false, qty = 1) {
  const item = findProduct(id);
  if (!item) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, item.stock);
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, img: item.img, qty: Math.min(qty, item.stock) });
  }
  saveCart();
  updateCart();
  toggleCart(true);
  showToast(`${item.name} added`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCart();
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  const product = findProduct(id);
  const max = product?.stock ?? 99;
  item.qty = Math.min(Math.max(1, item.qty + delta), max);
  saveCart();
  updateCart();
}

function saveCart() {
  safeSet('aether-cart', JSON.stringify(cart));
}
function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCart() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    countEl.innerText = cartCount();
    countEl.classList.add('bump');
    setTimeout(() => countEl.classList.remove('bump'), 200);
  }

  const container = document.getElementById('cart-items');
  if (container) {
    if (cart.length === 0) {
      container.innerHTML = '<p style="color: var(--text-sub); font-size: 13px;">Your selection is empty.</p>';
    } else {
      container.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-thumb">
            <img src="${esc(item.img)}" alt="${esc(item.name)}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${esc(item.name)}</div>
            <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
            <div class="cart-item-qty">
              <button type="button" onclick="changeCartQty(${item.id}, -1)" aria-label="Decrease">−</button>
              <span>${item.qty}</span>
              <button type="button" onclick="changeCartQty(${item.id}, 1)" aria-label="Increase">+</button>
            </div>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove">×</button>
        </div>
      `).join('');
    }
  }

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.innerText = fmt(cartTotal());

  renderCheckoutSummary();
}

/* ------------------------------------------------------------
   CART DRAWER
   ------------------------------------------------------------ */
let lastFocusedEl = null;

function toggleCart(forceOpen = false) {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  if (!drawer || !overlay) return;

  const isOpen = drawer.classList.contains('open');
  const shouldOpen = forceOpen || !isOpen;

  if (shouldOpen) {
    lastFocusedEl = document.activeElement;
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocusedEl?.focus?.();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const drawer = document.getElementById('drawer');
    if (drawer?.classList.contains('open')) toggleCart();
  }
});

/* ------------------------------------------------------------
   MOBILE MENU
   ------------------------------------------------------------ */
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.querySelector('.menu-toggle');
  if (!nav) return;
  const isOpen = nav.classList.contains('open');
  nav.classList.toggle('open');
  btn?.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
}

/* ------------------------------------------------------------
   ENTER NAVIGATION
   ------------------------------------------------------------ */
function focusNextOnEnter(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const fields = Array.from(form.querySelectorAll('input, select, textarea'))
    .filter(el => !el.disabled && el.offsetParent !== null);

  fields.forEach((field, idx) => {
    if (field.dataset.enterBound === '1') return;
    field.dataset.enterBound = '1';

    field.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;

      if (field.tagName === 'TEXTAREA') {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          form.requestSubmit();
        }
        return;
      }

      e.preventDefault();

      if (!field.checkValidity()) {
        field.reportValidity();
        return;
      }

      const next = fields[idx + 1];
      if (next) {
        next.focus();
        if (next.select) { try { next.select(); } catch (_) {} }
      } else {
        form.requestSubmit();
      }
    });
  });
}

/* ------------------------------------------------------------
   CHECKOUT
   ------------------------------------------------------------ */
function renderCheckoutSummary() {
  const summary = document.getElementById('checkout-summary');
  if (!summary) return;

  if (cart.length === 0) {
    summary.innerHTML = `
      <h3>ORDER SUMMARY</h3>
      <p style="color: var(--text-sub); font-size: 13px; margin-bottom: 20px;">Your cart is empty.</p>
      <a href="index.html" class="checkout-btn" style="display:block; text-align:center;">Back to catalog</a>
    `;
    return;
  }

  summary.innerHTML = `
    <h3>ORDER SUMMARY</h3>
    ${cart.map(i => `
      <div class="summary-item">
        <span class="name">${esc(i.name)}</span>
        <span class="qty">× ${i.qty}</span>
        <span class="price">${fmt(i.price * i.qty)}</span>
      </div>
    `).join('')}
    <div class="summary-line" style="margin-top: 18px;"><span>Shipping</span><span>Free</span></div>
    <div class="summary-line total"><span>Total</span><span>${fmt(cartTotal())}</span></div>
  `;
}

function placeOrder(e) {
  if (e) e.preventDefault();

  if (cart.length === 0) {
    showToast('Your cart is empty.', 'error');
    return;
  }

  const form = document.getElementById('checkout-form');
  if (!form) return;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const getVal = (id) => form.querySelector(`#${id}`)?.value || '';
  const nome = getVal('nome');
  const cognome = getVal('cognome');
  const email = getVal('email');
  const telefono = getVal('telefono');
  const indirizzo = getVal('indirizzo');
  const citta = getVal('citta');
  const cap = getVal('cap');
  const provincia = getVal('provincia');
  const paese = getVal('paese') || 'Italy';
  const note = getVal('note');

  const orderNum = 'AET-' + Math.random().toString(36).slice(2, 8).toUpperCase();
  const now = new Date();
  const dataOrdine = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  const oraOrdine = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const consegnaStimata = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000)
    .toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

  const itemsHtml = cart.map(i => `
    <div class="order-item">
      <span class="n">${esc(i.name)}</span>
      <span class="q">× ${i.qty}</span>
      <span class="p">${fmt(i.price * i.qty)}</span>
    </div>
  `).join('');

  const subtotale = cartTotal();
  const spedizione = 0;
  const totale = subtotale + spedizione;

  const container = document.getElementById('checkout-container');
  if (!container) return;

  container.innerHTML = `
    <div class="confirm-screen">
      <div class="order-number-box">
        <span class="label">Order ref.</span>
        <span class="value">${orderNum}</span>
      </div>

      <div class="confirm-icon">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <h1>Order confirmed</h1>
      <p>Thank you ${esc(nome) || 'for your order'}! We have received your request and will contact you shortly${email ? ` at <strong style="color:var(--text-main)">${esc(email)}</strong>` : ''}.</p>

      <div class="order-details-card">
        <h3>Order details</h3>
        <div class="detail-row"><span class="k">Order date</span><span class="v">${dataOrdine} · ${oraOrdine}</span></div>
        <div class="detail-row"><span class="k">Estimated delivery</span><span class="v">${consegnaStimata}</span></div>
        <div class="detail-row"><span class="k">Shipping method</span><span class="v">Express courier · Free</span></div>

        <div class="order-list">
          <div class="order-list-title">Items</div>
          ${itemsHtml || '<div class="order-item"><span class="n">—</span></div>'}
        </div>

        <div class="detail-row" style="margin-top: 12px;"><span class="k">Subtotal</span><span class="v">${fmt(subtotale)}</span></div>
        <div class="detail-row"><span class="k">Shipping</span><span class="v">${spedizione === 0 ? 'Free' : fmt(spedizione)}</span></div>
        <div class="detail-row total"><span class="k">Total</span><span class="v">${fmt(totale)}</span></div>

        <h3 style="margin-top: 28px;">Shipping details</h3>
        <div class="detail-row"><span class="k">Recipient</span><span class="v">${esc((nome + ' ' + cognome).trim()) || '—'}</span></div>
        <div class="detail-row"><span class="k">Email</span><span class="v">${esc(email) || '—'}</span></div>
        <div class="detail-row"><span class="k">Phone</span><span class="v">${esc(telefono) || '—'}</span></div>
        <div class="detail-row"><span class="k">Address</span><span class="v">${esc(indirizzo) || '—'}</span></div>
        <div class="detail-row"><span class="k">City</span><span class="v">${esc(citta) || '—'}${cap ? ` · ${esc(cap)}` : ''}${provincia ? ` (${esc(provincia)})` : ''}</span></div>
        <div class="detail-row"><span class="k">Country</span><span class="v">${esc(paese)}</span></div>
        ${note ? `<div class="detail-row"><span class="k">Notes</span><span class="v">${esc(note)}</span></div>` : ''}
      </div>

      <div class="confirm-actions">
        <a href="index.html" class="checkout-btn">Back to catalog</a>
      </div>
    </div>
  `;

  cart = [];
  saveCart();
  updateCart();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------------------------------------------------------
   CONTACT
   ------------------------------------------------------------ */
function submitContact(e) {
  if (e) e.preventDefault();

  const form = document.getElementById('contact-form');
  if (!form) return;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const getVal = (id) => form.querySelector(`#${id}`)?.value || '';
  const nome = getVal('c-nome');
  const cognome = getVal('c-cognome');
  const email = getVal('c-email');
  const oggetto = getVal('c-oggetto');
  const messaggio = getVal('c-messaggio');

  const now = new Date();
  const dataMsg = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  const oraMsg = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  const rifMsg = 'MSG-' + Math.random().toString(36).slice(2, 8).toUpperCase();

  const container = document.getElementById('contact-container');
  if (!container) return;

  container.innerHTML = `
    <div class="confirm-screen">
      <div class="order-number-box">
        <span class="label">Message ref.</span>
        <span class="value">${rifMsg}</span>
      </div>

      <div class="confirm-icon">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <h1>Message sent</h1>
      <p>Thank you ${esc(nome) || ''}! We have received your message and will reply within 48 hours${email ? ` at <strong style="color:var(--text-main)">${esc(email)}</strong>` : ''}.</p>

      <div class="order-details-card">
        <h3>Message details</h3>
        <div class="detail-row"><span class="k">Sent on</span><span class="v">${dataMsg} · ${oraMsg}</span></div>
        <div class="detail-row"><span class="k">Sender</span><span class="v">${esc((nome + ' ' + cognome).trim()) || '—'}</span></div>
        <div class="detail-row"><span class="k">Email</span><span class="v">${esc(email) || '—'}</span></div>
        <div class="detail-row"><span class="k">Subject</span><span class="v">${esc(oggetto) || '—'}</span></div>
        <div class="detail-row"><span class="k">Response time</span><span class="v">Within 48 hours</span></div>
        ${messaggio ? `<div class="detail-row"><span class="k">Message</span><span class="v" style="max-width: 60%; white-space: pre-wrap;">${esc(messaggio)}</span></div>` : ''}
      </div>

      <div class="confirm-actions">
        <a href="index.html" class="checkout-btn">Back to catalog</a>
      </div>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------------------------------------------------------
   THEME
   ------------------------------------------------------------ */
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('aether-theme'); } catch (_) {}
  const theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  safeSet('aether-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.innerHTML = theme === 'dark'
    ? `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`
    : `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
}

window.addEventListener('beforeunload', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  safeSet('aether-theme', current);
});

/* ------------------------------------------------------------
   INIT
   ------------------------------------------------------------ */
initTheme();

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderLimited();
  renderProductDetail();
  renderCheckoutSummary();
  updateCart();
  focusNextOnEnter('checkout-form');
  focusNextOnEnter('contact-form');
});

/* ------------------------------------------------------------
   GLOBAL EXPORTS (for inline onclick)
   ------------------------------------------------------------ */
window.setCategory = setCategory;
window.setMaterial = setMaterial;
window.filterProducts = filterProducts;
window.toggleSortMenu = toggleSortMenu;
window.setSort = setSort;
window.changeQty = changeQty;
window.setQty = setQty;
window.addToCartWithQty = addToCartWithQty;
window.removeFromCart = removeFromCart;
window.changeCartQty = changeCartQty;
window.toggleCart = toggleCart;
window.toggleMobileNav = toggleMobileNav;
window.toggleTheme = toggleTheme;
window.placeOrder = placeOrder;
window.submitContact = submitContact;
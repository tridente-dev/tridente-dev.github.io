// js/ui.js - Mobile menu and modal with accessibility

import { detailsDatabase } from './data.js';

/* ============================ MOBILE MENU ============================ */

export function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    const btn  = document.getElementById('mobile-menu-btn');
    if (!menu) return;

    const isOpening = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    if (btn) btn.setAttribute('aria-expanded', isOpening ? 'true' : 'false');

    if (icon) {
        icon.innerHTML = isOpening
            ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'
            : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
}

window.toggleMobileMenu = toggleMobileMenu;

document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    if (!menu || menu.classList.contains('hidden') || !btn) return;
    if (!menu.contains(e.target) && !btn.contains(e.target)) toggleMobileMenu();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menu = document.getElementById('mobile-menu');
        if (menu && !menu.classList.contains('hidden')) toggleMobileMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        const menu = document.getElementById('mobile-menu');
        const btn  = document.getElementById('mobile-menu-btn');
        const icon = document.getElementById('menu-icon');
        if (menu) menu.classList.add('hidden');
        if (btn)  btn.setAttribute('aria-expanded', 'false');
        if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
});

/* ============================ MODAL ============================ */

let lastFocusedElement = null;

export function openModal(key) {
    const item = detailsDatabase[key];
    if (!item) return;

    lastFocusedElement = document.activeElement;

    const titleEl = document.getElementById('modal-title');
    const contentEl = document.getElementById('modal-content');
    if (titleEl) titleEl.textContent = item.title;
    if (contentEl) contentEl.innerHTML = item.text;

    const modal = document.getElementById('info-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e) => {
        if (e.key !== 'Tab') return;
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); first.focus();
        }
    };
    modal.addEventListener('keydown', trap);
    modal._trap = trap;
}

export function closeModal() {
    const modal = document.getElementById('info-modal');
    if (!modal || modal.classList.contains('hidden')) return;

    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (modal._trap) modal.removeEventListener('keydown', modal._trap);

    lastFocusedElement?.focus?.();
    lastFocusedElement = null;
}

window.openModal = openModal;
window.closeModal = closeModal;

document.addEventListener('click', (e) => {
    const modal = document.getElementById('info-modal');
    if (modal && e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
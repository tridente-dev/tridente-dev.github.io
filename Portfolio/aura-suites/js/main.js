// js/main.js - Entry-point that loads shared modules

import { toggleMobileMenu, openModal, closeModal } from './ui.js';
import { mountComponents } from './components.js';

// Global exposure for inline onclick in the HTML
window.toggleMobileMenu = toggleMobileMenu;
window.openModal = openModal;
window.closeModal = closeModal;

// If the page uses [data-component] placeholders, mount header/footer
document.addEventListener('DOMContentLoaded', async () => {
    const path = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const currentPage = path === 'index' ? '' : path;
    await mountComponents(currentPage);
});
// js/components.js - Shared header and footer

const NAV_ITEMS = [
    { href: 'index.html#about', label: 'About Us', match: '' },
    { href: 'camere.html', label: 'Rooms', match: 'camere' },
    { href: 'wellness.html', label: 'Wellness & Spa', match: 'wellness' },
    { href: 'ristorazione.html', label: 'Restaurants, Bar & Nightlife', match: 'ristorazione' },
    { href: 'escursioni.html', label: 'Excursions', match: 'escursioni' }
];

export function renderHeader(currentPage = '') {
    const desktopLinks = NAV_ITEMS.map(item => {
        const active = item.match === currentPage;
        const cls = active
            ? 'text-neutral-900 font-semibold transition'
            : 'hover:text-neutral-900 transition';
        return `<a href="${item.href}" class="${cls}">${item.label}</a>`;
    }).join('');

    const mobileLinks = NAV_ITEMS.map(item =>
        `<a href="${item.href}" onclick="toggleMobileMenu()" class="block text-sm font-semibold text-neutral-800 py-1 border-b border-neutral-200">${item.label}</a>`
    ).join('');

    return `
    <header class="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-neutral-soft" role="banner">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="index.html" class="font-serif-title text-2xl tracking-widest uppercase font-semibold text-neutral-900" aria-label="Aura Suites - Home">AURA</a>

            <nav class="hidden lg:flex items-center space-x-6 text-sm tracking-wide font-medium text-neutral-600" aria-label="Main navigation">
                ${desktopLinks}
            </nav>

            <div class="hidden lg:flex items-center space-x-4">
                <span class="text-[10px] uppercase tracking-wider bg-sand px-3 py-1 rounded-full border border-neutral-soft font-semibold text-neutral-600">Adults Only 16+</span>
                <a href="prenotazione.html" class="bg-stone-dark text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition">Book Now</a>
            </div>

            <button id="mobile-menu-btn" onclick="toggleMobileMenu()" class="lg:hidden text-neutral-900 p-2 focus:outline-none" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
                <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div id="mobile-menu" class="hidden lg:hidden bg-cream border-t border-neutral-200 px-6 py-4 space-y-3">
            ${mobileLinks}
            <div class="pt-2 flex flex-col space-y-2">
                <span class="text-[10px] uppercase tracking-wider bg-sand px-3 py-1 rounded-full border border-neutral-soft font-semibold text-neutral-600 text-center">Adults Only 16+</span>
                <a href="prenotazione.html" class="bg-stone-dark text-white text-center py-3 rounded-xl text-xs uppercase tracking-widest font-semibold">Book Now</a>
            </div>
        </div>
    </header>`;
}

export function renderFooter() {
    return `
    <footer class="bg-sand border-t border-neutral-soft py-8 mt-12">
        <div class="max-w-7xl mx-auto px-6 text-center text-xs text-neutral-500">
            © 2026 Aura Suites. All rights reserved.
        </div>
    </footer>`;
}

export async function mountComponents(currentPage = '') {
    const headerEl = document.querySelector('[data-component="header"]');
    const footerEl = document.querySelector('[data-component="footer"]');
    if (headerEl) headerEl.outerHTML = renderHeader(currentPage);
    if (footerEl) footerEl.outerHTML = renderFooter();

    const ui = await import('./ui.js');
    window.toggleMobileMenu = ui.toggleMobileMenu;
    window.openModal = ui.openModal;
    window.closeModal = ui.closeModal;
}
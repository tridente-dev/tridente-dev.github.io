// js/utils.js - Shared utilities

export function calcolaEta(birthDate, refDate) {
    let age = refDate.getFullYear() - birthDate.getFullYear();
    const m = refDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && refDate.getDate() < birthDate.getDate())) age--;
    return age;
}

export function formatEuro(n) {
    return `€${n.toLocaleString('en-GB')}`;
}

export function showToast(msg, type = 'info') {
    const colors = {
        success: 'bg-emerald-600 text-white',
        error:   'bg-red-600 text-white',
        info:    'bg-neutral-900 text-white'
    };
    const t = document.createElement('div');
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');
    t.textContent = msg;
    t.className = `fixed bottom-6 right-6 z-[100] px-5 py-3 rounded-xl shadow-lg text-xs font-semibold toast-enter ${colors[type] || colors.info}`;
    document.body.appendChild(t);
    setTimeout(() => {
        t.style.opacity = '0';
        t.style.transition = 'opacity .3s';
        setTimeout(() => t.remove(), 300);
    }, 3200);
}

export function debounce(fn, delay = 200) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
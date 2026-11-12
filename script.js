document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. GESTIONE LINGUA - EDITORIAL SELECTOR
       ========================================================= */
    const langOverlay = document.getElementById('lang-overlay');
    const langList = document.getElementById('lang-list');
    const langSearchInput = document.getElementById('lang-search-input');
    const langToggle = document.getElementById('lang-toggle');
    const langCount = document.getElementById('lang-count');
    const langClose = document.getElementById('lang-close');
    const langEyebrow = document.getElementById('lang-eyebrow');
    const langModalTitle = document.getElementById('lang-modal-title');
    const langModalSubtitle = document.getElementById('lang-modal-subtitle');
    const htmlElement = document.documentElement;

    const supportedLanguages = [
        { code: 'en', flag: '🇬🇧', name: 'English',            english: 'English' },
        { code: 'it', flag: '🇮🇹', name: 'Italiano',           english: 'Italian' },
        { code: 'es', flag: '🇪🇸', name: 'Español',            english: 'Spanish' },
        { code: 'fr', flag: '🇫🇷', name: 'Français',           english: 'French' },
        { code: 'de', flag: '🇩🇪', name: 'Deutsch',            english: 'German' },
        { code: 'pt', flag: '🇵🇹', name: 'Português',          english: 'Portuguese' },
        { code: 'zh', flag: '🇨🇳', name: '中文',                english: 'Chinese' },
        { code: 'ja', flag: '🇯🇵', name: '日本語',              english: 'Japanese' },
        { code: 'id', flag: '🇮🇩', name: 'Bahasa Indonesia',   english: 'Indonesian' },
        { code: 'ar', flag: '🇸🇦', name: 'العربية',            english: 'Arabic' },
        { code: 'hi', flag: '🇮🇳', name: 'हिन्दी',             english: 'Hindi' },
        { code: 'ru', flag: '🇷🇺', name: 'Русский',            english: 'Russian' },
        { code: 'ko', flag: '🇰🇷', name: '한국어',              english: 'Korean' },
        { code: 'tr', flag: '🇹🇷', name: 'Türkçe',             english: 'Turkish' },
        { code: 'nl', flag: '🇳🇱', name: 'Nederlands',         english: 'Dutch' },
        { code: 'pl', flag: '🇵🇱', name: 'Polski',             english: 'Polish' }
    ];

    const overlayTexts = {
        eyebrow:  { en: "Language", it: "Lingua", fr: "Langue", de: "Sprache", es: "Idioma", pt: "Idioma", zh: "语言", ja: "言語", id: "Bahasa", ar: "اللغة", hi: "भाषा", ru: "Язык", ko: "언어", tr: "Dil", nl: "Taal", pl: "Język" },
        title:    { en: "Choose your language", it: "Scegli la tua lingua", fr: "Choisissez votre langue", de: "Wählen Sie Ihre Sprache", es: "Elige tu idioma", pt: "Escolha o seu idioma", zh: "选择您的语言", ja: "言語を選択してください", id: "Pilih bahasa Anda", ar: "اختر لغتك", hi: "अपनी भाषा चुनें", ru: "Выберите язык", ko: "언어를 선택하세요", tr: "Dilinizi seçin", nl: "Kies uw taal", pl: "Wybierz swój język" },
        subtitle: { en: "Select the language you prefer to browse the site.", it: "Seleziona la lingua con cui preferisci navigare il sito.", fr: "Sélectionnez la langue dans laquelle vous préférez naviguer sur le site.", de: "Wählen Sie die Sprache, in der Sie die Website durchsuchen möchten.", es: "Selecciona el idioma con el que prefieres navegar por el sitio.", pt: "Selecione o idioma com o qual prefere navegar no site.", zh: "选择您希望浏览网站时使用的语言。", ja: "サイトを閲覧する際に希望する言語を選択してください。", id: "Pilih bahasa yang Anda sukai untuk menjelajahi situs.", ar: "حدد اللغة التي تفضل تصفح الموقع بها.", hi: "वह भाषा चुनें जिसमें आप साइट ब्राउज़ करना पसंद करते हैं।", ru: "Выберите язык, на котором вы предпочитаете просматривать сайт.", ko: "사이트를 탐색할 때 선호하는 언어를 선택하세요.", tr: "Siteyi gezinmek için tercih ettiğiniz dili seçin.", nl: "Selecteer de taal waarin u de site wilt verkennen.", pl: "Wybierz język, w którym chcesz przeglądać stronę." },
        search:   { en: "Search a language…", it: "Cerca una lingua…", fr: "Rechercher une langue…", de: "Sprache suchen…", es: "Buscar un idioma…", pt: "Pesquisar um idioma…", zh: "搜索语言…", ja: "言語を検索…", id: "Cari bahasa…", ar: "ابحث عن لغة…", hi: "भाषा खोजें…", ru: "Поиск языка…", ko: "언어 검색…", tr: "Dil ara…", nl: "Zoek een taal…", pl: "Szukaj języka…" },
        close:    { en: "Close", it: "Chiudi", fr: "Fermer", de: "Schließen", es: "Cerrar", pt: "Fechar", zh: "关闭", ja: "閉じる", id: "Tutup", ar: "إغلاق", hi: "बंद करें", ru: "Закрыть", ko: "닫기", tr: "Kapat", nl: "Sluiten", pl: "Zamknij" },
        count:    { en: "languages available", it: "lingue disponibili", fr: "langues disponibles", de: "Sprachen verfügbar", es: "idiomas disponibles", pt: "idiomas disponíveis", zh: "种语言可用", ja: "言語が利用可能", id: "bahasa tersedia", ar: "لغات متاحة", hi: "भाषाएँ उपलब्ध", ru: "языков доступно", ko: "개 언어 사용 가능", tr: "dil mevcut", nl: "talen beschikbaar", pl: "języków dostępnych" }
    };

    let currentLang = 'en';
    let filteredLanguages = [...supportedLanguages];
    let focusedIndex = -1;

    function getOverlayText(key, lang) {
        return (overlayTexts[key] && (overlayTexts[key][lang] || overlayTexts[key]['en'])) || '';
    }

    function applyTranslation(langCode) {
        currentLang = langCode;
        const dict = translations[langCode] || translations['en'];
        const fallback = translations['en'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = dict[key] || fallback[key];
            if (value) {
                if (el.children.length === 0) {
                    el.textContent = value;
                } else {
                    const textNode = Array.from(el.childNodes).find(n => n.nodeType === 3);
                    if (textNode) textNode.textContent = value;
                }
            }
        });

        htmlElement.setAttribute('lang', langCode);
        if (langToggle) langToggle.setAttribute('data-current-lang', langCode);

        if (langCode === 'ar') {
            htmlElement.setAttribute('dir', 'rtl');
            document.body.style.direction = 'rtl';
        } else {
            htmlElement.setAttribute('dir', 'ltr');
            document.body.style.direction = 'ltr';
        }

        if (langSearchInput) {
            langSearchInput.placeholder = getOverlayText('search', langCode);
        }
        if (langClose) {
            langClose.textContent = getOverlayText('close', langCode);
        }
        updateLangCount();
    }

    function renderLangList(filter = '') {
        if (!langList) return;

        const q = filter.trim().toLowerCase();
        filteredLanguages = supportedLanguages.filter(l =>
            l.name.toLowerCase().includes(q) ||
            l.english.toLowerCase().includes(q) ||
            l.code.toLowerCase().includes(q)
        );

        langList.innerHTML = '';

        if (filteredLanguages.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'lang-empty';
            empty.textContent = 'Nessun risultato / No results';
            langList.appendChild(empty);
            updateLangCount();
            return;
        }

        filteredLanguages.forEach((lang, i) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'lang-item' + (lang.code === currentLang ? ' is-current' : '');
            btn.dataset.code = lang.code;
            btn.setAttribute('role', 'option');
            btn.setAttribute('aria-selected', lang.code === currentLang ? 'true' : 'false');
            btn.style.animationDelay = (i * 0.025) + 's';

            // MODIFICA: Rimosso il flag emoji, aggiunto acronimo e rimosso lang-code duplicato
            btn.innerHTML = `
                <span class="lang-flag lang-acronym">${lang.code.toUpperCase()}</span>
                <span class="lang-names">
                    <span class="lang-native">${lang.name}</span>
                </span>
                <svg class="lang-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;

            btn.addEventListener('click', () => selectLanguage(lang.code));
            langList.appendChild(btn);
        });

        focusedIndex = -1;
        updateLangCount();
    }

    function updateLangCount() {
        if (!langCount) return;
        const n = filteredLanguages.length;
        const label = getOverlayText('count', currentLang);
        langCount.textContent = `${n} ${label}`;
    }

    function selectLanguage(code) {
        try { localStorage.setItem('siteLang', code); } catch (e) {}
        applyTranslation(code);
        document.querySelectorAll('.lang-item').forEach(el => {
            const isCurrent = el.dataset.code === code;
            el.classList.toggle('is-current', isCurrent);
            el.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
        });
        closeOverlay();
    }

    function openOverlay() {
        if (!langOverlay) return;
        langOverlay.style.display = 'flex';
        void langOverlay.offsetWidth;
        langOverlay.classList.remove('hidden');

        if (langEyebrow) langEyebrow.textContent = getOverlayText('eyebrow', currentLang);
        if (langModalTitle) langModalTitle.textContent = getOverlayText('title', currentLang);
        if (langModalSubtitle) langModalSubtitle.textContent = getOverlayText('subtitle', currentLang);
        if (langSearchInput) {
            langSearchInput.value = '';
            langSearchInput.placeholder = getOverlayText('search', currentLang);
        }
        if (langClose) langClose.textContent = getOverlayText('close', currentLang);

        renderLangList('');
        setTimeout(() => { if (langSearchInput) langSearchInput.focus(); }, 100);
    }

    function closeOverlay() {
        if (!langOverlay) return;
        langOverlay.classList.add('hidden');
        setTimeout(() => { langOverlay.style.display = 'none'; }, 400);
    }

    renderLangList('');

    const savedLang = (() => { try { return localStorage.getItem('siteLang'); } catch(e) { return null; } })();

    if (savedLang) {
        if (langOverlay) {
            langOverlay.style.display = 'none';
            langOverlay.classList.add('hidden');
        }
        applyTranslation(savedLang);
    } else {
        if (langOverlay) {
            langOverlay.style.display = 'flex';
        }
        applyTranslation('en');
    }

    if (langSearchInput) {
        langSearchInput.addEventListener('input', (e) => {
            renderLangList(e.target.value);
        });

        langSearchInput.addEventListener('keydown', (e) => {
            const items = langList.querySelectorAll('.lang-item');
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                focusedIndex = Math.min(focusedIndex + 1, items.length - 1);
                updateKeyboardFocus(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                focusedIndex = Math.max(focusedIndex - 1, 0);
                updateKeyboardFocus(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (focusedIndex >= 0 && items[focusedIndex]) {
                    items[focusedIndex].click();
                } else if (items.length > 0) {
                    items[0].click();
                }
            } else if (e.key === 'Escape') {
                const hasSaved = (() => { try { return !!localStorage.getItem('siteLang'); } catch(_) { return false; } })();
                if (hasSaved) closeOverlay();
            }
        });
    }

    function updateKeyboardFocus(items) {
        items.forEach((el, i) => {
            el.classList.toggle('is-focused', i === focusedIndex);
            if (i === focusedIndex) {
                el.scrollIntoView({ block: 'nearest' });
            }
        });
    }

    if (langToggle) {
        langToggle.addEventListener('click', openOverlay);
    }

    if (langClose) {
        langClose.addEventListener('click', () => {
            const hasSaved = (() => { try { return !!localStorage.getItem('siteLang'); } catch(_) { return false; } })();
            if (hasSaved) closeOverlay();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && langOverlay && !langOverlay.classList.contains('hidden')) {
            const hasSaved = (() => { try { return !!localStorage.getItem('siteLang'); } catch(_) { return false; } })();
            if (hasSaved) closeOverlay();
        }
    });

    if (langOverlay) {
        langOverlay.addEventListener('click', (e) => {
            if (e.target === langOverlay) {
                const hasSaved = (() => { try { return !!localStorage.getItem('siteLang'); } catch(_) { return false; } })();
                if (hasSaved) closeOverlay();
            }
        });
    }

    /* =========================================================
       2. GESTIONE TEMA
       ========================================================= */
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            htmlElement.style.colorScheme = (newTheme === 'dark') ? 'dark' : 'light';
            try { localStorage.setItem('theme', newTheme); } catch (_) {}
        });
    }

    /* =========================================================
       3. FADE-IN ANIMATIONS
       ========================================================= */
    const fadeItems = document.querySelectorAll('.project-item, .about-content, .contact-card, .hero-content > *');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeItems.forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });

    /* =========================================================
       4. HEADER HIDE ON SCROLL
       ========================================================= */
    let lastScroll = 0;
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                header.style.transform = 'translateY(0)';
                return;
            }

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }

    /* =========================================================
       5. SMOOTH SCROLL
       ========================================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* =========================================================
       6. AUTO-FIT EMAIL
       ========================================================= */
    const emailEl = document.getElementById('contact-email');

    if (emailEl) {
        const fitEmail = () => {
            if (!emailEl) return;

            emailEl.style.fontSize = '';
            emailEl.style.whiteSpace = 'nowrap';

            const parent = emailEl.parentElement;
            const parentStyles = window.getComputedStyle(parent);
            const paddingLeft = parseFloat(parentStyles.paddingLeft) || 0;
            const paddingRight = parseFloat(parentStyles.paddingRight) || 0;
            const availableWidth = parent.clientWidth - paddingLeft - paddingRight;

            const computed = window.getComputedStyle(emailEl);
            let fontSize = parseFloat(computed.fontSize);

            const MIN_FONT = 10;
            let safety = 0;

            while (emailEl.scrollWidth > availableWidth && fontSize > MIN_FONT && safety < 80) {
                fontSize -= 0.5;
                emailEl.style.fontSize = fontSize + 'px';
                safety++;
            }

            if (emailEl.scrollWidth > availableWidth) {
                emailEl.style.letterSpacing = '-0.04em';
            } else {
                emailEl.style.letterSpacing = '';
            }
        };

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(fitEmail);
        } else {
            window.addEventListener('load', fitEmail);
        }

        fitEmail();

        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(fitEmail, 100);
        });

        window.addEventListener('orientationchange', () => {
            setTimeout(fitEmail, 200);
        });
    }
});
let currentLanguage = 'en';
let translations = {};
let isDarkMode = false;

async function loadTranslations() {
    try {
        const response = await fetch('./translations.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        translations = await response.json();
        setLanguage(currentLanguage);
    } catch (error) {
        console.error("Could not load translations:", error);
        document.body.innerHTML = "<p style='color:red; text-align:center;'>Error loading page content. Please try again later.</p>";
    }
}

function switchTheme(darkModeEnabled) {
    isDarkMode = darkModeEnabled;
    const sunIcon = document.getElementById("sun");
    const moonIcon = document.getElementById("moon");

    if (isDarkMode) {
        document.documentElement.style.setProperty('--mainTextColor', 'var(--mainTextColor-dark)');
        document.documentElement.style.setProperty('--secondaryTextColor', 'var(--secondaryTextColor-dark)');
        document.documentElement.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-dark)');
        document.documentElement.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-dark)');
        document.documentElement.style.setProperty('--mainBgColor', 'var(--mainBgColor-dark)');
        if (sunIcon) {
            sunIcon.classList.add("disabled_icon");
            sunIcon.classList.remove("enabled_icon");
        }
        if (moonIcon) {
            moonIcon.classList.add("enabled_icon");
            moonIcon.classList.remove("disabled_icon");
        }
    } else {
        document.documentElement.style.setProperty('--mainTextColor', 'var(--mainTextColor-light)');
        document.documentElement.style.setProperty('--secondaryTextColor', 'var(--secondaryTextColor-light)');
        document.documentElement.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-light)');
        document.documentElement.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-light)');
        document.documentElement.style.setProperty('--mainBgColor', 'var(--mainBgColor-light)');
        if (sunIcon) {
            sunIcon.classList.add("enabled_icon");
            sunIcon.classList.remove("disabled_icon");
        }
        if (moonIcon) {
            moonIcon.classList.add("disabled_icon");
            moonIcon.classList.remove("enabled_icon");
        }
    }
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    if (translations[lang] && translations[lang].pageTitle) {
        document.title = translations[lang].pageTitle;
    }

    const metaOgDesc = document.querySelector('meta[property="og:description"]');
    if (metaOgDesc && translations[lang] && translations[lang].metaOgDescription) {
        metaOgDesc.content = translations[lang].metaOgDescription;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang] && translations[lang].metaDescription) {
        metaDesc.content = translations[lang].metaDescription;
    }

    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const htmlElement = element;
        const key = htmlElement.getAttribute('data-translate-key');
        if (key && translations[lang] && translations[lang][key]) {
            if (htmlElement.tagName === 'A' && htmlElement.href && !htmlElement.href.startsWith(window.location.origin) && !htmlElement.href.startsWith('mailto:')) {
                // Preserve external links
            } else if (key === 'resumeLink' && htmlElement.tagName === 'A') {
                 htmlElement.href = translations[lang][key];
            }
            else {
                htmlElement.innerHTML = translations[lang][key];
            }
        }
    });

    const resumeLinkElement = document.getElementById('resumeLink');
    if (resumeLinkElement && translations[lang] && translations[lang].resumeLink) {
        resumeLinkElement.href = translations[lang].resumeLink;
    }

    const langToggleButton = document.getElementById('language-toggle-btn');
    if (langToggleButton) {
        langToggleButton.textContent = lang.toUpperCase();
        langToggleButton.setAttribute('aria-label', lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês');
    }
}

function getInitialLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        return savedLang;
    }
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith('pt')) {
        return 'pt';
    }
    return 'en';
}

window.onload = function () {
    const savedTheme = localStorage.getItem('darkMode');
    isDarkMode = savedTheme === 'enabled';
    switchTheme(isDarkMode);

    const sunIcon = document.getElementById('sun');
    const moonIcon = document.getElementById('moon');

    if (sunIcon) {
        sunIcon.addEventListener('click', () => {
            switchTheme(true);
        });
    }
    if (moonIcon) {
        moonIcon.addEventListener('click', () => {
            switchTheme(false);
        });
    }

    currentLanguage = getInitialLanguage();
    loadTranslations();

    const langToggleButton = document.getElementById('language-toggle-btn');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'pt' : 'en';
            setLanguage(newLang);
        });
    }

    console.log("Page loaded and initialized.");
};
/**
 * KaushalPath - Internationalization (i18n) Module
 * Supports: English (en), Hindi (hi), Tamil (ta), Telugu (te), Marathi (mr)
 * Uses Google Translate API naming conventions
 */

const I18n = (function() {
  // Supported languages following Google Translate API conventions
  const SUPPORTED_LANGUAGES = ['en', 'hi', 'ta', 'te', 'mr'];
  const DEFAULT_LANGUAGE = 'en';
  const STORAGE_KEY = 'kaushalpath_language';

  // Locale cache to avoid repeated fetches
  let localeCache = {};
  let currentLanguage = DEFAULT_LANGUAGE;
  let currentTranslations = null;

  /**
   * Initialize i18n system
   * @returns {Promise<void>}
   */
  async function init() {
    // Check localStorage for saved preference
    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      currentLanguage = savedLanguage;
    } else {
      // Try to detect browser language
      const browserLang = navigator.language?.split('-')[0];
      if (SUPPORTED_LANGUAGES.includes(browserLang)) {
        currentLanguage = browserLang;
      }
    }

    // Load initial translations
    await loadLocale(currentLanguage);
    applyTranslations();
    updateLanguageSelector();

    console.log(`[i18n] Initialized with language: ${currentLanguage}`);
  }

  /**
   * Load locale file
   * @param {string} langCode - Language code (en, hi, ta, te, mr)
   * @returns {Promise<object>}
   */
  async function loadLocale(langCode) {
    if (!SUPPORTED_LANGUAGES.includes(langCode)) {
      console.warn(`[i18n] Unsupported language: ${langCode}, falling back to ${DEFAULT_LANGUAGE}`);
      langCode = DEFAULT_LANGUAGE;
    }

    // Return from cache if available
    if (localeCache[langCode]) {
      currentTranslations = localeCache[langCode];
      return currentTranslations;
    }

    try {
      const response = await fetch(`locales/${langCode}.json`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const translations = await response.json();
      localeCache[langCode] = translations;
      currentTranslations = translations;
      
      return translations;
    } catch (error) {
      console.error(`[i18n] Failed to load locale '${langCode}':`, error);
      
      // Fallback to English if not already trying English
      if (langCode !== DEFAULT_LANGUAGE) {
        return loadLocale(DEFAULT_LANGUAGE);
      }
      return null;
    }
  }

  /**
   * Switch to a new language
   * @param {string} langCode - Target language code
   * @returns {Promise<boolean>}
   */
  async function switchLanguage(langCode) {
    if (!SUPPORTED_LANGUAGES.includes(langCode)) {
      console.error(`[i18n] Invalid language code: ${langCode}`);
      return false;
    }

    if (langCode === currentLanguage) {
      return true; // Already on this language
    }

    try {
      await loadLocale(langCode);
      currentLanguage = langCode;
      
      // Persist preference
      localStorage.setItem(STORAGE_KEY, langCode);
      
      // Update document language attribute
      document.documentElement.lang = langCode;
      
      // Apply translations to DOM
      applyTranslations();
      
      // Update language selector UI
      updateLanguageSelector();
      
      // Dispatch custom event for components that need to know
      window.dispatchEvent(new CustomEvent('languagechange', { 
        detail: { language: langCode, translations: currentTranslations }
      }));

      console.log(`[i18n] Switched to: ${langCode}`);
      return true;
    } catch (error) {
      console.error(`[i18n] Failed to switch language:`, error);
      return false;
    }
  }

  /**
   * Get translation by key path (e.g., 'hero.title')
   * @param {string} keyPath - Dot-notation key path
   * @param {object} params - Optional interpolation parameters
   * @returns {string}
   */
  function t(keyPath, params = {}) {
    if (!currentTranslations) {
      console.warn('[i18n] Translations not loaded');
      return keyPath;
    }

    const keys = keyPath.split('.');
    let value = currentTranslations;

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        console.warn(`[i18n] Missing translation: ${keyPath}`);
        return keyPath;
      }
    }

    // Handle interpolation: {{paramName}}
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, paramName) => {
        return params[paramName] !== undefined ? params[paramName] : match;
      });
    }

    return value;
  }

  /**
   * Apply translations to all elements with data-i18n attributes
   */
  function applyTranslations() {
    if (!currentTranslations) return;

    // Handle text content: data-i18n="key.path"
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = t(key);
      if (translation && translation !== key) {
        element.textContent = translation;
      }
    });

    // Handle placeholders: data-i18n-placeholder="key.path"
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = t(key);
      if (translation && translation !== key) {
        element.placeholder = translation;
      }
    });

    // Handle aria-labels: data-i18n-aria="key.path"
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const key = element.getAttribute('data-i18n-aria');
      const translation = t(key);
      if (translation && translation !== key) {
        element.setAttribute('aria-label', translation);
      }
    });

    // Handle title attributes: data-i18n-title="key.path"
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      const translation = t(key);
      if (translation && translation !== key) {
        element.title = translation;
      }
    });
  }

  /**
   * Update the language selector UI
   */
  function updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
      selector.value = currentLanguage;
    }

    // Update active pill if using pill-style selector
    document.querySelectorAll('.lang-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.lang === currentLanguage);
    });

    // Update dropdown button text
    const dropdownBtn = document.querySelector('.lang-dropdown__btn');
    if (dropdownBtn && currentTranslations?.meta?.nativeName) {
      const flagSpan = dropdownBtn.querySelector('.lang-flag');
      const nameSpan = dropdownBtn.querySelector('.lang-name');
      if (nameSpan) {
        nameSpan.textContent = currentTranslations.meta.nativeName;
      }
    }
  }

  /**
   * Get list of available languages with metadata
   * @returns {Promise<Array>}
   */
  async function getAvailableLanguages() {
    const languages = [];
    
    for (const langCode of SUPPORTED_LANGUAGES) {
      try {
        const locale = localeCache[langCode] || await loadLocale(langCode);
        if (locale?.meta) {
          languages.push({
            code: locale.meta.code,
            name: locale.meta.name,
            nativeName: locale.meta.nativeName,
            direction: locale.meta.direction
          });
        }
      } catch (e) {
        console.warn(`[i18n] Could not load metadata for ${langCode}`);
      }
    }
    
    return languages;
  }

  /**
   * Get current language code
   * @returns {string}
   */
  function getCurrentLanguage() {
    return currentLanguage;
  }

  /**
   * Get current translations object
   * @returns {object}
   */
  function getTranslations() {
    return currentTranslations;
  }

  /**
   * Check if a language is supported
   * @param {string} langCode
   * @returns {boolean}
   */
  function isSupported(langCode) {
    return SUPPORTED_LANGUAGES.includes(langCode);
  }

  // Public API
  return {
    init,
    switchLanguage,
    t,
    applyTranslations,
    getAvailableLanguages,
    getCurrentLanguage,
    getTranslations,
    isSupported,
    SUPPORTED_LANGUAGES,
    DEFAULT_LANGUAGE
  };
})();

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  I18n.init();
});

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18n;
}

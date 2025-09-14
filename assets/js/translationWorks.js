const translations = {
    en: {

    },
    ru: {

    },
    kz: {

    },
    getTranslation: function (lang, key) {
        return this[lang]?.[key] || `[TRANSLATION MISSING: ${key}]`;
    },

    applyFontSettings: function (lang) {
        const settings = this[lang] || this.en;
        document.body.style.fontFamily = settings.font_family;
        document.body.style.fontWeight = settings.font_weight;
        document.body.style.letterSpacing = settings.letter_spacing;
    },
};
document.addEventListener("DOMContentLoaded", function () {
  // Инициализация элементов
  const languageSelector = document.getElementById("language-selector");
  const savedLang = localStorage.getItem("language") || "en";

  // Применяем сохраненный язык
  languageSelector.value = savedLang;
  updatePageLanguage(savedLang, true);

  // Обработчик смены языка
  languageSelector.addEventListener("change", function () {
    const lang = this.value;
    localStorage.setItem("language", lang);
    updatePageLanguage(lang, false);
  });

  function updatePageLanguage(lang, isInitialLoad) {
    // 1. Применяем настройки шрифта
    applyFontSettings(lang);

    // 2. Анимация (кроме первой загрузки)
    if (!isInitialLoad) {
      startLanguageChangeAnimation();
    }

    // 3. Обновляем основные тексты
    updateMainTexts(lang);

    // 4. Обновляем карточки
    updateCardsContent(lang);

    // 5. Завершаем анимацию
    if (!isInitialLoad) {
      endLanguageChangeAnimation();
    }
  }

  function applyFontSettings(lang) {
    const settings = translations[lang] || translations.en;
    document.body.style.fontFamily = settings.font_family;
    document.body.style.fontWeight = settings.font_weight;
    document.body.style.letterSpacing = settings.letter_spacing;
  }

  function startLanguageChangeAnimation() {
    document
      .querySelectorAll(
        "[data-i18n], .card_title, .card_description, .title, .title_label, .description, .works_title, .quote_title, .about_title, .about_descr, .skills_first, .skills_second"
      )
      .forEach((el) => {
        el.classList.add("language-change");
      });
  }

  function updateMainTexts(lang) {
    // Элементы с data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = translations.getTranslation(lang, key); // Используем innerHTML для обработки тегов <br>
    });

    // Специальные элементы
    const elementsMap = {
      ".title": "title",
      ".title_label": "title_label",
      ".description": "description",
      ".works_title": "selected_works",
      ".quote_title": "quote",
      ".about_title": "about_title",
      ".about_descr": "about_descr",
      ".skills_first": "skills_first",
      ".skills_second": "skills_second",
    };

    for (const [selector, key] of Object.entries(elementsMap)) {
      const element = document.querySelector(selector);
      if (element) {
        if (selector === ".quote_title") {
          // Используем innerHTML для элемента с картинкой
          element.innerHTML = `<img src="../assets/images/quote.png" alt=""> ${translations.getTranslation(
            lang,
            key
          )}`;
        } else {
          element.innerHTML = translations.getTranslation(lang, key); // Используем innerHTML для обработки тегов <br>
        }
      }
    }
  }

  function updateCardsContent(lang) {
    document
      .querySelectorAll(".card_title, .card_description")
      .forEach((el) => {
        const attrName = `data-i18n-${lang}`;
        if (el.hasAttribute(attrName)) {
          el.innerHTML = el.getAttribute(attrName); // Используем innerHTML для тега <br>
        }
      });
  }

  function endLanguageChangeAnimation() {
    setTimeout(() => {
      document.querySelectorAll(".language-change").forEach((el) => {
        el.classList.remove("language-change");
      });
    }, 300);
  }
});

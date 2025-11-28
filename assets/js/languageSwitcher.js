document.addEventListener("DOMContentLoaded", function () {
  // Инициализация элементов
  const languageSelector = document.getElementById("language-selector");
  const languageSelectorMobile = document.getElementById("language-selector-mobile");
  const savedLang = localStorage.getItem("language") || "en";
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("mobileSidebar");

  // Инициализация hamburger меню
  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      // Обновляем aria-expanded для доступности
      const isActive = sidebar.classList.contains("active");
      hamburger.setAttribute("aria-expanded", isActive);
    });

    // Закрытие по клику вне сайдбара
    document.addEventListener("click", (e) => {
      if (sidebar.classList.contains("active") && 
          !sidebar.contains(e.target) && 
          !hamburger.contains(e.target)) {
        sidebar.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Применяем сохраненный язык
  if (languageSelector) languageSelector.value = savedLang;
  if (languageSelectorMobile) languageSelectorMobile.value = savedLang;
  updatePageLanguage(savedLang, true);

  // Desktop language selector
  if (languageSelector) {
    languageSelector.addEventListener("change", function () {
      const lang = this.value;
      localStorage.setItem("language", lang);
      if (languageSelectorMobile) languageSelectorMobile.value = lang;
      updatePageLanguage(lang, false);
    });
  }

  // Mobile language selector
  if (languageSelectorMobile) {
    languageSelectorMobile.addEventListener("change", function () {
      const lang = this.value;
      localStorage.setItem("language", lang);
      if (languageSelector) languageSelector.value = lang;
      updatePageLanguage(lang, false);
    });
  }

  function updatePageLanguage(lang, isInitialLoad) {
    // Обновляем lang атрибут HTML для SEO и доступности
    document.documentElement.lang = lang;
    
    // Применяем настройки шрифта
    applyFontSettings(lang);

    // Анимация (кроме первой загрузки)
    if (!isInitialLoad) {
      startLanguageChangeAnimation();
    }

    // Обновляем основные тексты
    updateMainTexts(lang);

    // Обновляем карточки
    updateCardsContent(lang);

    // Завершаем анимацию
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
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = translations.getTranslation(lang, key);
      
      // Специальная обработка для quote - сохраняем изображение
      if (key === "quote") {
        const img = el.querySelector("img");
        if (img) {
          // Сохраняем изображение и добавляем текст после него
          el.innerHTML = img.outerHTML + " " + translation;
        } else {
          el.innerHTML = translation;
        }
      } else {
        el.innerHTML = translation;
      }
    });
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

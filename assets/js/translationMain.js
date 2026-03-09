const translations = {
  en: {
    // Основные тексты
    about: "About me",
    works: "Works",
    title: "Berik Zhunusbek",
    rights: "© 2025 Berik Zhunusbek. All rights reserved.",
    title_label:
      "Sculptor • Animator • Director of Computer Graphics • Photographer • Actor",
    description:
      "Creating at the intersection of traditional sculpture and digital art. Exploring the boundaries between physical and virtual spaces through immersive experiences and dynamic forms.",
    selected_works: "Selected Works",
    quote: "Everyone should do what they can.",
    quote_author: "— Berik Zhunusbek",
    about_title: "ABOUT",
    about_descr:
      "As a multidisciplinary digital artist, I explore the intersection of sculpture, animation, and computer-generated imagery. My work seeks to bridge the gap between traditional artistic practices and cutting-edge technology, creating immersive experiences that challenge perception and reality.",

    // Навыки
    skills_first:
      "3D Modeling <br><br>Sculptor <br><br>Concept Art <br><br>Virtual Reality",
    skills_second:
      "Digital Sculpture <br><br>Character Animation <br><br>Visual Effects <br><br>Interactive Design",

    // Настройки шрифта
    font_family: "'Space Grotesk', sans-serif",
    font_weight: "400",
    letter_spacing: "normal",

    all: 'All',
    sculpture: 'Sculpture',
    drawing: 'Drawing',
    graphics: 'Graphics',
    photos: 'Photos',
  },
  ru: {
    about: "Обо мне",
    works: "Работы",
    title: "Берик Жунусбек",
    rights: "© 2025 Берик Жунусбек. Все права защищены",
    title_label:
      "Скульптор • Аниматор • Режиссёр компьютерной графики • Фотограф • Актер",
    description:
      "Создаю на стыке традиционной скульптуры и цифрового искусства. Исследую границы между физическим и виртуальным пространством через иммерсивный опыт и динамичные формы.",
    selected_works: "Избранные работы",
    quote: "Каждый должен делать то, что может.",
    quote_author: "— Берик Жунусбек",
    about_title: "ОБО МНЕ",
    about_descr:
      "Как мультидисциплинарный цифровой художник, я исследую пересечение скульптуры, анимации и компьютерной графики. Моя работа направлена на объединение традиционных художественных практик и передовых технологий, создавая иммерсивные впечатления, которые бросают вызов восприятию и реальности.",
    skills_first:
      "3D Моделирование <br><br>Скульптор <br><br>Концепт-арт <br><br>Виртуальная реальность",
    skills_second:
      "Цифровая скульптура <br><br>Анимация персонажей <br><br>Визуальные эффекты <br><br>Интерактивный дизайн",
    font_family: "'Manrope', sans-serif",
    font_weight: "500",
    letter_spacing: "-0.01em",

    all: 'Все',
    sculpture: 'Скульптура',
    drawing: 'Рисунок',
    graphics: 'Графика',
    photos: 'Фотографии',
  },
  kz: {
    about: "Мен туралы",
    works: "Жұмыстар",
    title: "Берік Жүнісбек",
    rights: "© 2025 Берік Жүнісбек. Барлық құқықтар қорғалған",
    title_label:
      "Мүсінші • Аниматор • Компьютерлік графика режиссері • Фотограф • Актер",
    description:
      "Дәстүрлі мүсін мен цифрлық өнердің түйіскен жерінде жасаймын. Иммерсивті тәжірибе мен динамикалық формалар арқылы физикалық және Виртуалды кеңістік арасындағы шекараларды зерттеймін.",
    selected_works: "Таңдаулы жұмыстар",
    quote: "Әркім өзінің қолынан келетін істі жасауы керек.",
    quote_author: "— Берік Жүнісбек",
    about_title: "МЕН ТУРАЛЫ",
    about_descr:
      "Көпсалалы цифрлық суретші ретінде мен мүсіннің, анимацияның және компьютерлік графиканың қиылысын зерттеймін. Менің жұмысым дәстүрлі көркемдік тәжірибелер мен озық технологияларды біріктіруге, қабылдау мен шындықты сынайтын иммерсивті тәжірибе жасауға бағытталған.",
    skills_first:
      "3D Модельдеу <br><br>Мүсінші <br><br>Концепт-арт <br><br>Виртуалды шындық",
    skills_second:
      "Цифрлық мүсін <br><br>Кейіпкер анимациясы <br><br>Көрнекі эффектілер <br><br>Интерактивті дизайн",
    font_family: "'Manrope', sans-serif",
    font_weight: "500",
    letter_spacing: "-0.01em",

    all: 'Барлығы',
    sculpture: 'Мүсін',
    drawing: 'Сурет',
    graphics: 'Графика',
    photos: 'Фотосуреттер',
  },

  // Методы для работы с переводами
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

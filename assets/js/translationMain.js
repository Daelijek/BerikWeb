const translations = {
  en: {
    // Основные тексты
    about: "About me",
    works: "Works",
    title: "Berik Zhunusbek",
    title_label:
      "Sculptor • Animator • Director of Computer Graphics • Photographer • Actor",
    description:
      "Creating at the intersection of traditional sculpture and digital art. Exploring the boundaries between physical and virtual spaces through immersive experiences and dynamic forms.",
    selected_works: "Selected Works",
    quote: "Everyone should do what they can.",
    about_title: "ABOUT",
    about_descr:
      "As a multidisciplinary digital artist, I explore the intersection of sculpture, animation, and computer-generated imagery. My work seeks to bridge the gap between traditional artistic practices and cutting-edge technology, creating immersive experiences that challenge perception and reality.",

    // Навыки
    skills_first:
      "3D Modeling <br><br>Motion Design <br><br>Concept Art <br><br>Virtual Reality",
    skills_second:
      "Digital Sculpture <br><br>Character Animation <br><br>Visual Effects <br><br>Interactive Design",

    // Настройки шрифта
    font_family: "'Space Grotesk', sans-serif",
    font_weight: "400",
    letter_spacing: "normal",
  },
  ru: {
    about: "Обо мне",
    works: "Работы",
    title: "Берик Жунусбек",
    title_label:
      "Скульптор • Аниматор • Режиссёр компьютерной графики • Фотограф • Актер",
    description:
      "Создаю на стыке традиционной скульптуры и цифрового искусства. Исследую границы между физическим и виртуальным пространством через иммерсивный опыт и динамичные формы.",
    selected_works: "Избранные работы",
    quote: "Каждый должен делать то, что может.",
    about_title: "ОБО МНЕ",
    about_descr:
      "Как мультидисциплинарный цифровой художник, я исследую пересечение скульптуры, анимации и компьютерной графики. Моя работа направлена на объединение традиционных художественных практик и передовых технологий, создавая иммерсивные впечатления, которые бросают вызов восприятию и реальности.",
    skills_first:
      "3D Моделирование <br><br>Моушн-дизайн <br><br>Концепт-арт <br><br>Виртуальная реальность",
    skills_second:
      "Цифровая скульптура <br><br>Анимация персонажей <br><br>Визуальные эффекты <br><br>Интерактивный дизайн",
    font_family: "'Manrope', sans-serif",
    font_weight: "500",
    letter_spacing: "-0.01em",
  },
  kz: {
    about: "Мен туралы",
    works: "Жұмыстар",
    title: "Берік Жүнісбек",
    title_label:
      "Мүсінші • Аниматор • Компьютерлік графика режиссері • Фотограф • Актер",
    description:
      "Дәстүрлі мүсін және цифрлық өнердің қиыстырындысында жасаймын. Физикалық және виртуалды кеңістіктер арасындағы шекараларды иммерсивті тәжірибелер және динамикалық формалар арқылы зерттеймін.",
    selected_works: "Таңдаулы жұмыстар",
    quote: "Әркім өзінің қолынан келетін істі жасауы керек.",
    about_title: "МЕН ТУРАЛЫ",
    about_descr:
      "Көпсалалы цифрлық суретші ретінде мен мүсін, анимация және компьютерлік графиканың қиыстирындысын зерттеймін. Менің жұмысым дәстүрлі көркем тәжірибелер мен озық технологиялар арасындағы алшақтықты толтыруға бағытталған, қабылдау мен шындыққа шабуыл жасайтын иммерсивті тәжірибелер жасайды.",
    skills_first:
      "3D Модельдеу <br><br>Қозғалыс дизайны <br><br>Концепт-арт <br><br>Виртуалды шындық",
    skills_second:
      "Цифрлық мүсін <br><br>Кейіпкер анимациясы <br><br>Көрнекі эффектілер <br><br>Интерактивті дизайн",
    font_family: "'Manrope', sans-serif",
    font_weight: "500",
    letter_spacing: "-0.01em",
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

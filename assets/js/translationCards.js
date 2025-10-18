const translations = {
    en: {
        // Основные тексты
        about: "About me",
        works: "Works",
        title: "Berik Zhunusbek",
        rights: "© 2025 Berik Zhunusbek. All rights reserved.",
        productTitle: "Deer",
        productTag: "Sculpture",
        concept: "Concept",
        conceptText: "'Киік' is a sculpture dedicated to the fragile beauty and quiet strength of the saiga antelope — a symbol of the Kazakh steppe. Through its simplified, almost abstract form, the work conveys both the elegance and the vulnerability of this rare animal. The sharp lines of the horns contrast with the smooth contours of the head, creating a sense of tension between resilience and gentleness. The sculpture becomes a reflection on the delicate balance between nature and survival in an ever-changing world.",
        process: "Processes & Tools",
        processText: "Carved from a single block of wood, 'Киік' combines geometric precision with organic fluidity.The artist used chisels and carving knives to emphasize the texture of the animal’s horns, leaving traces of the tools visible to highlight the natural roughness of the material.The subtle shading and minimal finishing preserve the authenticity of the wood, allowing the sculpture to radiate a raw, primal energy that mirrors the saiga’s untamed spirit.",
        detail: "Technical Details",
        detailMaterial: "Material: Wood (likely poplar)",
        detailHeight: "Height: 45 cm",
        detailTools: "Tools: Chisels, carving knives, rasps",
        detailFinish: "Finish: Natural matte surface",
        detailYear: "Year: 2012",
        
        // Настройки шрифта
        font_family: "'Space Grotesk', sans-serif",
        font_weight: "400",
        letter_spacing: "normal",
    },
    ru: {
        // Основные тексты
        about: "Обо мне",
        works: "Работы",
        title: "Берик Жунусбек",
        rights: "© 2025 Берик Жунусбеков. Все права защищены",
        productTitle: "Сайгак",
        productTag: "Скульптура",
        concept: "Концепция",
        conceptText: "«Киік» — это скульптура, посвящённая хрупкой красоте и тихой силе сайгака — символа казахской степи. Через свою упрощённую, почти абстрактную форму, работа передаёт как элегантность, так и уязвимость этого редкого животного. Острые линии рогов контрастируют с плавными контурами головы, создавая ощущение напряжения между стойкостью и нежностью. Скульптура становится отражением тонкого баланса между природой и выживанием в постоянно меняющемся мире.",
        process: "Процессы и инструменты",
        processText: "Вырезанная из одного блока дерева, «Киік» сочетает в себе геометрическую точность и органическую плавность. Художник использовал долота и резцы, чтобы подчеркнуть текстуру рогов животного, оставляя следы инструментов видимыми, чтобы подчеркнуть естественную грубость материала. Тонкое затенение и минимальная отделка сохраняют аутентичность дерева, позволяя скульптуре излучать сырую, первобытную энергию, которая отражает дикую природу сайгака.",
        detail: "Технические детали",
        detailMaterial: "Материал: Дерево (вероятно, тополь)",
        detailHeight: "Высота: 45 см",
        detailTools: "Инструменты: Долота, резцы, напильники",
        detailFinish: "Отделка: Натуральная матовая поверхность",
        detailYear: "Год: 2012",

        // Настройки шрифта
        font_family: "'Manrope', sans-serif",
        font_weight: "500",
        letter_spacing: "-0.01em",
    },
    kz: {
        // Основные тексты
        about: "Мен туралы",
        works: "Жұмыстар",
        title: "Берік Жүнісбек",
        rights: "© 2025 Берік Жүнісбек. Барлық құқықтар қорғалған",
        productTitle: "Киік",
        productTag: "Мүсін",
        concept: "Тұжырымдама",
        conceptText: "'Киік' мүсіні қазақ даласының символы болып табылатын сайгактың нәзік сұлулығы мен тыныш күшіне арналған. Өзінің қарапайым, тіпті абстрактілі формасы арқылы бұл жұмыс сирек кездесетін жануардың әсемдігі мен осалдылығын жеткізеді. Мүйіздің өткір сызықтары басының тегіс контурларымен қарама-қайшы келеді, төзімділік пен нәзіктік арасындағы кернеуді тудырады. Бұл мүсін үнемі өзгеріп отыратын әлемде табиғат пен тіршілік арасындағы нәзік тепе-теңдіктің көрінісі болып табылады.",
        process: "Процестер мен құралдар",
        processText: "Бір блоктан ойылған 'Киік' геометриялық дәлдік пен органикалық сұйықтықты біріктіреді. Суретші мүйіздің текстурасын ерекше көрсету үшін кескіштер мен пышақтарды қолданды, материалдың табиғи қырлығын ерекше көрсету үшін құралдардың іздерін көрінетін етіп қалдырды. Жұмсақ көлеңкелеу және минималды өңдеу ағаштың шынайылығын сақтайды, мүсінге сайгактың жабайы рухын бейнелейтін шикі, алғашқы энергияны сәуле шығаруға мүмкіндік береді.",
        detail: "Техникалық мәліметтер",
        detailMaterial: "Материал: Ағаш (мүмкін тополь)",
        detailHeight: "Биіктігі: 45 см",
        detailTools: "Құралдар: Кескіштер, пышақтар, пышақтар",
        detailFinish: "Беткі өңдеу: Табиғи матты бет",
        detailYear: "Жылы: 2012",

        // Настройки шрифта
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
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cards-container");

  // Clear any existing content (just in case)
  container.innerHTML = "";

  // No need to shuffle if you want original order
  artworks.forEach((art) => {
    const card = document.createElement("div");
    card.className = `card ${art.type}`; // This adds both 'card' and the type class

    // Image with optional link
    let imageHTML;
    if (art.link) {
      imageHTML = `
          <a href="${art.link}">
            <img src="${art.image}" alt="${art.title.en}" />
          </a>
        `;
    } else {
      imageHTML = `<img src="${art.image}" alt="${art.title.en}" />`;
    }
    card.innerHTML = imageHTML;

    // Title element
    if (art.title) {
      const title = document.createElement("div");
      title.className = "card_title";
      title.dataset.i18nEn = art.title.en;
      title.dataset.i18nRu = art.title.ru;
      title.dataset.i18nKz = art.title.kz;
      title.textContent = art.title.en;
      card.appendChild(title);
    }

    // Description element
    if (art.category) {
      const desc = document.createElement("div");
      desc.className = "card_description";
      desc.dataset.i18nEn = art.category.en;
      desc.dataset.i18nRu = art.category.ru;
      desc.dataset.i18nKz = art.category.kz;
      desc.textContent = art.category.en;
      card.appendChild(desc);
    }

    container.appendChild(card);
  });

  // Initialize pagination after cards are rendered
  if (typeof filterCategory === "function") {
    filterCategory("All");
  }
});

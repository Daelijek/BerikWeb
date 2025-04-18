//! Фильтрация по категориям с улучшенной пагинацией
function filterCategory(category) {
  const CARDS_PER_PAGE = 15; // Changed from 9 to 15
  const cards = document.querySelectorAll(".card");
  const footer = document.querySelector("footer");
  const pagination = document.querySelector(".pagination");
  let visibleCount = 0;

  const normalizedCategory = category.toLowerCase();

  // Сначала скрываем все карточки
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Показываем карточки выбранной категории и считаем их
  cards.forEach((card) => {
    const shouldShow =
      normalizedCategory === "all" ||
      card.classList.contains(normalizedCategory);

    if (shouldShow) {
      visibleCount++;
    }
  });

  // Обновляем пагинацию только если есть карточки
  if (visibleCount > 0) {
    updatePagination(visibleCount, normalizedCategory, CARDS_PER_PAGE);
  } else {
    pagination.style.display = "none";
  }

  // Обновляем позицию футера
  if (footer) {
    footer.style.position = visibleCount > 0 ? "absolute" : "static";
  }
}

// Функция для обновления пагинации
function updatePagination(totalVisible, category, cardsPerPage) {
  const pagination = document.querySelector(".pagination");
  const pageCount = Math.ceil(totalVisible / cardsPerPage);

  // Очищаем пагинацию
  pagination.innerHTML = "";

  // Создаем кнопки пагинации только если нужно больше одной страницы
  if (pageCount > 1) {
    for (let i = 1; i <= pageCount; i++) {
      const btn = document.createElement("button");
      btn.className = "pagination-btn";
      btn.textContent = i;
      btn.dataset.page = i;

      btn.addEventListener("click", function () {
        showPage(i, category, cardsPerPage);
      });

      pagination.appendChild(btn);
    }
    pagination.style.display = "flex";
    showPage(1, category, cardsPerPage); // Показываем первую страницу
  } else {
    // Если всего одна страница, скрываем пагинацию
    pagination.style.display = "none";
    showAllVisible(category); // Показываем все карточки
  }
}

// Показать все видимые карточки (для случаев с одной страницей)
function showAllVisible(category) {
  const cards = document.querySelectorAll(".card");
  const normalizedCategory = category.toLowerCase();

  cards.forEach((card) => {
    const shouldShow =
      normalizedCategory === "all" ||
      card.classList.contains(normalizedCategory);
    card.style.display = shouldShow ? "block" : "none";
  });
}

// Функция для отображения конкретной страницы
function showPage(pageNumber, category, cardsPerPage) {
  const cards = document.querySelectorAll(".card");
  const startIndex = (pageNumber - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  let count = 0;
  let visibleIndex = 0;

  // Сбрасываем активные кнопки
  document.querySelectorAll(".pagination-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Устанавливаем активную кнопку
  const activeBtn = document.querySelector(
    `.pagination-btn[data-page="${pageNumber}"]`
  );
  if (activeBtn) activeBtn.classList.add("active");

  // Показываем карточки для текущей страницы
  cards.forEach((card) => {
    const isVisible = category === "all" || card.classList.contains(category);

    if (isVisible) {
      if (visibleIndex >= startIndex && visibleIndex < endIndex) {
        card.style.display = "block";
        count++;
      } else {
        card.style.display = "none";
      }
      visibleIndex++;
    } else {
      card.style.display = "none";
    }
  });

  // Обновляем футер
  const footer = document.querySelector("footer");
  if (footer) {
    footer.style.position = count > 0 ? "absolute" : "static";
  }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  const CARDS_PER_PAGE = 15; // Changed from 9 to 15

  // Обработчики категорий
  const categoryList = document.querySelector(".category_list");

  categoryList?.addEventListener("click", (e) => {
    const item = e.target.closest(".category_item");
    if (!item) return;

    document.querySelectorAll(".category_item.active").forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");

    const category = item.dataset.category || item.textContent.trim();
    filterCategory(category);
  });

  // Активируем "All" по умолчанию
  const defaultItem = document.querySelector(".category_item");
  if (defaultItem) {
    defaultItem.classList.add("active");
    // Используем setTimeout чтобы гарантировать, что карточки уже отрендерены
    setTimeout(() => filterCategory("All"), 100);
  }
});

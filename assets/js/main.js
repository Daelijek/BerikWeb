//! Фильтрация по категориям с пагинацией
function filterCategory(category) {
  const cards = document.querySelectorAll(".card");
  const footer = document.querySelector("footer");
  const paginationContainer = document.querySelector(".pagination");
  let visibleCount = 0;

  // Приводим категорию к нижнему регистру
  const normalizedCategory = category.toLowerCase();

  // Скрываем все карточки сначала
  cards.forEach((card) => {
    card.style.display = "none";
  });

  // Показываем соответствующие категории
  cards.forEach((card) => {
    const shouldShow =
      normalizedCategory === "all" ||
      card.classList.contains(normalizedCategory);

    if (shouldShow) {
      card.style.display = "block";
      visibleCount++;
    }
  });

  // Обновляем пагинацию
  updatePagination(visibleCount, normalizedCategory);

  if (footer) {
    footer.style.position = visibleCount > 0 ? "absolute" : "static";
  }
}

// Функция для обновления пагинации
function updatePagination(totalVisible, category) {
  const pagination = document.querySelector(".pagination");
  const cardsPerPage = 9;
  const pageCount = Math.ceil(totalVisible / cardsPerPage);

  // Очищаем пагинацию
  pagination.innerHTML = "";

  // Создаем кнопки пагинации
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.className = "pagination-btn";
    btn.textContent = i;
    btn.dataset.page = i;

    btn.addEventListener("click", function () {
      showPage(i, category);
    });

    pagination.appendChild(btn);
  }

  // Показываем первую страницу
  if (pageCount > 0) {
    showPage(1, category);
    pagination.style.display = "flex";
  } else {
    pagination.style.display = "none";
  }
}

// Функция для отображения конкретной страницы
function showPage(pageNumber, category) {
  const cards = document.querySelectorAll(".card");
  const cardsPerPage = 9;
  const startIndex = (pageNumber - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  let visibleInPage = 0;

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
  cards.forEach((card, index) => {
    const shouldShow =
      (category === "all" || card.classList.contains(category)) &&
      index >= startIndex &&
      index < endIndex;

    card.style.display = shouldShow ? "block" : "none";
    if (shouldShow) visibleInPage++;
  });

  // Обновляем футер если нужно
  const footer = document.querySelector("footer");
  if (footer) {
    footer.style.position = visibleInPage > 0 ? "absolute" : "static";
  }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  // Создаем контейнер для пагинации если его нет
  if (!document.querySelector(".pagination")) {
    const pagination = document.createElement("div");
    pagination.className = "pagination";
    document.querySelector(".cards_list").after(pagination);
  }

  // Обработчики категорий
  const categoryList = document.querySelector(".category_list");

  categoryList?.addEventListener("click", (e) => {
    const item = e.target.closest(".category_item");
    if (!item) return;

    document.querySelectorAll(".category_item.active").forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");

    const category = item.dataset.category || item.textContent;
    filterCategory(category);
  });

  // Активируем "All" по умолчанию
  const defaultItem = document.querySelector(".category_item");
  if (defaultItem) {
    defaultItem.classList.add("active");
    filterCategory("All");
  }
});

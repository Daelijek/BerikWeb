function filterCategory(category) {
    const cards = document.querySelectorAll(".card");
    const footer = document.querySelector("footer");
    let visibleCount = 0;
  
    // Приводим категорию к нижнему регистру для сравнения
    const normalizedCategory = category.toLowerCase();
  
    cards.forEach((card) => {
      const shouldShow = normalizedCategory === "all" || 
                        card.classList.contains(normalizedCategory);
      
      if (shouldShow) {
        card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.style.transition = "opacity 0.3s ease, transform 0.3s ease, height 0.3s ease, margin 0.3s ease";
        card.classList.add("hidden");
      }
    });
  
    if (footer) {
      footer.style.position = visibleCount > 0 ? "absolute" : "static";
    }
  }
  
  // Инициализация (без изменений)
  document.addEventListener("DOMContentLoaded", () => {
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
  
    const defaultItem = document.querySelector(".category_item");
    if (defaultItem) {
      defaultItem.classList.add("active");
      filterCategory("All"); // Здесь передаем с большой буквы, но функция сама нормализует
    }
  });
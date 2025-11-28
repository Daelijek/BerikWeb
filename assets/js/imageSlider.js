// Скрипт для автоматической смены изображений в галерее скульптур
document.addEventListener("DOMContentLoaded", function () {
    const imgElement = document.querySelector(".prod_img img");
    
    if (!imgElement) return;
    
    // Получаем пути к изображениям из data-атрибута
    const imagePathsData = imgElement.getAttribute("data-images");
    if (!imagePathsData) return;
    
    let imagePaths;
    try {
        imagePaths = JSON.parse(imagePathsData);
    } catch (e) {
        console.error("Error parsing image paths:", e);
        return;
    }
    
    if (!imagePaths || !Array.isArray(imagePaths) || imagePaths.length === 0) return;

    let currentIndex = 0;
    const changeInterval = parseInt(imgElement.getAttribute("data-interval")) || 10000;
    const fadeDuration = parseInt(imgElement.getAttribute("data-fade-duration")) || 1000;

    // Устанавливаем начальное изображение
    imgElement.style.transition = `opacity ${fadeDuration}ms ease-in-out`;
    imgElement.style.opacity = 1;

    // Сохраняем ID интервала для очистки
    const intervalId = setInterval(() => {
        // Плавно скрываем изображение
        imgElement.style.opacity = 0;

        setTimeout(() => {
            // Проверяем, что элемент все еще существует
            if (!imgElement || !document.body.contains(imgElement)) {
                clearInterval(intervalId);
                return;
            }
            
            // Меняем изображение
            currentIndex = (currentIndex + 1) % imagePaths.length;
            imgElement.src = imagePaths[currentIndex];

            // Плавно показываем новое изображение
            imgElement.style.opacity = 1;
        }, fadeDuration);
    }, changeInterval);

    // Очистка интервала при уходе со страницы
    window.addEventListener("beforeunload", () => {
        clearInterval(intervalId);
    });
});


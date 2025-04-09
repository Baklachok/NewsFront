// Пример обработчика событий (listener)
// При загрузке документа выводим сообщение и меняем цвет заголовка новости

document.addEventListener("DOMContentLoaded", function () {
  console.log("Страница загружена");

  // Пример: При клике на заголовок новости выводим сообщение в консоль
  const newsTitles = document.querySelectorAll(".news__title");
  newsTitles.forEach(title => {
    title.addEventListener("click", function () {
      console.log("Нажат заголовок:", this.textContent);
      // Например, меняем цвет заголовка при клике
      this.style.color = "#d9534f";
    });
  });
});

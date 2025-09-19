// script.js
const addFieldBtn = document.getElementById("addFieldBtn");
const inputsWrapper = document.getElementById("inputsWrapper");

addFieldBtn.addEventListener("click", function () {
  // Создаем новый элемент поля ввода
  const newInput = document.createElement("input");
  newInput.type = "text"; // Устанавливаем тип поля
  newInput.placeholder = "Новое поле"; // Устанавливаем плейсхолдер

  // Создаем div для обертки нового поля (для лучшей стилизации и группировки)
  const inputDiv = document.createElement("div");
  inputDiv.className = "input-container"; // Добавляем класс для стилей
  inputDiv.appendChild(newInput); // Добавляем само поле ввода в div

  // Добавляем div с новым полем ввода в wrapper
  inputsWrapper.appendChild(inputDiv);
});

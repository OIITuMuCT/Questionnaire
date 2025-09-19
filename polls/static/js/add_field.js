const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

button1.addEventListener("click", function () {
  // Здесь ваш скрипт для кнопки 1
  alert("Вы нажали Кнопку 1!");
  // Создаем новый элемент поля ввода
  const newInput = document.createElement("input");
  newInput.type = "text"; // Устанавливаем тип поля
  newInput.placeholder = "+Ответ"; // Устанавливаем плейсхолдер

  // Создаем div для обертки нового поля (для лучшей стилизации и группировки)
  const inputDiv = document.createElement("div");
  inputDiv.className = "input-container"; // Добавляем класс для стилей
  inputDiv.appendChild(newInput); // Добавляем само поле ввода в div

  // Добавляем div с новым полем ввода в wrapper
  inputsWrapper2.appendChild(inputDiv);
});
button2.addEventListener("click", function () {
  // Здесь ваш скрипт для кнопки 2
  alert("Вы нажали Кнопку 2!");
});

// Завдання 6
// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символів"
// />
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.
console.log("task-6");

const inputRef = document.querySelector("#validation-input");
//console.log(inputRef);

const dataLength = inputRef.getAttribute("data-length");
//console.log(dataLength);

const setInputColor = (event) => {
  const inputLength = event.currentTarget.value.length;
  inputLength == dataLength
    ? inputRef.classList.replace("invalid", "valid")
    : inputRef.classList.add("invalid");
  console.log(inputLength == dataLength);
};
inputRef.addEventListener("input", setInputColor);

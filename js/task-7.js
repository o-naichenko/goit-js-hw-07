// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text
// оновлюючи властивість font - size.В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

console.log("task-7");

const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const changeFontSize = (event) => {
  textRef.style.fontSize = event.currentTarget.value + "px";
};

fontSizeControlRef.addEventListener("input", changeFontSize);

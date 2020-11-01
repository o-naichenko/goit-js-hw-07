// Завдання 5
// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output.
// якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

//<input type="text" placeholder="Ваше ім'я?" id="name-input" />
//<h1>Привіт, <span id="name-output">незнайомець</span>!</h1>
console.log("task-5");

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");
// console.log(nameInputRef);
// console.log(nameOutputRef);

const onInputChange = (event) =>
  event.currentTarget.value === ""
    ? (nameOutputRef.textContent = "незнайомець")
    : (nameOutputRef.textContent = event.currentTarget.value);

nameInputRef.addEventListener("input", onInputChange);
nameInputRef.addEventListener("focus", () => console.log(1));

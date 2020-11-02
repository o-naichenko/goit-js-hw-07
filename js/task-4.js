// Завдання 4
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
console.log("task-4");

let counterValue = 0;
// console.log(counterValue);

const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);
const valueRef = document.querySelector("#value");
// console.log(valueRef.textContent);

const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
// console.log(decrementBtn);
// console.log(incrementBtn);

decrementBtn.addEventListener("click", () => {
  decrement();
  valueRef.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  increment();
  valueRef.textContent = counterValue;
});

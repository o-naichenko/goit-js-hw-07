// Завдання 8 - додаткове, виконувати не обов'язково
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. Функція створює стільки div,
//скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>

// <div id="boxes"></div>
console.log("task-8");

const controlsRef = document.getElementById("controls");
const inputRef = controlsRef.querySelector("input");
const divContainerRef = document.getElementById("boxes");
divContainerRef.style.display = "flex";

let amount = 0;

const renderBtnRef = controlsRef.querySelector(
  'button[data-action = "render"]'
);

const destroyBtnRef = controlsRef.querySelector(
  'button[data-action = "destroy"]'
);

const colorRandomizer = () => {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

let boxSizeValue = 30;

const createBox = () => {
  const box = document.createElement("div");
  box.style.width = `${boxSizeValue}px`;
  box.style.height = `${boxSizeValue}px`;
  box.style.backgroundColor = colorRandomizer();
  return box;
};

const onRenderBtnClick = (event) => {
  const boxesAll = [];
  for (let i = 1; i <= amount; i += 1) {
    boxSizeValue += 10;
    boxesAll.push(createBox());
  }
  return divContainerRef.append(...boxesAll);
};

inputRef.addEventListener("input", () => (amount = inputRef.value));

renderBtnRef.addEventListener("click", onRenderBtnClick);

destroyBtnRef.addEventListener("click", () => (divContainerRef.innerHTML = ""));

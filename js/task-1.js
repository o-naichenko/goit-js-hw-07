// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2)
//і кількість елементів в категорії(всіх вкладених в нього елементів li)
console.log('task-1');

const categoriesListRef = document.querySelector("#categories");

const categoriesAmount = categoriesListRef.children.length;
console.log(`В списке ${categoriesAmount} категории`);

const categoriesItemRefs = document.querySelectorAll(".item");
console.log(categoriesItemRefs);

categoriesItemRefs.forEach((item) =>
  console.log(
    `Категорія: ${item.firstElementChild.textContent}\nКількість елементів: ${
      item.querySelectorAll("li").length
    }`
  )
);

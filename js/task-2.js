//Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
//після чого вставить всі li за одну операцію в список ul.ingredients.
//Для створення DOM - вузлів використовуй document.createElement().
console.log("task-2");

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsRefs = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});
// console.table(ingredientsRefs);
ingredientsListRef.append(...ingredientsRefs);

const categoriesEl = document.querySelector('#categories');
const listCategoriesEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${listCategoriesEl.length}`);

const listOfCategories = listCategoriesEl.forEach(element => {
  console.log(` Category:${element.firstElementChild.textContent}
    Elements: ${element.lastElementChild.children.length}`);
});

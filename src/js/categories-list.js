const ref = {
    categories: document.querySelector(`ul#categories`),
    categoriesList: categories.querySelectorAll(`li.item`), 
};

//Number of categories
const categoriesCount = () => ref.categoriesList.length;
console.log(`Number of categories :`, categoriesCount());

for (const item of ref.categoriesList) {
    console.log(`Category: `, item.firstElementChild.textContent); // Text of Header element
    console.log(`Elements: `, item.lastElementChild.children.length); // Amount of elements in category
};

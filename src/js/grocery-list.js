const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector(`#ingredients`);

function addElements(array) {
  const listItems = array.map((item) => { // for each element in array
    const newListItem = document.createElement(`li`); // add new li element
    newListItem.textContent = item;  // add ingredient name into li item
    newListItem.classList = `item`; // add the item class to the element.
    return newListItem;
  });
  return listItems;
};

const ingredient = addElements(ingredients);
ingredientsListEl.append(...ingredient); //  insert all li into ul#ingredients list 
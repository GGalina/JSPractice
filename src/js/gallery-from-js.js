const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galeryListEl = document.querySelector(`.gallery`);
galeryListEl.style.display = `flex`;
galeryListEl.style.justifyContent = `center`;
galeryListEl.style.gap = `30px`;
    
const imgItem = images.map((item) => { // for each element in array
    const imgListItem = // add <li> and <img> tags and pass objects from the array
      `<li 
      class="galeryImg",
      style="list-style:none" 
      >
      <img src="${item.url}" alt="${item.alt}" width=360 height=260>
      </li>`;
    return imgListItem;
  });

galeryListEl.insertAdjacentHTML(`afterbegin`, imgItem.join(""));

import { galleryItems } from './gallery-items.js';

function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="galleryItem">
            <a class="galleryLink" href="${original}">
            <img
                class="galleryImage"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
             </a>
        </div>`
    }).join(``);
};

const galleryContainerEl = document.querySelector(".gallery");
const galleryImgsEl = createGalleryItems(galleryItems);
const modalView = basicLightbox.create(`<img
            src =""
            alt=""
    />`);

galleryContainerEl.insertAdjacentHTML(`afterbegin`, galleryImgsEl); 
galleryContainerEl.addEventListener(`click`, onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.className !== `galleryImage`) return;

    const img = modalView.element().querySelector("img");
    img.src = event.target.dataset.source;
    img.alt = event.target.alt;
    modalView.show();
    
    galleryContainerEl.addEventListener(`keydown`, onEscPress);
};

function onEscPress(event) {
    if (event.key === 'Escape') {
        modalView.close(() => galleryContainerEl.removeEventListener(`keydown`, onEscPress));
    }
};
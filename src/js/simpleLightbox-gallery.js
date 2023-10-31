import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="galleryItem" href="${original}">
            <img class="galleryImage"
            src="${preview}" 
            alt="${description}" />
        </a>`}).join(``);
};

const galleryContainerEl = document.querySelector(".gallery");
const galleryImgsEl = createGalleryItems(galleryItems);

galleryContainerEl.insertAdjacentHTML(`afterbegin`, galleryImgsEl);

const slider = new SimpleLightbox('.galleryItem', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250
});

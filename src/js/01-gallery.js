import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const list = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    img =>
      `<a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>`
  )
  .join('');

list.insertAdjacentHTML('afterbegin', markup);
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  // enableKeyboard : true,
});

//=======================================================
//Copy hw-js-7

//=======================================================

//NPM
//npm install simplelightbox

//=======================================================

//import SimpleLightbox from 'simplelightbox';

//import 'simplelightbox/dist/simple-lightbox.min.css';

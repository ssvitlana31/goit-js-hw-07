import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGalleryEl = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}

ulGalleryEl.insertAdjacentHTML('beforeend', itemsMarkup);

let modal = null;

ulGalleryEl.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') return;

  modal = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="1280" height="auto">
    `);
  modal.show();
  document.addEventListener('keydown', onEscKey);
});

function onEscKey(e) {
  if (e.code !== 'Escape') return;

  modal.close();
  document.removeEventListener('keydown', onEscKey);
}

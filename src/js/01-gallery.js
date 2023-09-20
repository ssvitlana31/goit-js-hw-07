import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGalleryEl = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

ulGalleryEl.insertAdjacentHTML('beforeend', itemsMarkup);

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

const modal = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`,
  {
    onShow: modal => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: modal => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

ulGalleryEl.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  modal.element().querySelector('img').src = datasetSource;
  modal.show();
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  modal.close();
}

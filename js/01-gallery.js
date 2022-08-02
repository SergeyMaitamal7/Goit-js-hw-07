import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// Создание и рендер разметки по массиву данных galleryItems и
// предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox.
//  Используй CDN сервис jsdelivr и
// добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи.
//  Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

const ouerGallery = document.querySelector('.gallery');
ouerGallery.addEventListener('click', handleClickGalery);

const itemImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <div class="gallery__item" >
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');
ouerGallery.insertAdjacentHTML('beforeend', itemImg);

function handleClickGalery(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const value = event.target.dataset.source;
    basicLightbox
      .create(
        `
    <img src="${value}" width="800" height="600">
`
      )
      .show();
  }
}

import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js.
// Разбей его на несколько подзадач:
// 1Создание и рендер разметки по массиву данных galleryItems и
// предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// 2Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
//  Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// 3Инициализация библиотеки после того как элементы галереи созданы и
// добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox
// - в первую очередь секции «Usage» и «Markup».
// 4Посмотри в документации секцию «Options» и добавь отображение подписей
// к изображениям из атрибута alt. Пусть подпись будет снизу и появляется
// через 250 миллисекунд после открытия изображения.

const gallerys = document.querySelector('.gallery');
const itemImg = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <a class="gallery__item" href="${original}">
 <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');
gallerys.insertAdjacentHTML('beforeend', itemImg);

let gallary = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

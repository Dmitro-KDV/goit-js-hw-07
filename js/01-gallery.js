import { galleryItems } from './gallery-items.js';

const elementGallery =document.querySelector('.gallery');

const makegalleryItems = ({preview, original, description}) => {
    const galleryItemEl = document.createElement('li');
    galleryItemEl.classList.add('gallery__item');

    const gallerylinkEl = document.createElement('a');
    gallerylinkEl.classList.add('gallery__link');
    gallerylinkEl.href = original;
    
    const imgItemEl = document.createElement('img');
    imgItemEl.classList.add('gallery__image');
    imgItemEl.src = preview;
    imgItemEl.dataset.source = original;
    imgItemEl.alt = description;

    gallerylinkEl.append(imgItemEl);
    galleryItemEl.append(gallerylinkEl);
    return galleryItemEl;
}

const imegEl = galleryItems.map(makegalleryItems);
elementGallery.append(...imegEl);

elementGallery.addEventListener("click", selectImages);

function selectImages(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
      }
    const imgOriginalEl = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${imgOriginalEl}" width="800" height="600">
    `,
    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
    )

    const onKeydownEsc = (event) => {
      if (event.code === 'Escape') {
          instance.close();
      }
    }

  instance.show();
}
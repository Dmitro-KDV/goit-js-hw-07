import { galleryItems } from './gallery-items.js';
// Change code below this line
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
      const lightbox = new SimpleLightbox('.gallery a', {
        caption: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      

  elementGallery.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        instance.close();
    }
  })
}

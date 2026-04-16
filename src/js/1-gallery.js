import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

initApp();

function imageCardTpl(image) {
  const { preview, original, description } = image;

  return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
		/>
	</a>
</li>`;
}

function createGalleryMarkup(arr) {
  return arr.map(imageCardTpl).join('');
}

function renderGallery(images, element) {
  element.innerHTML = createGalleryMarkup(images);
}

function initSimpleLightbox(selector) {
  const lightboxOptions = {
    /* options */
    overlayOpacity: 0.9,
    animationSpeed: 250,
    fadeSpeed: 300,
    disableRightClick: true,
    captionsData: 'alt', // Відображення підписів до зображень з атрибута alt
    captionDelay: 250, // Затримка для відображення підписів до зображень
  };

  return new SimpleLightbox(selector, lightboxOptions);
}

async function fetchImages() {
  try {
    const response = await fetch('../data/images.json');

    if (!response.ok) {
      throw new Error(`Failed to fetch statuses: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching competition statuses:', error);
    return [];
  }
}

async function initApp() {
  const gallery = document.querySelector('.js-gallery');
  const images = await fetchImages();

  if (!gallery) {
    return;
  }

  renderGallery(images, gallery);
  const imageGallery = initSimpleLightbox('.gallery-link');
}

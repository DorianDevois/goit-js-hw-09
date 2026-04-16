import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import '../css/styles.css';

// init Swiper:
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

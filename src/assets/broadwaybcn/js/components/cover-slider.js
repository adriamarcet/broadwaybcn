import Swiper, { Pagination, Navigation, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

const initSlider = () =>
  new Swiper('.js-swiper-cover', {
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: '.js-swiper-next',
      prevEl: '.js-swiper-previous',
      disabledClass: 'js-swiper-disabled'
    },
    pagination: {
      el: '.js-swiper-pagination',
      type: 'fraction'
    },
    autoplay: false,
    on: {
      init() {
        // lazyLoadImages();
      }
    }
  });

export default initSlider;

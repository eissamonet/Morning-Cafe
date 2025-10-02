const menuOpenButton = document.querySelector('#menu-open-button');

const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// close the mobile menu when clicking the close button
menuCloseButton.addEventListener("click", () => menuOpenButton.click());


// Initialize Swiper
// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.slider-wrapper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
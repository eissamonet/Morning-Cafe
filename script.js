const menuOpenButton = document.querySelector('#menu-open-button');

const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// close the mobile menu when clicking the close button
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
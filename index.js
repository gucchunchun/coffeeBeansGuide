"use strict";
const hamburgerNav = document.getElementById('hamburger--nav');
const headerNav = document.getElementById('header__nav');
const headerNavMenus = document.querySelectorAll('.header__nav__menu');
function toggleClassName(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
    else {
        element.classList.add(className);
        console.log('adding');
    }
}
const navMenuToggle = () => {
    if (!hamburgerNav || !headerNav) {
        throw new Error('element not found');
    }
    toggleClassName(hamburgerNav, 'close');
    toggleClassName(headerNav, 'open');
};
headerNavMenus === null || headerNavMenus === void 0 ? void 0 : headerNavMenus.forEach((navMenu) => {
    navMenu.addEventListener('mouseenter', () => {
        if (!headerNav) {
            throw new Error('.header__nav not found');
        }
        toggleClassName(headerNav, navMenu.id);
    });
    navMenu.addEventListener('mouseleave', () => {
        if (!headerNav) {
            throw new Error('.header__nav not found');
        }
        toggleClassName(headerNav, navMenu.id);
    });
});

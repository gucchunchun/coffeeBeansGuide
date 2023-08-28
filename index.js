"use strict";
const headerNav = document.getElementById('header__nav');
function toggleClassName(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
    else {
        element.classList.add(className);
    }
}
const toggleNav = (e) => {
    e.preventDefault();
    const hamburgerButton = e.target;
    if (!headerNav) {
        return;
    }
    toggleClassName(hamburgerButton, 'close');
    toggleClassName(headerNav, 'open');
};

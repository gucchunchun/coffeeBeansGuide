const hamburgerNav = document.getElementById('hamburger--nav');
const headerNav = document.getElementById('header__nav');
const headerNavMenus = document.querySelectorAll('.header__nav__menu');

function toggleClassName(element: HTMLElement, className: string) {
    if(element.classList.contains(className)){
        element.classList.remove(className);
    }else {
        element.classList.add(className);
    }
}

const navMenuToggle = ()=>{
    if( !hamburgerNav|| !headerNav) {
        throw new Error('element not found');
    }
    toggleClassName(hamburgerNav, 'close');
    toggleClassName(headerNav, 'open');
}

headerNavMenus?.forEach((navMenu)=>{
    navMenu.addEventListener('mouseenter', ()=>{
        if (!headerNav) {
            throw new Error('.header__nav not found');
        }
        toggleClassName(headerNav, navMenu.id);
    });
    navMenu.addEventListener('mouseleave', ()=>{
        if (!headerNav) {
            throw new Error('.header__nav not found');
        }
        toggleClassName(headerNav, navMenu.id);
    });
})
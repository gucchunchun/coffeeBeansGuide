const headerNav = document.getElementById('header__nav');

function toggleClassName(element: HTMLElement, className: string) {
    if(element.classList.contains(className)){
        element.classList.remove(className);
    }else {
        element.classList.add(className);
    }
}

const toggleNav = (e:MouseEvent)=> {
    e.preventDefault();
    const hamburgerButton = e.target as HTMLElement;
    if( !headerNav ) {
        return;
    }
    toggleClassName(hamburgerButton, 'close');
    toggleClassName(headerNav, 'open');
}

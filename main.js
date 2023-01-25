let menu = document.querySelectorAll("ul.menu_main > li.menu__item > a.menu__link");
let menuSub = document.querySelectorAll("ul.menu_sub");
let subMenu;

let showMenu = function(event) {
    if (event.target.nextElementSibling !== null) {
        event.preventDefault();
        subMenu = event.target.nextElementSibling;
        subMenu.classList.toggle("menu_active");
    }
}

let hideMenu = function(event) {
    if (event.target.nextElementSibling !== null) {
        if (event.relatedTarget === event.target.nextElementSibling) {
            subMenu = event.target.nextElementSibling;
            subMenu.onmouseleave = () => subMenu.classList.remove("menu_active");
        } else {
            subMenu = event.target.nextElementSibling;
            subMenu.classList.remove("menu_active");
        }
    }
}

for (let i=0; i<menu.length; i++) {
    menu[i].addEventListener("mouseover", showMenu);
    menu[i].addEventListener("mouseleave", hideMenu);
    
}





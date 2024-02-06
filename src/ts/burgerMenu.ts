import {BurgerMenu} from "./classes/BurgerMenu.js";

export function burgerMenu() {
    const checkBox = document.getElementById('burger-menu') as HTMLInputElement;
    const burgerMenu = new BurgerMenu(checkBox, '#burger-menu-links');
    burgerMenu.build();
}
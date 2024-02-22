import {contactForm} from "./contactForm.js";
import {burgerMenu} from "./burgerMenu.js";
import {slideScroll} from "./slideScroll.js";

function main() {
    contactForm();
    burgerMenu();
    slideScroll('carousel', 0.1);
}

main();
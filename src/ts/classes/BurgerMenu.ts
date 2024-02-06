export class BurgerMenu {
    private _checkBox: HTMLInputElement;
    private _open: boolean = false;
    private _links: NodeListOf<HTMLAnchorElement>;

    constructor(checkBox: HTMLInputElement, linkscontainer: string) {
        this._checkBox = checkBox;
        this._open = this._checkBox.checked;
        this._links = document.querySelectorAll(`${linkscontainer} a`);
    }

    build() {
        this.addEventListeners();
    }

    addEventListeners() {
        window.addEventListener('keyup', (e) => {
            this._open = this._checkBox.checked;
            if (e.key === 'Escape') {
                this._checkBox.checked = false;
            }
            if (e.key === 'Enter' && document.activeElement === this._checkBox && !this._open) {
                this._checkBox.checked = true;
            }
            if (e.key === 'Enter' && document.activeElement === this._checkBox && this._open) {
                this._checkBox.checked = false;
            }
        });
        this._links.forEach(link => {
            this._open = this._checkBox.checked;
            link.addEventListener('click', () => {
                this._checkBox.checked = false;
            });
        });


    }
}
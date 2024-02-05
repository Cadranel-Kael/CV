import {Field} from "./Field.js";

export class Form {
    private _form: HTMLFormElement;
    private _fields: Field[];
    private _messageArea: HTMLElement;
    private _valid: boolean = false;

    constructor(form: HTMLFormElement, messageArea: HTMLElement, fields: Field[]) {
        this._form = form;
        this._fields = fields;
        this._messageArea = messageArea;
    }

    build() {
        this.removeHtmlValidation();
        this.addEventListeners();
    }

    validate() {
        this._fields.forEach((field: Field) => {
            field.clearError();
            this._valid = field.validate();
        });

        if (this._valid) {
            this.submit();
        }
    }

    submit() {
        this._messageArea.innerHTML = 'Your message has been sent!';
    }

    addEventListeners() {
        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate();
        });

        this._fields.forEach((field: Field) => {
            field.addEventListeners();
        });
    }

    removeHtmlValidation() {
        this._fields.forEach((field: Field) => {
            field.removeHtmlValidation();
        });
    }
}
import {isValidEmail} from "../helpers/isValidEmail.js";
import {errorMessages} from "../settings/errorMessages.js";

export class Field {
    private _field: HTMLInputElement | HTMLTextAreaElement;
    private _fieldName: string;
    private _rules: IRules;
    private _errorArea: HTMLElement;
    private _validated: boolean = false;


    constructor(IField: IField) {
        this._field = IField.field;
        this._rules = IField.rules;
        if (IField.fieldName === undefined) {
            IField.fieldName = IField.field.name;
        }
        this._fieldName = IField.fieldName;
        this._errorArea = IField.errorArea;
    }

    removeHtmlValidation() {
        this._field.removeAttribute('required');
        this._field.removeAttribute('minlength');
        this._field.removeAttribute('maxlength');
    }

    addEventListeners() {
        this._field.addEventListener('focusout', () => {
            this.validate();
            this._validated = true;
        });

        this._field.addEventListener('input', () => {
            if (this._validated) {
                this.validate();
            }
        });
    }

    addErrorClass() {
        this._field.classList.add('error');
    }

    removeErrorClass() {
        this._field.classList.remove('error');
    }

    showError(message: string) {
        this.addErrorClass();
        this._errorArea.innerHTML = message;
    }

    clearError() {
        this.removeErrorClass();
        this._errorArea.innerHTML = '';
    }

    validate(){
        this._validated = true;
        if (this._rules.required && this._field.value === '') {
            this.showError(errorMessages.required(this._fieldName));
            return false;
        }
        if (this._rules.minLength && this._field.value.length < this._rules.minLength) {
            this.showError(errorMessages.minLength(this._fieldName, this._rules.minLength));
            return false;
        }
        if (this._rules.maxLength && this._field.value.length > this._rules.maxLength) {
            this.showError(errorMessages.maxLength(this._fieldName, this._rules.maxLength));
            return false;
        }
        if (this._rules.email && !isValidEmail(this._field.value)) {
            this.showError(errorMessages.email(this._fieldName));
            return false;
        }
        this.clearError();
        return true;
    }
}
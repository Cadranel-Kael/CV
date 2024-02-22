import { isValidEmail } from "../helpers/isValidEmail.js";
import { errorMessages } from "../settings/errorMessages.js";
export class Field {
    constructor(IField) {
        this._validated = false;
        this._field = IField.field;
        if (IField.rules) {
            this._rules = IField.rules;
        }
        else {
            this._field.required ? this._rules.required = this._field.required : this._rules.required = false;
            this._rules = {
                required: this._field.required,
                minLength: this._field.minLength,
                maxLength: this._field.maxLength,
            };
        }
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
    showError(message) {
        this.addErrorClass();
        this._errorArea.innerHTML = message;
    }
    clearError() {
        this.removeErrorClass();
        this._errorArea.innerHTML = '';
    }
    validate() {
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
//# sourceMappingURL=Field.js.map
export class Form {
    constructor(form, messageArea, fields) {
        this._valid = false;
        this._form = form;
        this._fields = fields;
        this._messageArea = messageArea;
    }
    build() {
        this.removeHtmlValidation();
        this.addEventListeners();
    }
    validate() {
        this._fields.forEach((field) => {
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
        this._fields.forEach((field) => {
            field.addEventListeners();
        });
    }
    removeHtmlValidation() {
        this._fields.forEach((field) => {
            field.removeHtmlValidation();
        });
    }
}
//# sourceMappingURL=Form.js.map
interface IField {
    field: HTMLInputElement | HTMLTextAreaElement;
    fieldName?: string;
    rules: IRules;
    errorArea: HTMLElement;
}
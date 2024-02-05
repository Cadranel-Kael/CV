import { Field } from "./classes/Field.js";
import { Form } from "./classes/Form.js";
export function contactForm() {
    const form = new Form(document.getElementById('contact-me'), document.getElementById('contact-message'), [
        new Field({
            field: document.getElementById('name'),
            fieldName: 'Your name',
            rules: {
                required: true,
                minLength: 4,
                maxLength: 50
            },
            errorArea: document.getElementById('name-error')
        }),
        new Field({
            field: document.getElementById('email'),
            fieldName: 'Your email',
            rules: {
                required: true,
                email: true
            },
            errorArea: document.getElementById('email-error')
        }),
        new Field({
            field: document.getElementById('message'),
            fieldName: 'Your message',
            rules: {
                required: true,
                minLength: 10,
                maxLength: 500
            },
            errorArea: document.getElementById('message-error')
        }),
    ]);
    form.build();
}
//# sourceMappingURL=contactForm.js.map
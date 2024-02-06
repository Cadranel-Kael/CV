import {Field} from "./classes/Field.js";
import {Form} from "./classes/Form.js";

export function contactForm() {
    const form = new Form(
        document.getElementById('contact-me') as HTMLFormElement,
        document.getElementById('contact-message') as HTMLElement,
        [
            new Field({
                field: document.getElementById('name') as HTMLInputElement,
                fieldName: 'Your name',
                rules: {
                    required: true,
                    minLength: 4,
                    maxLength: 50
                },
                errorArea: document.getElementById('name-error') as HTMLElement
            }),
            new Field({
                field: document.getElementById('email') as HTMLInputElement,
                fieldName: 'Your email',
                rules: {
                    required: true,
                    email: true
                },
                errorArea: document.getElementById('email-error') as HTMLElement
            }),
            new Field({
                field: document.getElementById('message') as HTMLTextAreaElement,
                fieldName: 'Your message',
                rules: {
                    required: true,
                    minLength: 10,
                    maxLength: 500
                },
                errorArea: document.getElementById('message-error') as HTMLElement
            }),
        ]
    );

    form.build();
}
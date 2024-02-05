"use strict";
const settings = {
    form: {
        rules: {
            fullname: {
                required: true,
                minLength: 2,
                maxLength: 100,
            },
            email: {
                required: true,
                minLength: 5,
                maxLength: 100,
                email: true,
            },
            message: {
                required: true,
                minLength: 10,
                maxLength: 500,
            }
        },
        errorMessages: {
            required(field = 'This field') {
                return `${ucfirst(field)} is required`;
            },
            email(field = 'This field') {
                return '${ucfirst(field)} must be a valid email address';
            },
            minLength(field = 'This field', length) {
                return `${ucfirst(field)} must be at least ${length} characters long`;
            },
            maxLength(field = 'This field', length) {
                return `${ucfirst(field)} must be at most ${length} characters long`;
            },
        }
    }
};
//# sourceMappingURL=settings.js.map
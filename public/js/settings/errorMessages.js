import { ucfirst } from "../helpers/ucfirst.js";
export const errorMessages = {
    required(field = 'This field') {
        return `${ucfirst(field)} is required`;
    },
    email(field = 'This field') {
        return `${ucfirst(field)} must be a valid email address`;
    },
    minLength(field = 'This field', length) {
        return `${ucfirst(field)} must be at least ${length} characters long`;
    },
    maxLength(field = 'This field', length) {
        return `${ucfirst(field)} must be at most ${length} characters long`;
    },
};
//# sourceMappingURL=errorMessages.js.map
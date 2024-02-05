interface IRules {
    [key: string]: any;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
    password?: boolean;
    confirmPassword?: boolean;
    match?: string;
    custom?: (value: string) => boolean;
}
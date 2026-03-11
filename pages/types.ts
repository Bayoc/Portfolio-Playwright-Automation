export type LoginCredentials = {
    email: string;
    password: string;
};

export interface ContactFormData {
    name: string;
    email: string;
    subject?: string;
    message: string;
}
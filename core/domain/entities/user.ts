export class User {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(data: User) {
       Object.assign(this, data);
    }
}
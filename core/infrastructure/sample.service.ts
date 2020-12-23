import {
    LoginService,
    LoginUserDTO,
    LogoutService,
    RegisterService,
    RegisterUserDTO,
    User,
} from "../domain";


// NOTE: This is just an illustrative example, this could've be a HTTP request, Database query, etc...
export class SampleService implements RegisterService, LoginService, LogoutService {

    async register(data: RegisterUserDTO) {
        const user = new User(data);
        user.id = "new";

        return Promise.resolve(user)
    }

    async login(credentials: LoginUserDTO) {
        const user = new User({ firstName: "John", lastName: "Test", ...credentials });
        user.id = "sample";

        return Promise.resolve(user)
    }

    async logout() {
        return Promise.resolve()
    }
}
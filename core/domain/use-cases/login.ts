import { LoginUserDTO } from "../dto";
import { User } from "../entities";

export interface LoginService {
    login(credentials: LoginUserDTO): Promise<User>
}

export abstract class LoginInteractor implements LoginService {
    constructor(public loginService: LoginService) { }

    async login(credentials: LoginUserDTO): Promise<User> {
        return this.loginService.login(credentials);
    }
}
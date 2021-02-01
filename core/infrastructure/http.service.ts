import { HttpClient } from "../data/protocols/http/http-client";
import { RegisterUserDTO, LoginUserDTO } from "../domain/dto";
import { User } from "../domain/entities";
import { LoginService, LogoutService, RegisterService, CurrentUserService } from "../domain/use-cases";

export class HttpService implements RegisterService, LoginService, LogoutService, CurrentUserService {

    constructor(public httpClient: HttpClient) { }

    async register(body: RegisterUserDTO): Promise<User> {
        return this.httpClient.post('/api/auth/register', { body })
    }

    async login(body: LoginUserDTO): Promise<User> {
        return this.httpClient.post('/api/auth/login', { body })
    }

    async logout(body?: any): Promise<void> {
        return this.httpClient.delete('/api/auth/logout', { headers: body?.headers })
    }

    async currentUser(body?: any): Promise<User> {
        return this.httpClient.get('/api/auth/current-user', { headers: body?.headers })
    }
}


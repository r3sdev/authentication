import { HttpClient } from "../data/protocols/http/http-client";
import { RegisterUserDTO, LoginUserDTO } from "../domain/dto";
import { User } from "../domain/entities";
import { LoginService } from "../domain/use-cases/login";
import { LogoutService } from "../domain/use-cases/logout";
import { RegisterService } from "../domain/use-cases/register";

export class HttpService implements RegisterService, LoginService, LogoutService {
    httpClient: HttpService.Constructor['httpClient'];

    constructor(httpClient: HttpService.Constructor['httpClient']) {
        this.httpClient = httpClient;
    }

    async register(body: RegisterUserDTO): Promise<User> {
        return this.httpClient.post('/register', { body })
    }

    async login(body: LoginUserDTO): Promise<User> {
        return this.httpClient.post('/login', { body })
    }

    async logout(body?: any): Promise<undefined> {
        return this.httpClient.post('/logout', { body })
    }
}

export declare namespace HttpService {
    export interface Constructor {
        httpClient: HttpClient;
    }
}
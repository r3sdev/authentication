import { HttpClient } from "../data/protocols/http/http-client";
import { RegisterUserDTO, LoginUserDTO } from "../domain/dto";
import { User } from "../domain/entities";
import { LoginService } from "../domain/use-cases/login";
import { LogoutService } from "../domain/use-cases/logout";
import { RegisterService } from "../domain/use-cases/register";

export abstract class HttpService implements RegisterService, LoginService, LogoutService {
    httpClient: HttpService.ConstructorProps['httpClient'];

    constructor(props: HttpService.ConstructorProps) {
        Object.assign(this, props)
    }

    async register(data: RegisterUserDTO): Promise<User> {
        return this.httpClient.post('/register', {
            body: data,
        })
    }

    async login(credentials: LoginUserDTO): Promise<User> {
        return this.httpClient.post('/login', {
            body: credentials,
        })
    }

    async logout(): Promise<undefined> {
        return this.httpClient.delete('/logout')
    }
}

export declare namespace HttpService {
    export interface ConstructorProps {
        httpClient: HttpClient;
    }
}
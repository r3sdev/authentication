import { RegisterUserDTO } from '../dto';
import { User } from '../entities';

export interface RegisterService {
    register(data: RegisterUserDTO): Promise<User>
}

export abstract class RegisterInteractor implements RegisterService {
    constructor(public registerService: RegisterService) {}

    async register(data: RegisterUserDTO) {
        return this.registerService.register(data)
    }
}
import { User } from "../entities";

export interface CurrentUserService {
    currentUser(): Promise<User | undefined>
}

export abstract class CurrentUserInteractor implements CurrentUserService {
    constructor(public currentUserService: CurrentUserService) { }

    async currentUser(): Promise<User | undefined> {
        return this.currentUserService.currentUser();
    }
}
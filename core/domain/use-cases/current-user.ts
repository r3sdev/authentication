import { User } from "../entities";

export interface CurrentUserService {
    currentUser(): Promise<User>
}

export abstract class CurrentUserInteractor implements CurrentUserService {
    constructor(public currentUserService: CurrentUserService) { }

    async currentUser() {
        return this.currentUserService.currentUser();
    }
}
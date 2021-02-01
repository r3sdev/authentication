
export interface LogoutService {
    logout(): Promise<void>
}

export abstract class LogoutInteractor implements LogoutService {
    constructor(public logoutService: LogoutService) {}

    async logout() {
        return this.logoutService.logout()
    }
}
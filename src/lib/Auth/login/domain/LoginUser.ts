export interface LoginUser {
    run(email: string, password: string): Promise<string>
}
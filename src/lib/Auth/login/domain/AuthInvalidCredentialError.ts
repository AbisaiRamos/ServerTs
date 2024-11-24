export class AuthInvalidCredentialsError extends Error {
    constructor(message: string) {
        super('AuthInvalidCredenbtialsError')
        this.name = 'AuthInvalidCredentialsError'
        this.message = message
    }
}
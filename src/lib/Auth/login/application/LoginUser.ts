import { UserEmail } from '../../../User/domain/UserEmail';
import { UserRepository } from '../../../User/domain/UserRepository';
import { AuthInvalidCredentialsError } from '../domain/AuthInvalidCredentialError';

export class LoginUser {
    constructor(private repository : UserRepository) {}

    async run(email: string, password: string): Promise<string> {
        const user = await this.repository.getOneByEmail(new UserEmail(email))       
        
        if (!user) {
            throw new AuthInvalidCredentialsError('User not found')
        }

        if (user.password.value !== password) {
            throw new AuthInvalidCredentialsError('Password incorrect')
        }

        return `Hello ${user.name.value} welcome back!`
    }
}

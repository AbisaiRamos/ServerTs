import { UserEmail } from '../../../User/domain/UserEmail';
import { UserRepository } from '../../../User/domain/UserRepository';
import { AuthInvalidCredentialsError } from '../domain/AuthInvalidCredentialError';
import { isEmpty } from '../../shared/utils/util.isEmpty';

export class LoginUser {
    constructor(private repository : UserRepository) {}

    async run(email: string, password: string): Promise<string> {
        LoginUser.checkInputs({ email, password })
        const user = await this.getUserByEmail(email)
        this.validatePassword(password, user.password.value)
        return user.id.value
    }

    private static checkInputs(input: object) {         
        const { message, field } = isEmpty(input)
        if (field) throw new Error(message)
    }

    private async getUserByEmail(email: string) {
        const user = await this.repository.getOneByEmail(new UserEmail(email))
        if (!user) throw new Error('User not found')
        return user
    }

    private validatePassword(password: string, userPassword: string) {
        if (password !== userPassword) {
            throw new AuthInvalidCredentialsError('Password incorrect')
        }
    }
}

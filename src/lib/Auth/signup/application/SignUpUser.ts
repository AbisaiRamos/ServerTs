import { UserRepository } from "../../../User/domain/UserRepository"
import { User } from "../../../User/domain/User"
import { UserId } from "../../../User/domain/UserId"
import { UserName } from "../../../User/domain/UserName"
import { UserEmail } from "../../../User/domain/UserEmail"
import { UserPassword } from "../../../User/domain/UserPassword"
import { UserCreatedAt } from "../../../User/domain/UserCreateAt"
import { isEmpty } from "../../shared/utils/util.isEmpty"

export class SignUpUser {
    constructor(private repository : UserRepository) {}

    async run(name: string, email: string, password: string): Promise<void> {
        SignUpUser.checkInputs({ name, email, password })
        const userName: UserName = new UserName(name)
        const userEmail: UserEmail = new UserEmail(email)
        const userPassword: UserPassword = new UserPassword(password)
        const userCreatedAt: UserCreatedAt = new UserCreatedAt(new Date())
        
        await this.userExistInDatabase(email)
        let user: User = SignUpUser.createUserEntity(userName, userEmail, userPassword, userCreatedAt)
        return await this.saveNewUser(user)

    }
    
    private static checkInputs(input: object) {
        const { message, field } = isEmpty(input)
        if (field) throw new Error(message)
    }

    private static createUserEntity(userName: UserName, userEmail: UserEmail, userPassword: UserPassword, userCreatedAt: UserCreatedAt) {
        const user = new User(
            new UserId('12345'),
            userName,
            userEmail,
            userPassword,
            userCreatedAt
        )
        return user
    }

    private async userExistInDatabase(email: string) {
        const userExists = await this.repository.getOneByEmail(new UserEmail(email))
        if (userExists) throw new Error('User already exists')        
    }

    private async saveNewUser(user: User) {
        return await this.repository.create(user)
    }
}
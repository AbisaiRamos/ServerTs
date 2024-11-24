import { UserRepository } from "../../../User/domain/UserRepository"
import { User } from "../../../User/domain/User"
import { UserId } from "../../../User/domain/UserId"
import { UserName } from "../../../User/domain/UserName"
import { UserEmail } from "../../../User/domain/UserEmail"
import { UserPassword } from "../../../User/domain/UserPassword"
import { UserCreatedAt } from "../../../User/domain/UserCreateAt"

export class SignUpUser {
    constructor(private repository : UserRepository) {}

    async run(name: string, email: string, password: string): Promise<void> {

        const userExists = await this.repository.getOneByEmail(new UserEmail(email))

        if (userExists) throw new Error('User already exists')
        
        const user = new User(
            new UserId('12345'),
            new UserName(name),
            new UserEmail(email),
            new UserPassword(password),
            new UserCreatedAt(new Date())
        )

        await this.repository.create(user)

    }
}
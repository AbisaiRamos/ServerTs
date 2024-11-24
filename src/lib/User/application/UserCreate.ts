import { User } from '../domain/User';
import { UserId } from '../domain/UserId';
import { UserName } from '../domain/UserName';
import { UserEmail } from '../domain/UserEmail';
import { UserPassword } from '../domain/UserPassword';
import { UserRepository } from '../domain/UserRepository';
import { UserCreatedAt } from '../domain/UserCreateAt';


export class UserCreate {
    constructor(private repository: UserRepository) { }

    async run(name: string, email: string, password: string, createAt: Date): Promise<void> {

        const user = new User(
            new UserId('12345'),
            new UserName(name),
            new UserEmail(email),
            new UserPassword(password),
            new UserCreatedAt(createAt)
        )

        await this.repository.create(user)
    }
}

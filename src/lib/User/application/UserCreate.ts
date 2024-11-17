import { User } from '../domain/User';
import { UserId } from '../domain/UserId';
import { UserName } from '../domain/UserName';
import { UserEmail } from '../domain/UserEmail';
import { UserRepository } from '../domain/UserRepository';
import { UserCreatedAt } from '../domain/UserCreateAt';


export class UserCreate {
    constructor(private repository: UserRepository) { }

    async run(id: string, name: string, email: string, createAt: Date): Promise<void> {

        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserCreatedAt(createAt)
        )

        await this.repository.create(user)
    }
}

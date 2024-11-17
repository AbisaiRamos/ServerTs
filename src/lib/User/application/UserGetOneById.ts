import { User } from '../domain/User';
import { UserId } from '../domain/UserId';
import { UserRepository } from '../domain/UserRepository';

export class UserGetOneById {
    constructor(private repository: UserRepository) { }
    async run(id: UserId): Promise<User | null> {
        return this.repository.getOneById(id);
    }
}
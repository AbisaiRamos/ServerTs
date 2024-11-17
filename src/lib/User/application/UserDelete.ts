import { UserRepository } from '../domain/UserRepository';
import { UserId } from '../domain/UserId';

export class UserDelete {
    constructor(private repository: UserRepository) { }
    run(id: UserId): Promise<void> {
        return this.repository.delete(id);
    }
}
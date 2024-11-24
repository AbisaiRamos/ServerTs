import { User } from '../domain/User';
import { UserEmail } from '../domain/UserEmail';
import { UserRepository } from '../domain/UserRepository';

export class UserGetOneByEmail {
    constructor(private repository: UserRepository) { }
    async run(email: string): Promise<User | null> {

        const userEmail = new UserEmail(email);
        return this.repository.getOneByEmail(userEmail);
        
    }
}
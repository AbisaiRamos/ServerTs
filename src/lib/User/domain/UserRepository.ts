import { User } from './User';
import { UserId } from './UserId';
import { UserEmail } from './UserEmail';


export interface UserRepository {
    create(user: User): Promise<void>
    getAll(): Promise<User[]>
    getOneById(id: UserId): Promise<User | null>
    getOneByEmail(email: UserEmail): Promise<User | null>
    edit(user: User): Promise<void>
    delete(id: UserId): Promise<void>
}
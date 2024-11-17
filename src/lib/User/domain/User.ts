import { UserName } from './UserName';
import { UserEmail } from './UserEmail';
import { UserId } from './UserId';
import { UserCreatedAt } from './UserCreateAt';

export class User {
    id: UserId
    name: UserName
    email: UserEmail
    createdAt: UserCreatedAt

    constructor(id: UserId, name: UserName, email: UserEmail, createdAt: UserCreatedAt) {
        this.id = id
        this.name = name
        this.email = email
        this.createdAt = createdAt
    }
}
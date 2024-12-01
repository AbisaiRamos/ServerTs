import { UserRepository } from "../../domain/UserRepository";
import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserEmail } from "../../domain/UserEmail";
import { UserPassword } from "../../domain/UserPassword";
import { UserCreatedAt } from "../../domain/UserCreateAt";

export class InMemoryRepository implements UserRepository {
    private users: User[] = [
        new User(new UserId('12345'), new UserName('Abisai'), new UserEmail('abisai@gmail.com'), new UserPassword('administrator'), new UserCreatedAt(new Date()))
    ]

    async create(user: User): Promise<void> {
        this.users.push(user)
    }

    async getAll(): Promise<User[]> {
        return this.users
    }

    async getOneById(id: UserId): Promise<User | null> {
        return this.users.find(user => user.id.value === id.value) || null
    }

    async getOneByEmail(email: UserEmail): Promise<User | null> {
        return this.users.find(user => user.email.value === email.value) || null
    }

    async edit(user: User): Promise<void> {
        const index = this.users.findIndex(u => u.id.value === user.id.value)
        this.users[index] = user
    }

    async delete(id: UserId): Promise<void> {
        this.users = this.users.filter(user => user.id.value !== id.value)
    }
}
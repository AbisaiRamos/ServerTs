import { UserModel } from '../mongoDb/Models'
import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { UserName } from '../../domain/UserName';
import { UserEmail } from '../../domain/UserEmail';
import { UserPassword } from '../../domain/UserPassword';
import { UserCreatedAt } from '../../domain/UserCreateAt';
import { UserRepository } from '../../domain/UserRepository';

export class MongoRepository implements UserRepository {
    async create(user: User): Promise<void> {
        const userDoc = new UserModel({
            name: user.name.value,
            email: user.email.value,
            password: user.password.value,
            createdAt: user.createdAt.value
        })
        try {
            await userDoc.save()
        } catch (error) {
            console.log(error)
        }
    }
    async getAll(): Promise<User[]> {
        const response = await UserModel.find()
        
        const users = response.map(user => new User(
            new UserId(user.id),
            new UserName(user.name),
            new UserEmail(user.email),
            new UserPassword(user.password),
            new UserCreatedAt(user.createdAt)
        ))
        
        return users
        
        
    }
    async getOneById(id: UserId): Promise<User | null> {
        return await UserModel.findOne({ id: id.value })
    }
    async getOneByEmail(email: UserEmail): Promise<User | null> {
        const response = await UserModel.findOne({ email: email.value })
        if (!response) {
            return null
        }
        const user = new User(
            new UserId(response._id),
            new UserName(response.name),
            new UserEmail(response.email),
            new UserPassword(response.password),
            new UserCreatedAt(response.createdAt)
        )
        return user

    }
    async edit(user: User): Promise<void> {
        const userDoc = new UserModel({
            name: user.name.value,
            email: user.email.value,
            password: user.password.value,
            createdAt: user.createdAt.value
        })
        try {
            await userDoc.save()
        } catch (error) {
            console.log(error)
        }
    }
    async delete(id: UserId): Promise<void> {
        await UserModel.deleteOne({ id: id.value })
    }
}

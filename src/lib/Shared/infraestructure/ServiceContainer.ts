// import { InMemoryRepository } from "../../User/infraestructure/InMemoryRepository";
import { MongoRepository } from "../../User/infraestructure/MongoRepository";
import { UserCreate } from "../../User/application/UserCreate";
import { UserGetAll } from "../../User/application/UserGetAll";
import { UserEdit } from "../../User/application/UserEdit";
import { UserGetOneById } from "../../User/application/UserGetOneById";
import { UserDelete } from "../../User/application/UserDelete";
import { UserGetOneByEmail } from "../../User/application/UserGetOneByEmail";

const userRepository = new MongoRepository()

export const ServiceContainer = {
    user : {
        create: new UserCreate(userRepository),
        getAll: new UserGetAll(userRepository),
        update: new UserEdit(userRepository),
        findById: new UserGetOneById(userRepository),
        findByEmail: new UserGetOneByEmail(userRepository),
        delete: new UserDelete(userRepository)
    }
}
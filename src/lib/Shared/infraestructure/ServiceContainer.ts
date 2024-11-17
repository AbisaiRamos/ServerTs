import { InMemoryRepository } from "../../User/infraestructure/InMemoryRepository";
import { UserCreate } from "../../User/application/UserCreate";
import { UserGetAll } from "../../User/application/UserGetAll";
import { UserEdit } from "../../User/application/UserEdit";
import { UserGetOneById } from "../../User/application/UserGetOneById";
import { UserDelete } from "../../User/application/UserDelete";

const userRepository = new InMemoryRepository()

export const ServiceContainer = {
    user : {
        create: new UserCreate(userRepository),
        getAll: new UserGetAll(userRepository),
        update: new UserEdit(userRepository),
        findById: new UserGetOneById(userRepository),
        delete: new UserDelete(userRepository)
    }
}
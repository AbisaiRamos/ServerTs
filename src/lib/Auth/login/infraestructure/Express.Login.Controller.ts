import { Request, Response } from "express"
import { MongoRepository } from "../../../User/infraestructure/repositories/MongoRepository"
import { LoginUser } from "../application/LoginUser"
import { AuthInvalidCredentialsError } from "../domain/AuthInvalidCredentialError"

export class ExpressLoginController {
    UserId: string | undefined
    constructor() {
        this.UserId = undefined
    }

    async run(request: Request, response: Response) {

        const userRepository = new MongoRepository()
        const loginUser = new LoginUser(userRepository)

        try {

            const { email, password }: { email: string, password: string } = request.body
            this.UserId = await loginUser.run(email, password)
            this.sessionStart(request)
            response.status(200).send({message:'Login successful', userId: this.UserId});

        } catch (error: AuthInvalidCredentialsError | any) {
            response.status(401).send({ "error-name": error.name, "message": error.message });
        }
    }
    
    sessionStart(request: Request) {
        request.session.userId = this.UserId
    }

}
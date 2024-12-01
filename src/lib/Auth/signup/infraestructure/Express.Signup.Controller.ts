import { Request, Response } from "express"
import { MongoRepository } from "../../../User/infraestructure/MongoRepository"
import { SignUpUser } from "../application/SignUpUser"
import { AuthInvalidCredentialsError } from "../../login/domain/AuthInvalidCredentialError"

export class ExpressSignupController {
    async run(req: Request, res: Response) {
        
        const userRepository = new MongoRepository()
        const signupUser = new SignUpUser(userRepository)
        
        try {
            const { name, email, password }: { name: string, email: string, password: string } = req.body
            const newUser = await signupUser.run(name, email, password)
            res.status(201).send({ message: 'User created', newUser })

        } catch (error: AuthInvalidCredentialsError | any) {
            res.status(400).send(error.message)

        }
    }
}

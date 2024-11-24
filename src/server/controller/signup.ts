import { Request, Response } from "express"
import { isEmpty } from "../middleware/validateEntries"
import { MongoRepository } from "../../lib/User/infraestructure/MongoRepository"
import { SignUpUser } from "../../lib/Auth/sign-in/application/SignUpUser"
import { AuthInvalidCredentialsError } from "../../lib/Auth/login/domain/AuthInvalidCredentialError"

const Signup = async (req: Request, res: Response): Promise<Response<any, Record<string, any>> | any> => {
    const userRequest = isEmpty(req.body)
    if (userRequest.error) return res.status(400).send(userRequest.message)

    const { username, email, password } = req.body
    const userRepository = new MongoRepository()
    const signupUser = new SignUpUser(userRepository)
    
    try {
        const newUser = await signupUser.run(username, email, password)
        console.log(newUser)
        res.status(201).send('User created')
    } catch (error: AuthInvalidCredentialsError | any) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

export default Signup
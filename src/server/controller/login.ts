import { Request, Response } from "express"
import { LoginUser } from "../../lib/Auth/login/application/LoginUser"
import { MongoRepository } from "../../lib/User/infraestructure/MongoRepository"
import { AuthInvalidCredentialsError } from '../../lib/Auth/login/domain/AuthInvalidCredentialError';
import { isEmpty } from "../middleware/validateEntries"


const Login = async (req: Request, res: Response) => {

    const userRepository = new MongoRepository()
    const loginUser = new LoginUser(userRepository)
   
    if(isEmpty(req.body)) res.status(400).send('Bad request')
    const { email, password } = req.body

    try {
        await loginUser.run(email, password)
        res.status(200).send('Login successful')
    } catch (error: AuthInvalidCredentialsError | any) {
        console.log(error.message);
        
        res.status(401).send(error.message)
    }

};

export default Login
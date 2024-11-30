import { Request, Response } from "express"
import { ExpressLoginController } from "../../../login/infraestructure/Express.Login.Controller"
import { ExpressLogoutController } from "../../../logout/infraestructure/Express.Logout.Controller"
import { ExpressSignupController } from "../../../signup/infraestructure/Express.Signup.Controller"

export class ExpressAuthController {
    
    static async login(request: Request, response: Response) {
        const loginController = new ExpressLoginController()
        return loginController.run(request, response)

    }

    static logout(req: Request, res: Response) {
        const logoutController = new ExpressLogoutController()
        logoutController.logout(req, res) // ::TODO:: change methon logout to run 
    }

    static signup(request: Request, response: Response) {
        const signupController = new ExpressSignupController()
        signupController.run(request, response)
        
    }

    static notFound(req: Request, res: Response) {
        res.status(404).send('404')
    }
}
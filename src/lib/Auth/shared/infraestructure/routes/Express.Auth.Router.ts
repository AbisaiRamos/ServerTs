import { Router } from "express"
import { ExpressAuthController } from "../controllers/Express.Auth.Controller"

const expressAuthRouter = Router()
expressAuthRouter.post('/login', ExpressAuthController.login)
expressAuthRouter.post('/logout', ExpressAuthController.logout)
expressAuthRouter.post('/signup', ExpressAuthController.signup)


export default expressAuthRouter
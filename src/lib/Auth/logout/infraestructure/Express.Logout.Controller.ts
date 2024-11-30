import { Request, Response } from "express"

export class ExpressLogoutController {
    logout(req: Request, res: Response) {
        req.session.destroy(err => {
            if (err) {
                throw new Error(err)
            }
        })
        res.status(200).send('Logout')
    }
}

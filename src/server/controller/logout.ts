import { Request, Response } from "express"

const Logout = (req: Request, res: Response) => {
    res.send('Hola logout')

}
export default Logout
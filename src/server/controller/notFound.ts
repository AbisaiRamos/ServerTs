import { Request, Response } from 'express'

const NotFound = (req: Request, res: Response) => {
    res.status(404).send('404')
}


export default NotFound
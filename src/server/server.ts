import express from 'express'
import cors from 'cors'
import router from './routes/routesAuth'
import { connectToDatabase } from '../mongodb'

const app = express()
const port = 3000


app.use(express.json())
app.use(cors())

app.use('/auth', router)


app.listen(port, () => {
    connectToDatabase()
    console.log(`Server running at http://localhost:${port}`);
    
})
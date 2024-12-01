import express from 'express'
import session from 'express-session'   
import cors from 'cors'
import expressAuthRouter from './lib/Auth/shared/infraestructure/routes/Express.Auth.Router'
import connectToDatabase from './lib/Shared/infraestructure/database/mongoDB/mongo.conection'

const app = express()
const port = 3000


app.use(express.json())
app.use(cors())
app.use(session({
    secret: 'backendByAbysay',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))

app.use('/auth', expressAuthRouter)

app.listen(port, () => {
    connectToDatabase()
    console.log(`Server running at http://localhost:${port}`);
    
})
import express from 'express'
import Login from '../controller/login'
import Logout from '../controller/logout'
import NotFound from '../controller/notFound'
import Signup from '../controller/signup'

const router = express.Router()

router.post('/login', Login)
router.post('/logout', Logout)
router.post('/signup', Signup)
router.post('*', NotFound)

export default router
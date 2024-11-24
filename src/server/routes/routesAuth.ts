import express from 'express'
import Login from '../controller/login'
import Logout from '../controller/logout'
import NotFound from '../controller/notFound'

const router = express.Router()

router.post('/login', Login)
router.post('/logout', Logout)
router.post('*', NotFound)

export default router
import express from 'express'
import userRoute from './user.routes.js'



const router = express.Router();

const path = "/api-v1/";


router.use(`${path}user`,userRoute)

export default router
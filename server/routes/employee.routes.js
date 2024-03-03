import express from 'express'
import { createEmployee } from '../controllers/employee.controller.js'

const router=express.Router()

router.post("/createEmp",createEmployee)

export default router
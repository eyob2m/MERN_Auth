import express from 'express'
export const router = express.Router()
import { test } from '../contrillers/userCrrl.js'
router.get('/',test)

export default  router;


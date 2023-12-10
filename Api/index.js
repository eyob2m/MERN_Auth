import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import  UserRouter  from './routes/UserRoutes.js'
import  authRouter  from './routes/auth.js'

dotenv.config()


const app = express()

mongoose.connect("mongodb://localhost:27017").then(()=>console.log("Connected to db")).catch(()=>"Error while connecting")

app.use(express.json())
app.use('/api/user', UserRouter)
app.use('/api/auth', authRouter)
app.listen(4000,()=>{
    console.log("Server started"
    )
})

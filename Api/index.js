import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import  UserRouter  from './routes/UserRoutes.js'

dotenv.config()


const app = express()
app.use('/api/user', UserRouter)
app.listen(4000,()=>{
    console.log("Server started"
    )
})
mongoose.connect(process.env.MONGO).then(()=>console.log("Connected to db")).catch(()=>"Error while connecting")



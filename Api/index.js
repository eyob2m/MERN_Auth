import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import  UserRouter  from './routes/UserRoutes.js'
import  authRouter  from './routes/auth.js'
import cors from 'cors'
dotenv.config()


const app = express()

mongoose.connect("mongodb://localhost:27017").then(()=>console.log("Connected to db")).catch(()=>"Error while connecting")
app.use(cors());
app.use(express.json())
app.use('/api/user', UserRouter)
app.use('/api/auth', authRouter)
app.listen(4000,()=>{
    console.log("Server started"
    )
});

app.use((err, req, res, next) => {

    const stCode = err.statusCode || 500;
    const message = err.message || "Internal Server error";
    return res.status(stCode).json({
        success: false,
        message, stCode
    });

})

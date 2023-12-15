import User from "../models/userModel.js";
import bc from 'bcryptjs'
export const signup  = async (req,res,next)=>{


    try {
        const {username, email,password} = req.body;
        if(!(username&&email&&password)) {
           return res.json({msg: "fill all parameter"}) 
        }
        
        const hpw = bc.hashSync(password,10)
        const newUser = await User.create({...req.body, password: hpw})
        res.json(newUser).status(201)
    } catch (error) {
       next(error)
    }
  
}
import User from "../models/userModel";

export const signup  = (req,res)=>{

    const {name, email,password} = req.body;
    const newUser = User
   
}
import React, { useState } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom'
export default function Signup() {

 const [formData , setFormData] = useState({});
 const [loading, setloading] = useState(false)
 const [error, seterror] = useState(false)
const handleChange = (e) =>{

setFormData({...formData, [e.target.id]: e.target.value })

}
const handleSubmit = async  (e) =>{
e.preventDefault();
try {
  setloading(true)
  const res = await axios.post('http://localhost:4000/api/auth/signup',formData)
console.log(res.data);
seterror(false)
setloading(false)
} catch (error) {
  setloading(false)
seterror(true)
  console.log(error.msg);
}

  }
console.log(formData);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
<input type="text" name="" placeholder='Username' id="username" className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
<input type="email" name="" placeholder='Email' id="email" className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
<input type="password" name="" placeholder='Password' id="password" className='bg-slate-100 p-3 rounded-lg' onChange={handleChange}/>
<button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 '>{ loading? 'Loading . . . ' : 'Sign Up'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account? </p>
       <Link to="/sign-in"> <span className='text-blue-500'>Sign In</span></Link> 
      </div>
      <p className='mt-5 text-red-600'>{error && "Something gone wrong"}</p>
    </div>
  )
}

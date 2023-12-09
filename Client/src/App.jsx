import React from "react"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import About from "./pages/About"
import Header from "./components/Header"

export default function App() {
  return (

    <BrowserRouter>
<Header />
<Routes>

<Route   exact path="/"  element={ <Home />}/>
<Route path="/about" element={ <About />}/>
<Route path="/sign-in" element={ <Signin />}/>
<Route path="/sign-up" element={ <Signup />}/>
<Route path="/profile" element={ <Profile />}/>


</Routes>


    </BrowserRouter>

  
  )
}

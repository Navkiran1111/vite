
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/home";
import Contact from "./assets/components/Contact";


import About from "./assets/components/About";

function App(){
const router = createBrowserRouter([

  {
    path:"/",
    element:<><Navbar /><Home /></>
  },
  
  {
    path:"/about",
    element:<><Navbar /><About /></>
  },
  {
    path:"/contact",
    element:<><Navbar /><Contact /></>
  },
  
  
])
  


  
return(
<>

<RouterProvider router={router} />

</>
)
}


export default App
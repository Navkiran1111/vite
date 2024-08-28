
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Contact from "./assets/components/Contact";
import Basic from "./assets/components/Basic";


import Learning from "./assets/components/Learning";

function App(){
const router = createBrowserRouter([

  {
    path:"/",
    element:<><Navbar /><Home /></>
  },
  
  {
    path:"/Learning",
    element:<><Navbar /><Learning /></>
  },
  {
    path:"/contact",
    element:<><Navbar /><Contact /></>
  },
  {
    path:"/Basic",
    element:<><Navbar /><Basic /></>
  },
  
  
  
])
  


  
return(
<>

<RouterProvider router={router} />

</>
)
}


export default App
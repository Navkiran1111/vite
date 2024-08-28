import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  return (
    <div>
      <nav>
        
        <p>WEB DESIGNING</p>

      <Link to="/"><li>Home</li></Link>
      <Link to="/Learning"><li>Learning</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/Basic"><li>Basic</li></Link>
      
      </nav>
    </div>
  )
}
export default Navbar
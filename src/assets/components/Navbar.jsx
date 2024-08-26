import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  return (
    <div>
      <nav>
        <p>BAJWA TECHNICAL</p>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      </nav>
    </div>
  )
}
export default Navbar
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar=()=> {
  const [buttondecide,setButtonDecide]=useState(true);
    return (
      <>
      
        <div className="navbar"   >
         
          <div className="search">
            <li > <Link className="lin" to="/">  Home </Link> </li>
            <li> <Link className="lin" to="/About">  About</Link></li>
            <li><Link className="lin" to="/contact">Contact</Link></li>
            <li className="lin"> Cart</li>
          </div>
          {((buttondecide==true)?(<button className="navb" onClick={()=>setButtonDecide(false)}>Login</button>):
          (<button className= "navb"onClick={()=>setButtonDecide(true)}>Logout</button>))}
         
          
        </div>
        
      </>
    )
  }

  export default Navbar;
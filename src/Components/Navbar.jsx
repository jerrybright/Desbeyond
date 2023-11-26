import React,{useState} from "react"
import { NavLink, Link } from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Services from "../Pages/Services"
import Contact from "../Pages/Contact"

const Navbar = () => {
  let[menuOpen, setMenuOpen] = useState(false);

    return(
        <div className="navbar">
            <Link to='/' className="navtitle">DESBEYOND</Link>
            <div className="hamburg" onClick={() => {
              setMenuOpen(!menuOpen)
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="menu" id={menuOpen ? "open" : ""}>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </div>
    )
}

export default Navbar
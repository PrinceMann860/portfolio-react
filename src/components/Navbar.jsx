import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
export const Navbar = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className='checkbtn'>
         <FontAwesomeIcon icon={faBars} />
        </label>
        <label className='logo'>About <span id='yellow'>Me.</span></label>
          <ul>
            <Link to="/"><li  >Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/resume"><li>Resume</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            </ul>
        
      </nav>
    </div>
  )
}
export default Navbar
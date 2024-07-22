import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import {Link} from 'react-router-dom'

function NavBar() {
  return (
 <>
 <nav className=' flex items-center justify-center   absolute  z-50 p-2'>
    <ul className='flex items-center justify-center'>
      <Link to='/'><li className='text-white text-4xl font-mono font-bold text-glow mx-12 '>UiC.</li></Link>   
        

    </ul>


 </nav>
 
 </>
  )
}

export default NavBar
import React from 'react';
import Background from '../Media/homeBg.mp4';
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FiCodesandbox } from "react-icons/fi";
import {useNavigate} from 'react-router-dom' ; 


function Home() {

  const navigate = useNavigate() ;

  const handleNavigate=()=>{
    navigate('/Component-Page')
  }
  return (
    <div className='relative w-screen h-screen'>
      <video className='absolute inset-0 w-full h-full object-cover' autoPlay loop muted>
        <source src={Background} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
   
       <div className="absolute inset-0 z-50 text-white flex flex-col items-center justify-center  h-auto">
        <p className='text-5xl py-12 text-glow font-mono'>UiC.</p>
  <p className='text-6xl font-sans'>Crafting Tomorrow's User Experiences Today with <span className='text-glow'>Ui-CRAFTS</span></p>
  <p className=' text-xl text-gray-400 py-5 font-sans'>Use the latest trending UI components on your website with pre-built styles and animations, <br></br>ensuring your project stands out without the hassle of manual design and animation work.</p>
  <button className='bg-glow border font-bold border-white text-white text-xl font-sans py-5 px-4 mt-12 rounded-lg hover:text-black hover:bg-white' onClick={handleNavigate}>Browse Components</button>

 <ul className='flex items-center mt-5'>
  <li className='mx-2 flex '><FaReact className='w-7 h-7'/></li>
  <li className='mx-2 flex'><SiNextdotjs className='w-7 h-7' /></li>
  <li className='mx-2 flex'><RiTailwindCssFill className='w-7 h-7'/></li>
  <li className='mx-2 flex'><FiCodesandbox className='w-7 h-7'/></li>
 </ul>
</div>

    </div>
  );
}

export default Home;

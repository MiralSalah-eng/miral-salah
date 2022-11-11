import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll'

const NabvBar = () => {
    const [nav,setNav]=useState(false);
       


    const links = [
        {
            id:1,
            link : "home"
        },
        {
            id:2,
            link : "about"
        },  {
            id:3,
            link : "skills"
        },   
        
        {
            id:4,
            link : "contact"
        }
    ]

  return (
    <div className='fixed flex justify-between items-center px-4 bg-black text-white w-full h-20'>
        <h2 className='ml-2 text-4xl text-stone-300 font-signatureP cursor-pointer'>
        <Link  to= {'home'}  smooth={true}  duration={500}> Miral </Link>
                </h2>
       
       
        <ul className='hidden md:flex'>

        {links.map( ({id,link}) => (      
                  <li key={id} className='px-4 text-gray-500  capitalize cursor-pointer font-medium
                  hover:scale-105 hover:text-white duration-200 '>
                    <Link  to= {link}  smooth={true}  duration={500}> {link}</Link>
                    </li>

        ))}

        </ul>
         
         <div onClick={()=> setNav(!nav)} className='md:hidden z-10 cursor-pointer text-gray-500'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
         </div>

         {nav && (
                <ul className=' md:hidden flex flex-col justify-center items-center w-full h-screen 
                absolute left-0 top-0 bg-gradient-to-b from-black to-gray-800'>

                {links.map( ({id,link}) => (      
                          <li key={id} className='py-4 text-gray-500  capitalize cursor-pointer text-4xl
                          hover:scale-105 hover:text-white duration-200 '>
                    <Link onClick={()=>setNav(!nav)}  to= {link}  smooth={true}  duration={500}> {link}</Link>
     
                            </li>
        
                ))}
        
                </ul>
            )}

    </div>

  
  )
}

export default NabvBar

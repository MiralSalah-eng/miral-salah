import React from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {SiFreelancer} from 'react-icons/si'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialIcons = () => {
    const links = [
        {
            id:1,
            child :
                (<>LinkedIn <TfiLinkedin size={23}/></>),
            href : 'https://www.linkedin.com/in/miral-elzalaki-939276169' ,
            style : 'hover:rounded-tr-xl hover:bg-blue-800'    
        },
        {
            id:2,
            child :
                (<>Freelancer <SiFreelancer size={25}/></>),
            href : 'https://www.freelancer.com/u/MiralSZ' ,
            style : 'hover:bg-sky-600 '
        },
        {
            id:3,
            child :
                (<>Send Mail <HiOutlineMail size={25}/></>),
            href : 'mailto:engmiralsalah@gmail.com' ,
            style : "hover:bg-red-700"
        },
        {
            id:4,
            child :
                (<>Resume <BsFillPersonLinesFill size={25}/></>),
            href : '/public/Miral Salah Elzalaki Cv.pdf' ,
            download : true,
            style : 'hover:rounded-br-xl hover:bg-pink-600'    
        }
    ] 
    

  return (
   
   <>
     <div className='hidden lg:flex fixed flex-col top-1/3 '>

        <ul>
        {links.map((link)=> 
        (  <li  key={link.id} className={"flex justify-between items-center bg-gray-800 text-white px-4 w-40 h-12  font-bold ml-[-100px] hover:ml-[-10px] duration-300 "+link.style} >
            <a className='flex justify-between items-center w-full' href={link.href} download={link.download} target='_blank' rel='noreferrer'>{link.child}</a> </li>
        ))}    
        </ul>
        </div>


       

   </>
 
  )
}

export default SocialIcons
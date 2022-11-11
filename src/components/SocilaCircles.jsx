import React from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {SiFreelancer} from 'react-icons/si'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocilaCircles = () => {
    const links = [
        {
            id:1,
            child :
                (<TfiLinkedin size={20}/>),
            href : 'https://www.linkedin.com/in/miral-elzalaki-939276169' ,
            style : 'bg-blue-800'    
        },
        {
            id:2,
            child :
                (<SiFreelancer size={20}/>),
            href : 'https://www.freelancer.com/u/MiralSZ' ,
            style : 'bg-sky-600 '
        },
        {
            id:3,
            child :
                (<HiOutlineMail size={20}/>),
            href : 'mailto:engmiralsalah@gmail.com' ,
            style : "bg-red-700"
        },
        {
            id:4,
            child :
                (<BsFillPersonLinesFill size={20}/>),
            href : '/public/Miral Salah Elzalaki Cv.pdf' ,
            download : true,
            style : 'bg-pink-600'    
        }
    ] 
    

  return (

    <div className='md:hidden flex flex-col justify-between top-[620px] '>
      <ul className='flex flex-row'>
        {links.map((link)=>(
              <li className={"w-9 h-9 rounded-full ml-4 flex justify-center items-center text-stone-300 " + link.style}>
                <a  href={link.href} download={link.download} target='_blank' rel='noreferrer'>{link.child}</a>
               
              </li>
        ))}
      
      </ul>
     
     
    </div>  )
}



export default SocilaCircles

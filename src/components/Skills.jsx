import React from 'react'
import {FaHtml5} from 'react-icons/fa'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {RiReactjsFill} from 'react-icons/ri'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobexd} from 'react-icons/si'

const Skills = () => {
    const skills =[
        {
            id:1,
            skill:  <FaHtml5 className='group' size={70}/>,
            title : "Html",
            style:'hover:shadow-[#f84418]'
        },
        {
            id:2,
            skill: <SiCss3 className='group' size={60}/>,
            title : "Css",
            style:'hover:shadow-[#0169b1]'
        },
        {
            id:3,
            skill:<SiJavascript className='group' size={60}/>,
            title : "JavaScript",
            style:'hover:shadow-[#eaca32]'

        },
        {
            id:4,
            skill:<RiReactjsFill className='group' size={70}/> ,
            title : "React Js",
            style:'hover:shadow-[#00d8ff]'

        },
        {
            id:5,
            skill:<SiTailwindcss className='group' size={70}/>,
            title : "Tailwind",
            style:'hover:shadow-[#38bdf8]'

        },
        {
            id:6,
            skill:<SiAdobephotoshop className='group' size={60}/>,
            title : "Photoshop",
            style:'hover:shadow-[#001833] '

        },
        {
            id:7,
            skill:<SiAdobeillustrator className='group' size={60}/>,
            title : "Illustrator",
            style:'hover:shadow-[#f77800]'

        },
        {
            id:8,
            skill:<SiAdobexd className='group' size={60}/>,
            title : "Adobe XD",
            style:'hover:shadow-[#470137]'
        },
    ]


  return (
    <div name="skills" className='w-full bg-[#0d1117] h-screen text-stone-300 pt-14'>
              <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='flex flex-col justify-center max-w-[1000px] w-full mx-auto px-4'>
            <div>
                <p className='text-4xl font-bold border-b-2 border-pink-600 inline'>Skills</p>
                <p className='py-4'>These is technologies I've worked with </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                {skills.map(({id,skill,title,style})=>(

                    <div  key={id} 
                    className={"flex flex-col justify-center items-center rounded-md hover:scale-110 shadow-md shadow-[#040c16] p-4 "+ style}>
                        {skill}
                        <p className='my-2 font-semibold'>{title}</p>
                    </div>
                ))}

                
                
            </div>    
        </div>
    
    </div>
    
    </div>
  )
}

export default Skills
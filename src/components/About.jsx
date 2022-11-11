import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full bg-[#0d1117] h-screen text-stone-300'>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 '>  
        <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold border-b-2 border-pink-600 inline'>About</p>
            </div>
            <div></div>
        </div>

        <div className='max-w-[1000px] grid sm:grid-cols-2 gap-3 md:gap-8 mx-auto '>
            <div className='pl-4 sm:text-right text-3xl font-bold'>
            <p>Hi I'm <span className='text-pink-600'>Miral,</span> nice to meet you, Please take a look around</p>    
            </div> 

            <div className='pl-4 text-left'>
            <p>I have a passion for design. I have experience as a graphic designer with +3 years experience, and work as a freelancer. My main concern is to do the work in a way that exceeds the my client's expectations, and this is what I have always received from clients feedbacks.
I am currently working as a front end developer using React js and this website you see is using React js and Tailwind </p>    
            </div>
        </div>
        </div>
    </div>
  )
}

export default About
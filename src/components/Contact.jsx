import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full bg-[#0d1117] h-screen text-stone-300 p-4 flex justify-center items-center'>
      
      <div className='flex flex-col justify-center items-center w-full '>
      <form method='POST' action='https://getform.io/f/48b546a1-fa02-4e45-a22d-cd34880b582d' className='flex flex-col max-w-[600px] w-full mx-auto px-4'>
         
          <div className='pb-8 text-stone-300'>
            <p className='text-4xl font-bold border-b-2 border-pink-600 inline'>Contact</p>
            <p className='py-4'>Submit the form belo or shoot me an email engmiralsalah@gmail.com</p>
          </div>

          <input type='text' name="name" placeholder='Name' className='  text-zinc-900 p-2 bg-stone-300'/>
          <input type='email' name="email" placeholder='Email' className='  text-zinc-900 p-2 my-4 bg-stone-300'/>
          <textarea name="mmessage" rows={5} placeholder='Message' className=' text-zinc-900 p-2 bg-stone-300'/>
          <button className='mx-auto flex items-center text-stone-300 border-2 my-4 px-8 py-2 hover:bg-pink-600 hover:border-pink-600'>Let's Talk</button>

      </form>
      </div>

    </div>
  )
}

export default Contact
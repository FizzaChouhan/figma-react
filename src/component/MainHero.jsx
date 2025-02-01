import React from 'react'

const MainHero = () => {
  return (
    <>
    <div className='flex '>
    <div className=' flex-col justify-items-start grid gap-x-8 gap-y-4'>
       <p className='text-black'>Hey, I am John</p> 
       <h1 className='text-black text-4xl font-bold justify-items-start'>I create <span className='text-purple-500'>product design </span>
       and brand experience</h1>
       <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas nostrum atque quo cumque alias dolores, necessitatibus labore ea qui earum.</p>
       <button className='bg-purple-500 text-white p-3 w-40 size-18 text-lg rounded-md'>Get in Touch</button>

    </div>
    <div>
      <img src="public/Logo.png" alt="" className='w-32'/>
    </div>
    <div>
      <img src="public/Group 11 1@2x.png" alt="man" className='w-4xl'/>
    </div>
    </div>
    </>
  )
}

export default MainHero
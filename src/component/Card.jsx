import React from 'react'

const Card = () => {
  return (
   <>
   <div className=''>
   <div className='flex-col justify-items-start'>
    <p className='text-black'>My Skill</p>
    <h1  className='text-black text-3xl font-bold'>My Expertise</h1>
   </div>
   <div className='md:flex'>
    <div className='bg-indigo-100 flex-col justify-items-start w-2xs grid gap-5 m-2.5 p-3.5 rounded-2xl'> 
        <img src="public/product-chain 1.png" alt="card1" />
        <h1 className='text-black text-2xl '> Strategy and Direction</h1>
        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

    </div>
    <div className='bg-indigo-100 flex-col justify-items-start w-2xs grid gap-5 m-2.5 p-3.5 rounded-2xl'> 
        <img src="public/tag 1.png" alt="card1" />
        <h1 className='text-black text-2xl '>Branding & Logo</h1>
        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

    </div>
    <div className='bg-indigo-100 flex-col justify-items-start w-2xs grid gap-5 m-2.5 p-3.5 rounded-2xl'> 
        <img src="public/feather-pen 1.png" alt="card1" />
        <h1 className='text-black text-2xl '> UI & UX Design</h1>
        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

    </div>
    <div className='bg-indigo-100 flex-col justify-items-start w-2xs grid gap-5 m-2.5 p-3.5 rounded-2xl'> 
        <img src="public/code.png" alt="card1" />
        <h1 className='text-black text-2xl '>Webflow Development</h1>
        <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

    </div>
    
   </div>
   </div>
   </>
  )
}

export default Card
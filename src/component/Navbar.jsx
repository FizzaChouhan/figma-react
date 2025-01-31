import React from 'react'

const Navbar = () => {
  return (
  <>
  <nav className='flex justify-between items-center  ...'>
    <img src="public/Logo.png" alt="logo" />
    <ul className='flex justify-around gap-4'>
        <li><a href="#" className='hover:text-violet-500'>Home</a></li>
        <li><a href="#" className='hover:text-violet-500'>Portfolio</a></li>
        <li><a href="#" className='hover:text-violet-500'>About me</a></li>
        <li><a href="#" className='hover:text-violet-500'>Testamonials</a></li>
        </ul>
        <button className="text-purple-500 border-purple-500/100 border-2 m-8 p-2 hover:bg-violet-500  hover:text-white">
  Contact Me
</button>
  </nav>
  </>
  )
}

export default Navbar
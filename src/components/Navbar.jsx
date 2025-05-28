import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-900 p-4 flex justify-between px-20'>
        <h1 className='text-white font-bold text-3xl'>Tailwind Todo</h1>
        <button className='bg-sky-300 px-4 py-2 rounded-3xl font-semibold'>Ligth Mode</button>
      </nav>
  )
}

export default Navbar

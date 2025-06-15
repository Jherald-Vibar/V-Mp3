import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
         <div className='flex items-center gap-2'>
            <svg className='bg-black p-2 rounded-2xl cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4m0 0l6-6m-6 6l6 6"></path></svg>
            <svg className='bg-black p-2 rounded-2xl cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg>
         </div>
         <div className='flex items-center gap-4'>
            <p className='bg-white text-black p-2 font-semibold text-sm rounded-full hidden md:block'>Explore Premium</p>
            <p className='bg-black p-2 text-white text-sm rounded-full hidden cursor-pointer md:block'>Install App</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>J</p>
         </div>
      </div>
      <div className='flex items-center gap-2 mt-4'>
         <p className='bg-white text-black rounded-full px-4 py-1 cursor-pointer'>All</p>
         <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
         <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
      </div>
    </>
  )
}

export default Navbar

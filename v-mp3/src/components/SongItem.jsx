import React from 'react'

const SongItem = ({song}) => {
  return (
    <div key={song.id} className='min-w-[180px] px-3 p-2 rounded cursor-pointer hover:bg-[#ffffff26] '>
        <img className='rounded' src={song.image} width={'190px'} alt="" />
        <p className='font-bold text-white mt-2 mb-1'>{song.name}</p>
        <p className='font-semibold text-sm text-slate-200'>{song.desc}</p>
    </div>
  )
}

export default SongItem

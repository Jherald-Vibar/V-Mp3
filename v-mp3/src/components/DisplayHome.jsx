import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { songAlbumData, songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
   <>
    <Navbar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
            {songAlbumData.map((album) => (
                <AlbumItem key={album.id} album={album} />
            ))}
        </div>
    </div>
     <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hit</h1>
        <div className='flex overflow-auto'>
            {songsData.map((song) => (
                <SongItem key={song.id} song={song} />
            ))}
        </div>
    </div>
   </>
  )
}

export default DisplayHome

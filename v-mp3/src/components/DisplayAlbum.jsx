import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom' 
import { songAlbumData } from '../assets/assets';


const DisplayAlbum = () => {
  
   const {id} = useParams();

   const albumData = songAlbumData.find(album => album.id == id);
    
  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
       <img className='w-48 rounded' src={albumData.image} alt="" />
       <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4 className=''>{albumData.desc}</h4>
            <p className='mt-1'>
                <img src="" alt="" />
            </p>
       </div>
    </div>
    </>
  )
}

export default DisplayAlbum

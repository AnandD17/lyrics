import React, {useEffect, useState} from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { SearchBar } from '../components/SearchBar'
import carousol from './../assets/car.jpg'
import { BASE_URL } from '../utils/apiConstant'
import axios from 'axios'
import music from './../assets/music.jpg'


export const Home = () => {
  
  const [songs,setSongs] = useState([])
  const [albums,setAlbums] = useState([])

  

  const  getData = async()=>{
    const data =  await axios.get(`${BASE_URL}/homepage`)
    if(data) {
      setSongs(data.data.data.recent_songs);
      setAlbums(data.data.data.recent_albums)
    }
    console.log(data);
  }
  useEffect(()=> {
    getData();
  },[]);
  



  return (
    <div className='Home h-full w-full overflow-hidden'>

      <SearchBar />

      <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 pb-[120px]'>
        <div>
          <img src={carousol} alt="carousol" height={430} className='h-[430px] w-full' />
        </div>
        <div className='flex justify-start my-4'>
          <ButtonHeader title={'Recently Added'} />
        </div>
        <div className="grid gap-3 grid-cols-5 mb-5">
          {songs.map((song) => (
            <div className="col-span-1" key={songs.id}>
              <MusicThumbnail name={song.title} artist={song.artist} img={song.poster?song.poster:music} />
            </div>
          ))}
        </div>
        <div className='flex justify-start mb-4'>
          <ButtonHeader title={'Latest Albums'} />
        </div>
        <div className="grid gap-3 grid-cols-5 mb-5">
          {albums.map((song) => (
            <div className="col-span-1" key={songs.id}>
              <MusicThumbnail name={song.title} artist={song.album} img={song.poster?song.poster:music} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

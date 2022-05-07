import React, {useEffect, useState} from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { SearchBar } from '../components/SearchBar'
import carousol from './../assets/car.jpg'
import { BASE_URL } from '../utils/apiConstant'
import axios from 'axios'
import music from './../assets/music.jpg'
import LoadingBar from "react-top-loading-bar";



export const Home = (props) => {

  
  const [songs,setSongs] = useState([])
  const [albums,setAlbums] = useState([])
  const [progress,setProgress] = useState(0);
  const [opacity,setOpacity] = useState('');

  

  const  getData = async()=>{
    setProgress(50)
    setOpacity('opacity-50');
    const data =  await axios.get(`${BASE_URL}/homepage`)
    if(data) {
      setProgress(100)
      setOpacity('');
      console.log(data);
      setSongs(data.data.data.recent_songs);
      setAlbums(data.data.data.recent_albums);
    }
  }
  useEffect(()=> {
    getData();
  },[]);
  



  return (
    <div className={`Home h-full w-full overflow-hidden dark:bg-[#2C2C2C] ${opacity}`}>
    <LoadingBar
    progress={progress}
    height={3}
    color="#00C637"
    />

      <div>
      <SearchBar toggleSideBar={()=>{props.toggleSideBar()}}/>
      </div>

      <div className={`overflow-auto h-[100%] bg-[#FBFBFB] dark:bg-[#2C2C2C] px-6 pt-5 pb-[120px]`}>
        <div>
        <div>
          <img src={carousol} alt="carousol" height={430} className='h-[430px] w-full' />
        </div>
        <div className='flex justify-start my-4'>
          <ButtonHeader title={'Recently Added'} />
        </div>
        </div>
        <div className="h-auto">
        <div className="grid gap-3 grid-cols-5 mb-5">
          {songs.map((song) => (
            <div className="col-span-1" key={songs.id}>
              <MusicThumbnail name={song.title} artist={song.artist} img={song.poster?song.poster:music} slug={song.slug} {...props}/>
            </div>
          ))}
        </div>
        <div className='flex justify-start mb-4'>
          <ButtonHeader title={'Latest Albums'} />
        </div>
        <div className="grid gap-3 grid-cols-5 mb-5">
          {albums.map((song) => (
            <div className="col-span-1" key={songs.id}>
              <MusicThumbnail name={song.title} artist={song.album} img={song.poster?song.poster:music} slug={song.slug} {...props} />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

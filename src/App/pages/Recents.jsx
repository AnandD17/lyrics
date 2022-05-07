import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { Pagination } from '../components/Pagination'
import { BASE_URL } from '../utils/apiConstant'
import { SearchBar } from '../components/SearchBar'
import music from './../assets/music.jpg'
import LoadingBar from "react-top-loading-bar";

export const Recents = (props) => {
  const [songs,setSongs] = useState([])
  const [progress,setProgress] = useState(0);
  const [display,setDisplay] = useState('')
  const [opacity,setOpacity] = useState('');
  

  const  getData = async()=>{
    setDisplay(false)
    setProgress(75)
    setOpacity('opacity-50')
    const data =  await axios.get(`${BASE_URL}/recent_uploads?page=1`)
    if(data) {
      setOpacity('')
      setProgress(100)
      setSongs(data.data.data);
      setDisplay(true)
    }
    console.log(data);
  }
  useEffect(()=> {
    getData();
  },[]);

  return (
    <div className={`Recents h-full w-full overflow-hidden ${opacity} dark:bg-[#2C2C2C]`}>
      <LoadingBar
    progress={progress}
    height={3}
    color="#00C637"
    />

      <SearchBar toggleSideBar={()=>{props.toggleSideBar()}}/>

      <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 pb-[120px] dark:bg-[#2C2C2C]'>
        <div className='flex justify-start mb-4'>
          <ButtonHeader title={'Recently Added'}/>
        </div>
        
        <div className="grid gap-3 grid-cols-5">
        {songs.map((song) => (
            <div className="col-span-1" key={song.id}>
              <MusicThumbnail name={song.title} artist={song.artist} img={song.poster?song.poster:music} slug={song.slug} {...props}/>
            </div>
          ))}
        </div>
        <div className='mt-5 '>
          <Pagination display={display}/>
        </div>
      </div>
    </div>
  )
}

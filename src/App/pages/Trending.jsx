import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { Pagination } from '../components/Pagination'
import { BASE_URL } from '../utils/apiConstant'
import { SearchBar } from '../components/SearchBar'
import music from './../assets/music.jpg'
import LoadingBar from "react-top-loading-bar";


export const Trending = () => {
  const [songs,setSongs] = useState([])
  const [progress,setProgress] = useState(0);

  

  const  getData = async()=>{
    setProgress(75)
    const data =  await axios.get(`${BASE_URL}/trendings`)
    if(data) {
      setProgress(100)
      setSongs(data.data.data);
      console.log(data);
    }
    console.log(data);
  }
  useEffect(()=> {
    getData();
  },[]);

  return (
    <div className='Trending h-full w-full overflow-hidden'>
    <LoadingBar
    progress={progress}
    height={3}
    color="#00C637"
    />

      <SearchBar/>

      <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 pb-[120px]'>
        <div className='flex justify-start mb-4'>
          <ButtonHeader title={'Trending'}/>
        </div>
        <div className="grid gap-3 grid-cols-5">
        {songs.map((song) => (
            <div className="col-span-1" key={song.id}>
              <MusicThumbnail name={song.title} artist={song.artist} img={song.poster?song.poster:music}/>
            </div>
          ))}
        </div>
        <div className='mt-5 '>
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

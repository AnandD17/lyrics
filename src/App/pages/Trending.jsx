import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { Pagination } from '../components/Pagination'
import { BASE_URL } from '../utils/apiConstant'
import { SearchBar } from '../components/SearchBar'
import music from './../assets/lyrics.png'
import LoadingBar from "react-top-loading-bar";
import { Helmet } from 'react-helmet';



export const Trending = (props) => {
  const [songs,setSongs] = useState([])
  const [progress,setProgress] = useState(0);
  const [display,setDisplay] = useState('')
  const [opacity,setOpacity] = useState('');

  

  

  const  getData = async()=>{
    setDisplay(false)
    setProgress(75)
    setOpacity('opacity-50')
    const data =  await axios.get(`${BASE_URL}/trendings`)
    if(data) {
      setOpacity('')
      setProgress(100)
      setSongs(data.data.data);
      setDisplay(true)
      // console.log(data);
    }
    // console.log(data);
  }
  useEffect(()=> {
    getData();
    // console.log('trigger only once');
  },[]);

  return (
    <div className={`Trending h-full w-full overflow-hidden ${opacity} dark:bg-[#2C2C2C]`}>

      <Helmet>
        <title> Trending | Revaltronics</title>
        <meta property="og:title" content="RevAltronics" />
        <meta property="og:description" content="Download latest lyrics in CRT format or you can view them online." />
        <meta property="og:image" content="https://revaltronics.com/static/media/logo.c52891f966eb2c3861ca.png" />
      </Helmet>
    <LoadingBar
    progress={progress}
    height={3}
    color="#00C637"
    />

    
      <div className='lg:h-[10%] sm:h-[30%] h-[23%]'>

      <SearchBar toggleSideBar={()=>{props.toggleSideBar()}}/>
      </div>

      
      <div className={`overflow-auto lg:h-[90%] sm:h-[70%] h-[77%] bg-[#FBFBFB] px-6 pt-5 pb-5 dark:bg-[#2C2C2C] ${display===false?'hidden':''}`}>
        <div className='flex justify-start mb-4'>
          <ButtonHeader title={'Trending'}/>
        </div>
        <div className="grid gap-3 gap-y-[20px] grid-cols-2 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2">
        {songs.map((song) => (
            <div className="col-span-1" key={song.id}>
              <MusicThumbnail name={song.title} artist={song.artist} img={song.poster?song.poster:music} slug={song.slug} {...props}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

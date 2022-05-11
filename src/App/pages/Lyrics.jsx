import React, { useEffect, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { ButtonHeader } from '../components/ButtonHeader'
import music from './../assets/music.jpg'
import axios from 'axios'
import { BASE_URL } from '../utils/apiConstant'
import LoadingBar from "react-top-loading-bar";
import { useLocation } from 'react-router-dom'

export const Lyrics = (props) => {

    const [info,setInfo] = useState([]);
    const [tabs,setTabs] = useState('crt');
    const [progress,setProgress] = useState(0);
    const [opacity,setOpacity] = useState('');
    const [lyricsName , setLyricsName] = useState('juice-wrld-hide-by-juice-wrld-seezyn')
    const location = useLocation();


    const getData = async() =>{
        setOpacity('opacity-50')
        console.log('location is');
        console.log(location);
        setProgress(50)
        const data = await axios.get(`${BASE_URL}${location.pathname}`);
        if(data){
            setProgress(100)
            console.log(data);
            setOpacity('')
            setInfo(data.data.data[0]);
            setTabs(info.lyrics_crt_file!==''?'crt':info.lyrics!==''?'text':'NA')
        }

    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div className={`Lyrics h-full w-full overflow-hidden ${opacity} dark:bg-[#2C2C2C]`}>
        <LoadingBar
    progress={progress}
    height={3}
    color="#00C637"
    />

            <SearchBar toggleSideBar={()=>{props.toggleSideBar()}}/>

            <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 dark:bg-[#2C2C2C] lg:pb-[10px] pb-[180px]'>
                <div className='flex justify-start my-4 mb-10'>
                    <ButtonHeader title={'Meet me at our spot'} />
                </div>
                <div className="grid gap-4 grid-cols-4 dark:bg-[#2C2C2C] dark:text-[#FAF9F6] bg-white h-auto">
                    <div className="col-span-4 h-auto sm:col-span-1 pr-2">
                        <img src={info.poster?info.poster:music} alt="music" className='h-[215px] w-full rounded-[5px]' />
                        <div className='w-[75%] bg-[#F6F6F6] h-[3px] m-auto my-5 mt-7'></div>
                        <div className='flex flex-col gap-2'>
                            <div className='text-sm text-left pl-5'>
                                <div>{info.title}</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Artist</div>
                                <div className='opacity-75 font-light'>{info.artist}</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Album</div>
                                <div className='opacity-75 font-light'>{info.album}</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Year</div>
                                <div className='opacity-75 font-light'>{info.year}</div>
                            </div>
                            {info.lyrics_crt_file&&tabs==='crt'&&<div className='w-full'>
                                <a href={`${BASE_URL}/download${location.pathname.slice(7)}`} className='bg-[#00C637] px-4 text-white py-2 w-[100%] rounded-[5px]'>Download Lyrics</a>
                            </div>}
                            
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-center">
                        <div className='flex flex-wrap gap-4'>
                            <div onClick={()=>{setTabs('crt')}}>
                                {info.lyrics_crt_file&&<ButtonHeader title={'CRT File'}/>}
                            </div>
                            <div onClick={()=>{setTabs('text')}}>
                                {info.lyrics&&<ButtonHeader title={'Text'} />}
                            </div>
                            {tabs==='NA'&&<ButtonHeader title={'No Lyrics and CRT'} />}
                        
                        
                        </div>
                        
                        {tabs==='crt'&&<div className='whitespace-pre-line text-left pb-[100px]'>
                            <div className=''>
                            {info.lyrics_crt_file}

                            </div>
                        </div>}
                        {tabs==='text'&&<div className='whitespace-pre text-left pb-[100px]'>
                            {info.lyrics}
                        </div>}
                        
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

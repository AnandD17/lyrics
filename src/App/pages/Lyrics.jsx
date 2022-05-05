import React, { useEffect, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { ButtonHeader } from '../components/ButtonHeader'
import music from './../assets/music.jpg'
import axios from 'axios'
import { BASE_URL } from '../utils/apiConstant'
import LoadingBar from "react-top-loading-bar";

export const Lyrics = (props) => {

    const [song,setSong] = useState('plan-a-by-paulo-londra')
    const [info,setInfo] = useState([]);
    const [progress,setProgress] = useState(0);

    const getData = async() =>{
        setProgress(50)
        const data = await axios.get(`${BASE_URL}/lyrics/${props.name}`);
        if(data){
            setProgress(100)
            setInfo(data.data.data[0]);
        }

    }
    useEffect(()=>{
        getData();
    },[])

    console.log(info);
  return (
    <div className='Lyrics h-full w-full overflow-hidden'>
        <LoadingBar
    progress={progress}
    height={3}
    color="#00C637"
    />

            <SearchBar />

            <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 pb-[200px]'>
                <div className='flex justify-start my-4 mb-10'>
                    <ButtonHeader title={'Meet me at our spot'} />
                </div>
                <div className="grid gap-4 grid-cols-4 h-full bg-white">
                    <div className="col-span-4 h-auto sm:col-span-1">
                        <img src={music} alt="music" className='h-[215px] w-full rounded-[5px]' />
                        <div className='w-[75%] bg-[#F6F6F6] h-[3px] m-auto my-5 mt-7'></div>
                        <div className='flex flex-col gap-2'>
                            <div className='text-sm text-left pl-5'>
                                <div>Meet me at our spot</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Artist</div>
                                <div className='opacity-75 font-light'>Willow Smith</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Album</div>
                                <div className='opacity-75 font-light'>The Anxiety</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Year</div>
                                <div className='opacity-75 font-light'>2021</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-center">
                        <div className='flex gap-4'>
                        {info.lyrics_crt_file&&<ButtonHeader title={'CRT File'} />}
                        {info.lyrics&&<ButtonHeader title={'Text'} />}
                        
                        
                        </div>
                        
                        <div className='whitespace-pre text-left overflow-auto pb-[100px]'>
                            {info.lyrics_crt_file}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

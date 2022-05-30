import React, { useEffect, useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { ButtonHeader } from '../components/ButtonHeader'
import music from './../assets/music.jpg'
import logo from './../assets/lyrics.png'
import axios from 'axios'
import { BASE_URL } from '../utils/apiConstant'
import LoadingBar from "react-top-loading-bar";
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';


export const Lyrics = (props) => {

    const [info, setInfo] = useState([]);
    const [tabs, setTabs] = useState('crt');
    const [progress, setProgress] = useState(0);
    const [opacity, setOpacity] = useState('');
    const [lyricsName, setLyricsName] = useState('juice-wrld-hide-by-juice-wrld-seezyn')
    const location = useLocation();
    const [display, setDisplay] = useState(false);



    const getData = async () => {
        setOpacity('opacity-50')
        setDisplay('hidden')
        console.log('location is');
        console.log(location);
        setProgress(50)
        const data = await axios.get(`${BASE_URL}${location.pathname}`);
        if (data) {
            setProgress(100)
            console.log(data);
            setOpacity('')
            setDisplay('')
            setInfo(data.data.data[0]);
            setTabs(info.lyrics_crt_file !== '' ? 'crt' : info.lyrics !== '' ? 'text' : 'NA')
        }

    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className={`Lyrics h-full w-full overflow-hidden ${opacity} dark:bg-[#2C2C2C]`}>


            <Helmet>
                <title> {`${info.title} lyrics by ${info.artist}`} | Revaltronics</title>
            </Helmet>


            <LoadingBar
                progress={progress}
                height={3}
                color="#00C637"
            />

            <div className="lg:h-[10%] h-[30%]">

            <SearchBar toggleSideBar={() => { props.toggleSideBar() }} />
            </div>

            <div className={`overflow-auto lg:h-[90%] h-[70%] bg-[#FBFBFB] px-6 pt-5 dark:bg-[#2C2C2C]  ${display}`}>
                <div className='flex justify-start my-4 mb-10'>
                    <ButtonHeader title={info.title} />
                </div>
                <div className="grid gap-4 p-5 grid-cols-10 dark:bg-[#2C2C2C] dark:text-[#FAF9F6] bg-white pb-0 h-auto">
                    <div className="col-span-10 h-auto sm:col-span-2 pr-2">
                        <img src={info.poster ? info.poster : logo} alt="music" className='aspect-square w-full rounded-[5px]' />
                        <div className='w-[75%] bg-[#00C637] h-[3px] m-auto my-5 mt-7'></div>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='text-sm text-left'>
                                <div>{info.title}</div>
                            </div>
                            <div className='text-sm text-left'>
                                <div>Artist</div>
                                <div className='opacity-75 font-light'>{info.artist}</div>
                            </div>
                            <div className='text-sm text-left '>
                                <div>Album</div>
                                <div className='opacity-75 font-light'>{info.album}</div>
                            </div>
                            <div className='text-sm text-left'>
                                <div>Year</div>
                                <div className='opacity-75 font-light'>{info.year}</div>
                            </div>
                            {info.lyrics_crt_file && tabs === 'crt' &&
                                <a href={`${BASE_URL}/download${location.pathname.slice(7)}`} className='bg-[#00C637] px-4 text-white py-2 mx-0 rounded-[5px]'>Download Lyrics</a>
                            }

                        </div>
                    </div>
                    <div className="col-span-10 h-full overflow-auto sm:col-span-8 text-center">
                        <div className='flex flex-wrap gap-4'>
                            <div onClick={() => { setTabs('crt') }}>
                                {info.lyrics_crt_file && <ButtonHeader title={'CRT File'} />}
                            </div>
                            <div onClick={() => { setTabs('text') }}>
                                {info.lyrics && <ButtonHeader title={'Text'} />}
                            </div>
                            {tabs === 'NA' && <ButtonHeader title={'No Lyrics and CRT'} />}


                        </div>

                        {tabs === 'crt' && <div className='overflow-auto whitespace-pre-line text-left pb-[100px]'>
                            <div className=''>
                                {info.lyrics_crt_file}

                            </div>
                        </div>}
                        {tabs === 'text' && <div className='whitespace-pre text-left pb-[100px]'>
                            {info.lyrics}
                        </div>}


                    </div>
                </div>
            </div>
        </div>
    )
}

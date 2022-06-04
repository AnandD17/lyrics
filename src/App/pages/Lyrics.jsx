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
import { MusicThumbnail } from '../components/MusicThumbnail'


export const Lyrics = (props) => {

    const [info, setInfo] = useState([]);
    const [tabs, setTabs] = useState('crt');
    const [progress, setProgress] = useState(0);
    const [opacity, setOpacity] = useState('');
    const location = useLocation();
    const [display, setDisplay] = useState(false);
    const [additional, setAdditional] = useState();



    const getData = async () => {
        setOpacity('opacity-50')
        setDisplay('hidden')
        // console.log('location is');
        // console.log(location);
        setProgress(50)
        const data = await axios.get(`${BASE_URL}${location.pathname}`);
        if (data) {
            setProgress(100)
            // console.log(data);
            setOpacity('')
            setDisplay('')
            setInfo(data.data.data[0]);
            setTabs(info.lyrics_crt_file !== '' ? 'crt' : info.lyrics !== '' ? 'text' : 'NA')
            setAdditional(data.data.additional);
            console.log(data.data.additional.by_album);
        }

    }
    useEffect(() => {
        getData();
    }, [location.pathname])
    return (
        <div className={`Lyrics h-full w-full overflow-hidden ${opacity} dark:bg-[#2C2C2C]`}>


            <Helmet>
                <title> {`${info.title} lyrics by ${info.artist}`} | Revaltronics</title>
                <meta property="og:title" content={info.title} />
                <meta property="og:description" content={`Download Free ${info.title} ${info.artist !== "" ? 'by' + info.artist : ''}`} />
                <meta property="og:image" content={info.poster ? info.poster : logo} />
            </Helmet>


            <LoadingBar
                progress={progress}
                height={3}
                color="#00C637"
            />

            <div className="lg:h-[10%] sm:h-[30%] h-[23%]">

                <SearchBar toggleSideBar={() => { props.toggleSideBar() }} />
            </div>

            <div className={`overflow-auto lg:h-[90%] sm:h-[70%] h-[77%] bg-[#FBFBFB] px-6 pt-5 dark:bg-[#2C2C2C]  ${display}`}>
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
                                <a href={`${BASE_URL}/download${location.pathname.slice(7)}`} className='bg-[#00C637] px-1 text-white py-2 mx-0 rounded-[5px]'>Download Lyrics</a>
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
                {additional?
                <div className="w-full">
                {additional.by_author.length!==0 && additional.by_author?<>
                    <div className='flex justify-start my-4'>
                        <ButtonHeader title={'More From '+ info.artist} />
                    </div>
                    <div className='h-auto w-full  overflow-auto'>
                        <div className="grid gap-3  gap-y-[20px] grid-cols-2 sm:grid-cols-5 sm:w-full relative overflow-auto mb-5 py-3">
                            {additional.by_author.map((song) => {return(
                                <div className="col-span-1 w-full" key={song.id}>
                                    <MusicThumbnail name={song.title} artist={song.artist} img={song.poster ? song.poster : music} slug={song.slug} {...props} />
                                </div>
                            )})}
                        </div>
                    </div>
                    </>:null}
                    {additional.by_album.length!==0 && additional.by_album?<>
                    <div className='flex justify-start my-4'>
                        <ButtonHeader title={'More Lyrics From ' + info.album} />
                    </div>
                    <div className='h-auto w-full  overflow-auto'>
                        <div className="grid gap-3  gap-y-[20px] grid-cols-2 sm:grid-cols-5 sm:w-full relative overflow-auto mb-5 py-3">
                            {additional.by_album.map((song) => { return(
                                <div className="col-span-1 w-full" key={song.id}>
                                    <MusicThumbnail name={song.title} artist={song.artist} img={song.poster ? song.poster : music} slug={song.slug} {...props} />
                                </div>
                            )})}
                        </div>
                    </div></>:null}
                    {additional.by_random.length!==0 && additional.by_random?<>
                    <div className='flex justify-start my-4'>
                        <ButtonHeader title={'You may also like'} />
                    </div>
                    <div className='h-auto w-full  overflow-auto'>
                        <div className="grid gap-3  gap-y-[20px] grid-cols-2 sm:grid-cols-5 sm:w-full relative overflow-auto mb-5 py-3">
                            {additional.by_random.map((song) => {return(
                                <div className="col-span-1 w-full" key={song.id}>
                                    <MusicThumbnail name={song.title} artist={song.artist} img={song.poster ? song.poster : music} slug={song.slug} {...props} />
                                </div>
                            )})}
                        </div>
                    </div>
                    </>:null}
                    </div>
                :null}
                
            </div>
        </div>
    )
}

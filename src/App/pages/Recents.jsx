import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { BASE_URL } from '../utils/apiConstant'
import { SearchBar } from '../components/SearchBar'
// import { Pagination } from '../components/Pagination'
import music from './../assets/lyrics.png'
import PaginationItem from '@mui/material/PaginationItem';
import LoadingBar from "react-top-loading-bar";
import { Pagination } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}


export const Recents = (props) => {
  const location = useLocation();
  const [songs, setSongs] = useState([])
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState(false)
  const [opacity, setOpacity] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(1);
  const { height, width } = useWindowDimensions();

  console.log(page);

  const handleChange = (e, value) => {
    setPage(value);
  };



  const getData = async () => {
    setDisplay(false)
    setProgress(75)
    setOpacity('opacity-50')
    const data = await axios.get(`${BASE_URL}/recent_uploads?page=${page}`)
    if (data) {
      setOpacity('')
      setProgress(100)
      setSongs(data.data.data);
      setPerPage(parseInt(data.data.additional.total/50))
      setDisplay(true)
    }
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className={`Recents h-full w-full overflow-hidden ${opacity} dark:bg-[#2C2C2C]`}>

      <Helmet>
        <title> Recents | Revaltronics</title>
      </Helmet>
      <LoadingBar
        progress={progress}
        height={3}
        color="#00C637"
      />

      <div className='lg:h-[10%] h-[30%]'>

      <SearchBar toggleSideBar={() => { props.toggleSideBar() }} />
      </div>

      <div className={`overflow-auto lg:h-[90%] h-[70%] bg-[#FBFBFB] px-6 pt-5 pb-[38px] dark:bg-[#2C2C2C] ${display === false ? 'hidden' : ''}`}>
        <div className='flex justify-start mb-4'>
          <ButtonHeader title={'Recently Added'} />
        </div>

        <div className="grid gap-3 gap-y-[20px] grid-cols-2 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2">
          {songs.map((song) => (
            <div className="col-span-1" key={song.id}>
              <MusicThumbnail name={song.title} artist={song.artist} img={song.poster ? song.poster : music} slug={song.slug} {...props} />
            </div>
          ))}
        </div>
        <div className={`mt-5 flex justify-center h-auto dark:text-light text-black ${display === false ? 'hidden' : ''}`}>
          {/* <Pagination count={10} color="success" variant="outlined" page={page} classes={{color:'inherit'}} size={'small'} onChange={handleChange}/> */}
          {/* <Pagination changePage={(page) => { setPage(page) }} page={page} /> */}
          <Pagination
             color="success" variant="outlined" page={page} count={perPage} classes={{color:'inherit',width:'inherit'}} onChange={handleChange} size={width<800?'small':''}
              renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            color="palette.success.light"
            variant="text"
            classes={{color:'white'}}
            {...item}
          />
        )}
      />
        </div>
      </div>
    </div>
  )
}

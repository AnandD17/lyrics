import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { Pagination } from '../components/Pagination'
import { BASE_URL } from '../utils/apiConstant'
import { SearchBar } from '../components/SearchBar'
import music from './../assets/lyrics.png'
import LoadingBar from "react-top-loading-bar";
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet';


export const SearchLyrics = (props) => {
  const [songs, setSongs] = useState([])
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState('')
  const [page, setPage] = useState(1);
  const [opacity, setOpacity] = useState('');
  const location = useLocation();
  const [totalPage,setTotalPage] = useState();

  const getData = async () => {
    console.log(location);
    setDisplay('hidden')
    setProgress(75)
    setOpacity('opacity-50')
    const data = await axios.get(`${BASE_URL}${location.pathname}?page=${page}`)
    if (data) {
      setOpacity('')
      setProgress(100)
      setSongs(data.data.data);
      setTotalPage(Math.ceil(data.data.additional.total/50))
      setDisplay('')
    }
  }
  useEffect(() => {
    getData();
  }, [location.pathname,page]);

  return (
    <div className={`Recents h-full w-full overflow-hidden ${opacity} dark:bg-[#2C2C2C]`}>


      <Helmet>
        <title>{`${location.pathname.slice(8).replace(/%20/g, ' ')} | Revaltronics`}</title>
      </Helmet>
      <LoadingBar
        progress={progress}
        height={3}
        color="#00C637"
      />



      <div className='lg:h-[10%] sm:h-[30%] h-[23%]'>

        <SearchBar toggleSideBar={() => { props.toggleSideBar() }} title={location.pathname.slice(8).replace(/%20/g, ' ')} />
      </div>

      <div className={`overflow-auto lg:h-[90%] sm:h-[70%] h-[77%] bg-[#FBFBFB] px-6 pt-5 pb-5 dark:bg-[#2C2C2C] ${display}`}>
        {songs.length != 0 ?
          <div className="grid gap-3 grid-cols-2 gap-y-[20px] lg:grid-cols-5 sm:grid-cols-3 grid-cols-2">
            {songs.map((song) => (
              <div className="col-span-1" key={song.id}>
                <MusicThumbnail name={song.title} artist={song.artist} img={song.poster ? song.poster : music} slug={song.slug} {...props} />
              </div>
            ))}
          </div> :
          <div className="flex justify-start">
            <ButtonHeader title='No results found' />
          </div>
        }

        {songs.length != 0 ?
          <div className={`mt-5 flex justify-center h-auto dark:text-light text-black ${display}`}>
            {/* <Pagination /> */}
            <Pagination changePage={(page) => { setPage(page) }} page={page} totalPage={totalPage}/>
          </div> : null}

      </div>
    </div>
  )
}

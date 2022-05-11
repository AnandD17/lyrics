import React, { useEffect, useState } from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { SearchBar } from '../components/SearchBar'
import carousol from './../assets/car.jpg'
import { BASE_URL } from '../utils/apiConstant'
import axios from 'axios'
import music from './../assets/music.jpg'
import LoadingBar from "react-top-loading-bar";



export const Home = (props) => {


  const [songs, setSongs] = useState([])
  const [albums, setAlbums] = useState([])
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState('');



  const getData = async () => {
    setProgress(50)
    setOpacity('opacity-50');
    const data = await axios.get(`${BASE_URL}/homepage`)
    if (data) {
      setProgress(100)
      setOpacity('');
      console.log(data);
      setSongs(data.data.data.recent_songs);
      setAlbums(data.data.data.recent_albums);
    }
  }
  useEffect(() => {
    getData();
  }, []);




  return (
    <div className={`Home h-full w-full overflow-hidden dark:bg-[#2C2C2C] ${opacity}`}>
      <LoadingBar
        progress={progress}
        height={3}
        color="#00C637"
      />

      <div>
        <SearchBar toggleSideBar={() => { props.toggleSideBar() }} />
      </div>

      <div className={`overflow-y-auto overflow-x-hidden h-[100%] bg-[#FBFBFB] dark:bg-[#2C2C2C] px-6 pt-5 lg:pb-[120px] pb-[250px]`}>
        <div>
          <div>
            <img src={carousol} alt="carousol" height={430} className='w-full' />
          </div>
        </div>

        <div className="h-auto w-full ">
          <div className='flex justify-start my-4'>
            <ButtonHeader title={'Recently Added'} />
          </div>
          <div className='h-auto w-full  overflow-auto'>
            <div className="grid gap-3 grid-cols-5 sm:w-full w-[220vw] relative overflow-auto mb-5 ">
              {songs.map((song) => (
                <div className="col-span-1 w-full" key={songs.id}>
                  <MusicThumbnail name={song.title} artist={song.artist} img={song.poster ? song.poster : music} slug={song.slug} {...props} />
                </div>
              ))}
            </div>
          </div>
          {/* <div className="sm:grid flex gap-3 overflow-auto w-full grid-cols-5 min-w-full mb-5 ">
          {songs.map((song) => (
            <div className="col-span-1 w-full" key={songs.id}>
              <MusicThumbnail name={song.title} artist={song.artist} img={song.poster?song.poster:music} slug={song.slug} {...props}/>
            </div>
          ))}
        </div> */}
         <div className='flex justify-start my-4'>
            <ButtonHeader title={'Recently Added'} />
          </div>
          <div className='h-auto w-full  overflow-auto'>
            <div className="grid gap-3 grid-cols-5 sm:w-full w-[220vw] relative overflow-auto mb-5 ">
              {albums.map((song) => (
                <div className="col-span-1 w-full" key={songs.id}>
                  <MusicThumbnail name={song.title} artist={song.artist} img={song.poster ? song.poster : music} slug={song.slug} {...props} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

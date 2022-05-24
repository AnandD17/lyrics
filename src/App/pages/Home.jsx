import React, { useEffect, useState } from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { SearchBar } from '../components/SearchBar'
import carousol from './../assets/car.jpg'
import { BASE_URL } from '../utils/apiConstant'
import axios from 'axios'
import music from './../assets/lyrics.png'
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { Helmet } from 'react-helmet';



export const Home = (props) => {

  const navigate = useNavigate();
  const [songs, setSongs] = useState([])
  const [albums, setAlbums] = useState([])
  const [slider, setSlider] = useState([])
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState('');
  const [display, setDisplay] = useState(false);



  const getData = async () => {
    setProgress(50)
    setOpacity('opacity-50');
    const data = await axios.get(`${BASE_URL}/homepage`)
    if (data) {
      setProgress(100)
      setOpacity('');
      console.log(data);
      setDisplay(true)
      setSongs(data.data.data.recent_songs);
      setAlbums(data.data.data.recent_albums);
      setSlider(data.data.data.sliders);
      localStorage.setItem('slider', JSON.stringify(data.data.data.sliders))
    }
  }
  useEffect(() => {
    getData();
  }, []);




  return (
    <div className={`Home h-full w-full max-w-full overflow-hidden dark:bg-[#2C2C2C] ${opacity}`}>
      <Helmet>
        <title>Home | Revaltronics</title>
      </Helmet>
      <LoadingBar
        progress={progress}
        height={3}
        color="#00C637"
      />

      <div>
        <SearchBar toggleSideBar={() => { props.toggleSideBar() }} />
      </div>

      <div className={`overflow-y-auto overflow-x-hidden h-[100%] bg-[#FBFBFB] w-full dark:bg-[#2C2C2C] px-6 pt-5 lg:pb-[70px] pb-[250px] ${display===false?'hidden':''}`}>

        {/* <OwlCarousel 
          className="owl-theme"  
          loop={true}
          autoplayTimeout={5000}
          autoplay
          center={true}
          items = {2}
          margin={8} > 
          {slider.map((song,key) => {
              return(<div key={song.slug} onClick={()=>navigate(`/lyrics/${song.slug}`)}  className="item cursor-pointer cover"><h4><img src={song.poster===''?carousol:song.poster} alt="Image not found" className=' aspect-[4/2]  w-full' /></h4></div>)
          })}
      </OwlCarousel>   */}

      {/* Carousol Items */}
      {/* {slider.map((song,key) => {
              return(<div key={song.slug} onClick={()=>navigate(`/lyrics/${song.slug}`)}  className="item cursor-pointer cover"><h4><img src={song.poster===''?carousol:song.poster} alt="Image not found" className=' aspect-[4/2]  w-full' /></h4></div>)
          })} */}

        <div className="h-auto w-full ">
        <div className='flex justify-start my-4'>
            <ButtonHeader title={'Recently added'} />
          </div>
          <div className='h-auto w-full  overflow-auto'>
            <div className="grid gap-3 grid-cols-5 sm:w-full w-[220vw] relative overflow-auto mb-5 py-3">
              {songs.map((song) => (
                <div className="col-span-1 w-full" key={songs.id}>
                  <MusicThumbnail name={song.title} artist={song.artist} img={song.poster ? song.poster : music} slug={song.slug} {...props} />
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-start my-4'>
            <ButtonHeader title={'Latest Albums'} />
          </div>
          <div className='h-auto w-full  overflow-auto'>
            <div className="grid gap-3 grid-cols-5 sm:w-full w-[220vw] relative overflow-auto mb-5 py-3">
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

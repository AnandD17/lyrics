import React, { useEffect, useState } from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { SearchBar } from '../components/SearchBar'
import carousol from './../assets/car.jpg'
import { BASE_URL } from '../utils/apiConstant'
import axios from 'axios'
import music from './../assets/music.jpg'
import LoadingBar from "react-top-loading-bar";
import { useNavigate } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 



export const Home = (props) => {

  const navigate = useNavigate();
  const [songs, setSongs] = useState([])
  const [albums, setAlbums] = useState([])
  const [slider, setSlider] = useState([])
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
      setSlider(data.data.data.sliders);
      localStorage.setItem('slider', JSON.stringify(data.data.data.sliders))
    }
  }
  useEffect(() => {
    getData();
  }, []);




  return (
    <div className={`Home h-full w-full max-w-full overflow-hidden dark:bg-[#2C2C2C] ${opacity}`}>
      <LoadingBar
        progress={progress}
        height={3}
        color="#00C637"
      />

      <div>
        <SearchBar toggleSideBar={() => { props.toggleSideBar() }} />
      </div>

      <div className={`overflow-y-auto overflow-x-hidden h-[100%] bg-[#FBFBFB] w-full dark:bg-[#2C2C2C] px-6 pt-5 lg:pb-[100px] pb-[250px]`}>
        {/* <div>
          <div>
            <img src={carousol} alt="carousol" height={430} className='w-full' />
          </div>
        </div> */}

        {/* <div className="owl-carousel owl-theme max-w-[1150px] m-auto">

          {slider.map((song,key) => {
              return(<div key={song.slug} className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>)
          })}



            <div className="item cursor-pointer"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
            <div className="item"><h4><img src={carousol} alt="carousol"  className='w-full' /></h4></div>
        </div> */}


        <OwlCarousel 
          className="owl-theme"  
          loop={true}
          autoplayTimeout
          items = {1}
          margin={8} > 
          {slider.map((song,key) => {
              return(<div key={song.slug} onClick={()=>navigate(`/lyrics/${song.slug}`)}  className="item cursor-pointer cover"><h4><img src={song.poster===''?carousol:song.poster} alt="Image not found" className='lg:h-[450px] sm:h-[250px] h-[180px] w-full' /></h4></div>)
          })} 
           {/* <div ><img  className="img" src= {'assets/img/img1.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img2.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img4.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img3.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img5.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img6.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img7.jpg'}/></div>   */}
      </OwlCarousel>  

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

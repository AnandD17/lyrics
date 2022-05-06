import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { ContactUs } from '../pages/ContactUs'
import { Disclaimer } from '../pages/Disclaimer'
import { Home } from '../pages/Home'
import { Privacy } from '../pages/Privacy'
import { Recents } from '../pages/Recents'
import { Lyrics } from '../pages/Lyrics'
import { Trending } from '../pages/Trending'

export  const RouterMain = () => {
  const [mode,setMode] = useState(localStorage.theme)
  console.log(mode);


    const [lyrics_song,setLyrics_song] = useState('');

    const setInitialTheme = () =>{
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        setMode('Dark Mode')
      } else {
        document.documentElement.classList.remove('dark')
        setMode('Light Mode')
      }
    }

    useEffect(()=>{
      setInitialTheme();
    },[])

    const swapMode = () =>{
      if(mode==='Dark Mode')
      {
        document.documentElement.classList.remove('dark')
      }
      else{
        document.documentElement.classList.add('dark')
      }
    }

  return (
    <div className='min-h-full'>
        <Router>
            <div className='flex h-[100vh]'>
                <div className='w-[360px]'>
                    <Sidebar mode={mode} changeMode={(mode)=>{return(setMode(mode),swapMode(mode))}}/>
                </div>
                <Routes>
                    <Route exact path="/recents" element={ <Recents changeWord={lyrics_song=>setLyrics_song(lyrics_song)}/>}/>  
                    <Route exact path="/privacy" element={<Privacy/>} />
                    <Route exact path="/disclaimer" element={<Disclaimer/>} />
                    <Route exact path="/contactus" element={<ContactUs/>} />
                    <Route exact path="/lyrics" element={<Lyrics name={lyrics_song}/>}/>
                    <Route exact path="/trending" element={<Trending changeWord={lyrics_song=>setLyrics_song(lyrics_song)}/>}/>
                    <Route path="/" element={<Home changeWord={lyrics_song=>setLyrics_song(lyrics_song)}/>}/>
                </Routes>
            </div> 
        </Router>
    </div>
  )
}

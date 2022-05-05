import React, { useState } from 'react'
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
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    //   } else {
    //     document.documentElement.classList.remove('dark')
    //   }
    
    //   localStorage.theme = 'dark'

    //   const setTheme = ()=>{
    //       localStorage.theme = 'dark'?'light':'dark'
    //   }

    const [lyrics_song,setLyrics_song] = useState('');
    localStorage.setItem("lyrics", JSON.stringify(lyrics_song));
    console.log('obj');
    console.log(lyrics_song);

  return (
    <div className='min-h-full dark'>
        <Router>
            <div className='flex h-[100vh]'>
                <div className='w-[360px]'>
                    <Sidebar/>
                </div>
                <Routes>
                    <Route exact path="/recents" element={ <Recents changeWord={lyrics_song=>setLyrics_song(lyrics_song)}/>}/>  
                    <Route exact path="/privacy" element={Privacy} />
                    <Route exact path="/disclaimer" element={Disclaimer} />
                    <Route exact path="/contactus" element={ContactUs} />
                    <Route exact path="/lyrics" element={<Lyrics name={lyrics_song}/>}/>
                    <Route exact path="/trending" element={<Trending changeWord={lyrics_song=>setLyrics_song(lyrics_song)}/>}/>
                    <Route path="/" element={<Home changeWord={lyrics_song=>setLyrics_song(lyrics_song)}/>}/>
                </Routes>
            </div> 
        </Router>
    </div>
  )
}

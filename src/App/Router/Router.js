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
import { SearchLyrics } from '../pages/SearchLyrics'

export  const RouterMain = () => {
  const [mode,setMode] = useState(localStorage.theme)
  const [sidebarClass,setSidebarClass] = useState('hidden');
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
            <div className='flex h-[100vh] w-[100vw]'>
                <div className={`transition-all lg:w-[350px] lg:min-w-[350px] min-w-[260px] w-[260px] lg:block lg:static absolute h-[100vh] z-50 ${sidebarClass}`}>
                    <Sidebar mode={mode} changeMode={(mode)=>{return(setMode(mode),swapMode(mode))}}/>
                </div>
                <div className='lg:flex w-full'>
                  <div className={` overlay bg-black absolute opacity-50 z-40 lg:hidden h-full lg:transform-none w-full ${sidebarClass}`} onClick={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}>

                  </div>
                  <Routes>
                      <Route exact path="/search/:id" element={<SearchLyrics toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>
                      <Route exact path="/lyrics/:id" element={<Lyrics toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>
                      <Route exact path="/recents" element={ <Recents toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>  
                      <Route exact path="/privacy" element={<Privacy toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>} />
                      <Route exact path="/disclaimer" element={<Disclaimer toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>} />
                      <Route exact path="/contactus" element={<ContactUs toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>} />
                      <Route exact path="/trending" element={<Trending toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>
                      <Route exact path={`/`} element={<Home toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>
                  </Routes>
                </div>
            </div> 
        </Router>
    </div>
  )
}

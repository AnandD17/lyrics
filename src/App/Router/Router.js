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
  const [mode,setMode] = useState()
  const [sidebarClass,setSidebarClass] = useState('hidden');


    // const [lyrics_song,setLyrics_song] = useState('');

    const setInitialTheme = () =>{
      if(JSON.parse(localStorage.getItem('mode'))==='Dark Mode'||JSON.parse(localStorage.getItem('mode'))==='Light Mode') return;
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        setMode('Dark Mode')
        localStorage.setItem('mode', JSON.stringify('Dark Mode'))
      } else {
        document.documentElement.classList.remove('dark')
        setMode('Light Mode')
        localStorage.setItem('mode', JSON.stringify('Light Mode'))
      }
      
  }

    useEffect(()=>{
       setInitialTheme();
       if(JSON.parse(localStorage.getItem('mode'))==='Dark Mode') 
       {
         document.documentElement.classList.add('dark')
         setMode('Dark Mode')
       }

       if(JSON.parse(localStorage.getItem('mode'))==='Light Mode') {
          document.documentElement.classList.remove('dark')
          setMode('Light Mode')
       }
    },[])


    console.log(JSON.parse(localStorage.getItem('mode')));

    const swapMode = () =>{
      if(mode==='Dark Mode')
      {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('mode', JSON.stringify('Light Mode'))
      }
      else{
        document.documentElement.classList.add('dark')
        localStorage.setItem('mode', JSON.stringify('Dark Mode'))
      }
    }

  return (
    <div className='min-h-full bg-white dark:bg-[#2C2C2C]'>
        <Router>
            <div className='flex h-[100vh] w-[100vw] max-w-[1800px] m-auto bg-white dark:bg-[#2C2C2C]'>
                <div className={`transition-all lg:max-w-[400px] lg:w-[330px] lg:min-w-[330px] lg:z-auto z-20 min-w-[240px] w-[240px] lg:block lg:static absolute h-full lg:transform-none sm:opacity-100 ${sidebarClass==='hidden'?'-translate-x-full opacity-0':'opacity-100'}`}>
                    <Sidebar mode={mode} changeMode={(mode)=>{return(setMode(mode),swapMode(mode))}} toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>
                </div>
                <div className='flex w-full  justify-center'>
                  <div className='lg:flex container'>
                    <div className={` overlay bg-black absolute opacity-50 z-10 lg:hidden h-full lg:transform-none w-full ${sidebarClass}`} onClick={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}>

                    </div>
                    <Routes>
                        <Route exact path="/search/:id" element={<SearchLyrics toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>
                        <Route exact path="/lyrics/:id" element={<Lyrics toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>
                        <Route exact path="/recents" element={ <Recents toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>  
                        <Route exact path="/privacy" element={<Privacy toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>} />
                        <Route exact path="/disclaimer" element={<Disclaimer toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>} />
                        <Route exact path="/contact" element={<ContactUs toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>} />
                        <Route exact path="/trending" element={<Trending toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>
                        <Route exact path={`/`} element={<Home toggleSideBar={()=>{setSidebarClass(sidebarClass==='hidden'?'':'hidden')}}/>}/>
                    </Routes>
                    </div>
                </div>
            </div> 
        </Router>
    </div>
  )
}

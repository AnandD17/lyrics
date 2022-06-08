import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/logo.png'

function NotFound() {
  return (
    <div className='h-full w-full text-2xl'>
        <div className='flex flex-col justify-center items-center h-full w-full'>
            <img src={logo} className={'w-[70%] sm:w-[50%]'} alt="Revaltronics" />
            <br />
            <div className="text-3xl">Ooops Thought you are on a wrong page</div>
            <br />
            <NavLink to={'/'} >
                <div className='sm:hidden text-[#1363DF]'>
                    Go back to home page
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default NotFound
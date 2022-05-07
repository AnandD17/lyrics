import React,{useState} from 'react'
import {FiMenu} from 'react-icons/fi'


export const SearchBar = (props) => {

    const [value,setValue] = useState('')

  return (
    <div className='SearchBar'>
        <div className='text-[#00C637] flex items-center lg:hidden p-5'>
          <FiMenu className={'h-[25px] w-[25px]'} onClick={()=>{props.toggleSideBar()}}/>
          <div className='flex justify-content-center m-auto'>
            <img src="./assets/logo.svg" alt="" />
          </div>
        </div>
        <div className=' flex h-[55px] gap-[10px] px-2 bg-[#F5F5F5] w-[96%] m-auto my-5 rounded-[5px]'>
            <img src="./assets/icons/magnifying.svg" height={35} width={35} alt="" />
            <input type="text" className='active:border-0 bg-[#F5F5F5] text-sm w-full focus:outline-0 text-[#C3C3C3] px-3' placeholder='Search for lyrics, albums, artists and more' onChange={(e)=>{setValue(e.target.value)}} value={value} />
        </div>
    </div>
  )
}

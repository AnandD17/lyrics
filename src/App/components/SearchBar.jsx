import React,{useState} from 'react'
import {FiMenu} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'
import logo from './../assets/logo.png'


export const SearchBar = (props) => {
    const navigate = useNavigate();
    const [value,setValue] = useState('')
    const serachInput = document.getElementById("serachInput");


    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        navigate(`/search/${value}`)
      }
    }

  return (
    <div className='SearchBar w-full px-6'>
        <div className='text-[#00C637] flex justify-between items-center lg:hidden py-5'>
          <FiMenu className={'h-[25px] w-[25px] relative left-0'} onClick={()=>{props.toggleSideBar()}}/>
          <div className='flex justify-content-center relative w-[100vw]'>
            <img src={logo} alt="" className='h-[60px] w-auto m-auto' onClick={()=>{navigate(`/`)}}/>
          </div>
        </div>
        <div className=' flex h-[40px] sm:h-[50px] gap-[10px] px-6 bg-[#F5F5F5] w-full m-auto my-5 rounded-[5px] items-center'>
            <BiSearch className='ml-2 text-[#C3C3C3] h-[25px] w-[25px]'/>
            <input type="text" id='serachInput' className='active:border-0 bg-[#F5F5F5] text-sm w-full focus:outline-0 text-[#C3C3C3] px-1' placeholder='Search for lyrics, albums, artists and more' onKeyPress={handleKeyPress} onChange={(e)=>{setValue(e.target.value)}} value={value} />
        </div>
    </div>
  )
}

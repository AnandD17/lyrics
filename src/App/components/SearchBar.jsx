import React,{useState} from 'react'
import {FiMenu} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'


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
    <div className='SearchBar'>
        <div className='text-[#00C637] flex items-center lg:hidden p-5'>
          <FiMenu className={'h-[25px] w-[25px]'} onClick={()=>{props.toggleSideBar()}}/>
          <div className='flex justify-content-center m-auto'>
            <img src="./assets/logo.svg" alt="" />
          </div>
        </div>
        <div className=' flex h-[55px] gap-[10px] px-2 bg-[#F5F5F5] w-[96%] m-auto my-5 rounded-[5px] items-center'>
            <BiSearch className='ml-2 text-[#C3C3C3] h-[25px] w-[25px]'/>
            <input type="text" id='serachInput' className='active:border-0 bg-[#F5F5F5] text-sm w-full focus:outline-0 text-[#C3C3C3] px-1' placeholder='Search for lyrics, albums, artists and more' onKeyPress={handleKeyPress} onChange={(e)=>{setValue(e.target.value)}} value={value} />
        </div>
    </div>
  )
}

import React,{useState} from 'react'
import { SearchBar } from '../components/SearchBar'
import { ButtonHeader } from '../components/ButtonHeader'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillMessage} from 'react-icons/ai'

export const ContactUs = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

  return (
    <div className='ContactUs h-full w-full overflow-hidden'>

            <SearchBar />

            <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 pb-[120px]'>
                <div className='flex justify-start my-4 mb-10'>
                    <ButtonHeader title={'Contact Us'} />
                </div>
                <div className='bg-white py-2 px-6'>

                    <div className='rounded-[5px] flex h-[55px] gap-[10px] px-2 bg-[#F5F5F5] my-5'>
                        <div className='flex justify-center items-center'><BsFillPersonFill className='text-[#C3C3C3] h-[25px] w-[25px]'/></div>
                        <input type="text" className='active:border-0 bg-[#F5F5F5] text-sm w-full focus:outline-0 text-[#C3C3C3] px-3' placeholder='Name' onChange={(e)=>{setName(e.target.value)}} value={name} />
                    </div>

                    <div className='rounded-[5px] flex h-[55px] gap-[10px] px-2 bg-[#F5F5F5] my-5'>
                        <div className='flex justify-center items-center'><MdEmail className='text-[#C3C3C3] h-[25px] w-[25px]'/></div>
                        <input type="text" className='active:border-0 bg-[#F5F5F5] text-sm w-full focus:outline-0 text-[#C3C3C3] px-3' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                    </div>

                    <div className='rounded-[5px] flex h-full gap-[10px] py-3 px-2 bg-[#F5F5F5] my-5'>
                        <div className='flex justify-center'><AiFillMessage className='text-[#C3C3C3] h-[25px] w-[25px]'/></div>
                        <textarea name="" className='active:border-0 bg-[#F5F5F5] text-sm w-full focus:outline-0 text-[#C3C3C3] px-3' placeholder='Message' onChange={(e)=>{setMessage(e.target.value)}} value={message} id="" cols="80" rows="10"></textarea>
                    </div>

                    <div className='flex justify-end mb-3'>
                        <button type="submit" className='bg-[#00C637] text-white py-2 w-[450px] rounded-[5px]'>Send</button>
                    </div>

                </div>
            </div>
        </div>
  )
}

import React, { useState} from 'react'
import {AiFillHome,AiFillFire,AiFillClockCircle} from 'react-icons/ai'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { Link,useNavigate } from 'react-router-dom'

export const Sidebar = (props) => {
    const [mode,setMode] = useState(localStorage.theme=='dark'?'dark':'')
    const navigate = useNavigate();

    const handleDir = (dir)=>{

        navigate(dir)
    }
    console.log(mode);
    return (
        <div className='Sidebar w-full pt-[50px] flex flex-col justify-between h-full'>
            <div>
                <div onClick={()=>{handleDir('/')}} target={'_top'} className="flex justify-center">
                    <img src="./assets/logo.svg" alt="" />
                </div>

                <div className='my-[30px] flex justify-center'>
                    <div className='border w-[80%]'></div>
                </div>

                <div>
                    <div onClick={()=>{handleDir('/')}} className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637]'>
                        <AiFillHome className='h-[30px] w-[30px]'/>
                        <div className='text-xl dark:text-red'>Home</div>
                    </div>
                    <div onClick={()=>{handleDir('/recents')}} className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637]'>
                        <div className='w-[30px]'>
                            <div className='absolute z-50'>
                            <AiFillClockCircle className='h-[26px] w-[26px]'/>
                            </div>
                            <div className='relative left-4 bottom-1 z-100'>
                            <BsFillArrowUpCircleFill className='h-[18px] w-[18px]' />
                            </div>
                        </div>
                        <div className='text-xl'>Recently Uploaded</div>
                    </div>
                    <div onClick={()=>{handleDir('/trending')}} className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637]'>
                        <AiFillFire className='h-[30px] w-[30px]'/>
                        <div className='text-xl '>Trending</div>
                    </div>
                </div>

            </div>
            <div>
                <div onClick={()=>{handleDir('/contactus')}} className='pl-[30px] py-3 flex gap-[13px]'>
                    <img src="./assets/icons/trending.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Contact Us</div>
                </div>
                <div onClick={()=>{handleDir('/privacy')}} className='pl-[30px] py-3 flex gap-[13px]'>
                    <img src="./assets/icons/trending.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Pivacy Policy</div>
                </div>
                <div onClick={()=>{handleDir('/disclaimer')}} className='pl-[30px] py-3 flex gap-[13px]'>
                    <img src="./assets/icons/trending.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Disclaimer</div>
                </div>
                <div className='pl-[30px] py-3 flex gap-[13px] cursor-pointer'>
                    <img src="./assets/icons/trending.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Dark Mode</div>
                </div>
            </div>

        </div>
    )
}

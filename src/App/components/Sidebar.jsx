import React from 'react'
import {AiFillHome,AiFillFire,AiFillClockCircle} from 'react-icons/ai'
import {BsFillArrowUpCircleFill,BsSunFill} from 'react-icons/bs'
import {FiInfo} from 'react-icons/fi'
import {MdOutlinePrivacyTip} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export const Sidebar = (props) => {
    const navigate = useNavigate();

    const handleDir = (dir)=>{

        navigate(dir)
    }
    return (
        <div className='Sidebar w-full pt-[50px] flex flex-col justify-between h-full dark:bg-[#2C2C2C]'>
            <div>
                <div onClick={()=>{return(handleDir('/'))}} target={'_top'} className="flex justify-center cursor-pointer">
                    <img src="./assets/logo.svg" alt="" />
                </div>

                <div className='my-[30px] flex justify-center'>
                    <div className='border w-[80%]'></div>
                </div>

                <div>
                    <div onClick={()=>{handleDir('/')}} className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637] cursor-pointer'>
                        <AiFillHome className='h-[30px] w-[30px]'/>
                        <div className='text-xl'>Home</div>
                    </div>
                    <div onClick={()=>{handleDir('/recents')}} className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637] cursor-pointer'>
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
                    <div onClick={()=>{handleDir('/trending')}} className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637] cursor-pointer'>
                        <AiFillFire className='h-[30px] w-[30px]'/>
                        <div className='text-xl '>Trending</div>
                    </div>
                </div>

            </div>
            <div>
                <div className='my-[30px] flex justify-center'>
                    <div className='border w-[80%]'></div>
                </div>
                <div onClick={()=>{handleDir('/contactus')}} className='pl-[30px] py-3 flex gap-[13px] cursor-pointer'>
                    <img src="./assets/icons/contact.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Contact Us</div>
                </div>
                <div onClick={()=>{handleDir('/privacy')}} className='pl-[30px] py-3 flex gap-[13px] cursor-pointer'>
                    <MdOutlinePrivacyTip className='h-[30px] w-[30px] text-[#AEAEAE]' />
                    <div className='text-xl text-[#AEAEAE]'>Pivacy Policy</div>
                </div>
                <div onClick={()=>{handleDir('/disclaimer')}} className='pl-[30px] py-3 flex gap-[13px] cursor-pointer'>
                    <FiInfo className='h-[30px] w-[30px] text-[#AEAEAE]'/>
                    <div className='text-xl text-[#AEAEAE]'>Disclaimer</div>
                </div>
                <div className={`pl-[30px] py-3 flex gap-[13px] cursor-pointer ${props.mode==='Dark Mode'?'bg-[#EAFEEF] text-[#00C637]':'bg-[#2C2C2C] text-[#AEAEAE]'}`} onClick={()=>{props.changeMode(props.mode==='Dark Mode'?'Light Mode':'Dark Mode')}}>
                    <BsSunFill className='h-[30px] w-[30px]' />
                    <div className='text-xl'>{props.mode==='Dark Mode'?'Light Mode':'Dark Mode'}</div>
                </div>
            </div>

        </div>
    )
}

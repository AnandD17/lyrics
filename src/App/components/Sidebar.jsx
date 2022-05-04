import React from 'react'
import {AiFillHome,AiFillFire,AiFillClockCircle} from 'react-icons/ai'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

export const Sidebar = () => {
    return (
        <div className='Sidebar w-full pt-[50px] flex flex-col justify-between h-full'>
            <div>
                <a href='/' className="flex justify-center">
                    <img src="./assets/logo.svg" alt="" />
                </a>

                <div className='my-[30px] flex justify-center'>
                    <div className='border w-[80%]'></div>
                </div>

                <div>
                    <a href='/' className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637]'>
                        <AiFillHome className='h-[30px] w-[30px]'/>
                        <div className='text-xl'>Home</div>
                    </a>
                    <a href='/recents' className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637]'>
                        <div className='w-[30px]'>
                            <div className='absolute z-50'>
                            <AiFillClockCircle className='h-[26px] w-[26px]'/>
                            </div>
                            <div className='relative left-4 bottom-1 z-100'>
                            <BsFillArrowUpCircleFill className='h-[18px] w-[18px]' />
                            </div>
                        </div>
                        <div className='text-xl'>Recently Uploaded</div>
                    </a>
                    <a href='/trending' className='pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] text-[#AEAEAE] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637]'>
                        <AiFillFire className='h-[30px] w-[30px]'/>
                        <div className='text-xl '>Trending</div>
                    </a>
                </div>

            </div>
            <div>
                <a href='/contactus' className='pl-[30px] py-3 flex gap-[13px]'>
                    <img src="./assets/icons/trending.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Contact Us</div>
                </a>
                <a href='/privacy' className='pl-[30px] py-3 flex gap-[13px]'>
                    <img src="./assets/icons/trending.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Pivacy Policy</div>
                </a>
                <a href='/disclaimer' className='pl-[30px] py-3 flex gap-[13px]'>
                    <img src="./assets/icons/trending.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Disclaimer</div>
                </a>
                <a href='/' className='pl-[30px] py-3 flex gap-[13px]'>
                    <img src="./assets/icons/trending.svg" alt="home icon" />
                    <div className='text-xl text-[#AEAEAE]'>Dark Mode</div>
                </a>
            </div>

        </div>
    )
}

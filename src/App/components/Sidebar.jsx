import React, { useEffect, useState } from 'react'
import {AiFillHome,AiFillFire,AiFillClockCircle} from 'react-icons/ai'
import {BsFillArrowUpCircleFill,BsSunFill,BsGlobe} from 'react-icons/bs'
import {FiInfo} from 'react-icons/fi'
import {GoFlame} from 'react-icons/go'
import {MdOutlinePrivacyTip,MdOutlineTrendingUp} from 'react-icons/md'
import {useLocation, NavLink} from 'react-router-dom'
import logo from './../assets/logo.png'
import cont from './../assets/contact.png'
import lock from './../assets/lock.png'
import tr1 from './../assets/tr.png'
import tr2 from './../assets/trActive.png'

export const Sidebar = (props) => {
    const location = useLocation();
    const [tri,setTri] = useState();

    const set1 =()=>{
        if(location.pathname==='/trending') return;
        setTri(tr2)
    }
    
    const erase1 =()=>{
        if(location.pathname==='/trending') return;
        setTri(tr1)

    }

    useEffect(()=>{
        erase1();
    },[location.pathname])


    return (
        <div className='Sidebar w-full lg:pt-[50px] flex flex-col justify-between h-[100vh] bg-white dark:bg-[#2C2C2C]'>
            <div>
                <NavLink to="/" target={'_top'} className="hidden lg:flex justify-center cursor-pointer">
                    <img src={logo} alt="" className='w-[200px] h-auto'/>
                </NavLink>

                <div className='my-[30px] justify-center hidden lg:flex'>
                    <div className='border w-[80%]'></div>
                </div>

                <div>
                    <NavLink to={"/"}  className={`pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637] cursor-pointer ${location.pathname==='/'?' text-[#00C637] border-l-[3px] pl-[27px] border-l-[green] bg-[#EAFEEF] ':'text-[#AEAEAE]'}`}>
                        <div onClick={(e)=>{props.toggelSidebar()}} className={` flex gap-[13px]`}>
                        <AiFillHome className='lg:h-[30px] lg:w-[30px] h-[25px] w-[25px]'/>
                        <div className='sm:text-xl text-base flex items-center'>Home</div>
                        </div>
                    </NavLink>
                    <NavLink to="/recents" className={`pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637] cursor-pointer ${location.pathname==='/recents'?' text-[#00C637] border-l-[3px] pl-[27px] border-l-[green] bg-[#EAFEEF]':'text-[#AEAEAE]'}` }>
                    <div onClick={(e)=>{props.toggelSidebar()}} className={` flex gap-[13px]`}>
                        <div className='w-[30px]'>
                            <div className='absolute z-50'>
                            <AiFillClockCircle className='lg:h-[26px] lg:w-[26px] h-[22px] w-[22px]'/>
                            </div>
                            <div className='relative left-4 bottom-1 z-100'>
                            <BsFillArrowUpCircleFill className='lg:h-[18px] lg:w-[18px] h-[16px] w-[16px]' />
                            </div>
                        </div>
                        <div className='sm:text-xl text-base flex items-center'>Recently Uploaded</div>
                        </div>
                    </NavLink>
                    <NavLink to="/trending" className={`pl-[30px] py-3 flex gap-[13px] hover:bg-[#EAFEEF] hover:border-l-[green] border-box hover:pl-[27px] hover:border-l-[3px] hover:text-[#00C637] cursor-pointer ${location.pathname==='/trending'?' text-[#00C637] border-l-[3px] pl-[27px] border-l-[green] bg-[#EAFEEF] ':'text-[#AEAEAE]'}`} onMouseEnter={()=>{set1();}} onMouseLeave={()=>{erase1();}}>
                        {/* <GoFlame className='lg:h-[30px] lg:w-[30px] h-[25px] w-[25px]'/> */}
                        <div onClick={(e)=>{props.toggelSidebar()}} className={` flex gap-[13px]`}>
                        <img src={location.pathname==='/trending'?tr2:tri} alt="trending" />
                        <div className='sm:text-xl text-base flex items-center '>Trending</div>
                        </div>
                    </NavLink>
                </div>

            </div>
            <div>
                <div className='my-[30px] flex justify-center'>
                    <div className='border w-[80%]'></div>
                </div>
                <NavLink to="/contact"  className='pl-[30px] py-3 flex gap-[13px] cursor-pointer'>
                <div onClick={(e)=>{props.toggelSidebar()}} className={` flex gap-[13px]`}>
                    <img src={cont} className='lg:h-[30px] lg:w-[30px] h-[25px] w-[25px] text-[#AEAEAE]'/>
                    <div className='sm:text-xl text-base flex items-center text-[#AEAEAE]'>Contact Us</div>
                    </div>
                </NavLink>
                <NavLink to="/privacy"  className='pl-[30px] py-3 flex gap-[13px] cursor-pointer'>
                <div onClick={(e)=>{props.toggelSidebar()}} className={` flex gap-[13px]`}>
                    <img src={lock} className='lg:h-[30px] lg:w-[30px] h-[25px] w-[25px] text-[#AEAEAE]'/>
                    <div className='sm:text-xl text-base flex items-center text-[#AEAEAE]'>Pivacy Policy</div>
                    </div>
                </NavLink>
                <NavLink to="/disclaimer" className='pl-[30px] py-3 flex gap-[13px] cursor-pointer'>
                <div onClick={(e)=>{props.toggelSidebar()}} className={` flex gap-[13px]`}>
                    <FiInfo className='lg:h-[30px] lg:w-[30px] h-[25px] w-[25px] text-[#AEAEAE]'/>
                    <div className='sm:text-xl text-base flex items-center text-[#AEAEAE]'>Disclaimer</div>
                    </div>
                </NavLink>
                <div  className={`pl-[30px] py-3 flex gap-[13px] cursor-pointer ${props.mode==='Dark Mode'?'bg-[#EAFEEF] text-[#00C637]':'bg-[#2C2C2C] text-[#AEAEAE]'}`} onClick={()=>{props.changeMode(props.mode==='Dark Mode'?'Light Mode':'Dark Mode')}}>
                    <BsSunFill className='lg:h-[30px] lg:w-[30px] h-[25px] w-[25px]' />
                    <div className='sm:text-xl text-base flex items-center'>{props.mode==='Dark Mode'?'Light Mode':'Dark Mode'}</div>
                </div>
            </div>

        </div>
    )
}

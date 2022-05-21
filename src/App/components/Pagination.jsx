import React, { useState } from 'react'
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom';

export const Pagination = (props) => {
  const navigate = useNavigate()
  const location = useLocation();
  return (
    <div className={`Pagination bg-white dark:bg-[#2C2C2C] py-3 flex justify-center ${props.display===false?'hidden':''}`}>
        <div className='flex gap-6 dark:text-white'>
            <div  onClick={()=>{props.changePage(props.page===1?1:props.page-1)}} className="cursor-pointer rounded-full font-bold flex items-center justify-center text-white bg-[#00C637] text-4xl w-[30px] h-[30px]"><BsArrowLeftShort/></div>
            <div   onClick={()=>{props.changePage(1)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===1?'text-white bg-[#00C637]':''}`}>1</div>
            <div   onClick={()=>{props.changePage(2)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===2?'text-white bg-[#00C637]':''}`}>2</div>
            <div   onClick={()=>{props.changePage(3)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===3?'text-white bg-[#00C637]':''}`}>3</div>
            <div   onClick={()=>{props.changePage(4)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===4?'text-white bg-[#00C637]':''}`}>4</div>
            <div   onClick={()=>{props.changePage(5)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===5?'text-white bg-[#00C637]':''}`}>5</div>
            <div   onClick={()=>{props.changePage(props.page===5?5:props.page+1)}} className="cursor-pointer rounded-full flex font-bolder items-center justify-center text-white bg-[#00C637] text-4xl w-[30px] h-[30px]"><BsArrowRightShort/></div>
        </div>
    </div>
  )
}

import React from 'react'
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'

export const Pagination = (props) => {
  return (
    <div className={`Pagination bg-white dark:bg-[#2C2C2C] py-3 flex justify-center ${props.display===false?'hidden':''}`}>
        <div className='flex gap-6 dark:text-white'>
            <a href='/' className="rounded-full font-bold flex items-center justify-center text-white bg-[#00C637] text-4xl w-[30px] h-[30px]"><BsArrowLeftShort/></a>
            <a href='/' className="rounded-full flex items-center justify-center w-[30px] h-[30px]">1</a>
            <a href='/' className="rounded-full flex items-center justify-center text-white bg-[#00C637] w-[30px] h-[30px]">2</a>
            <a href='/' className="rounded-full flex items-center justify-center w-[30px] h-[30px]">3</a>
            <a href='/' className="rounded-full flex items-center justify-center w-[30px] h-[30px]">4</a>
            <a href='/' className="rounded-full flex font-bolder items-center justify-center text-white bg-[#00C637] text-4xl w-[30px] h-[30px]"><BsArrowRightShort/></a>
        </div>
    </div>
  )
}

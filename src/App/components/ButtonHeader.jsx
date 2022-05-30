import React from 'react'

export const ButtonHeader = (props) => {
  return (
        <button className='dark:bg-[#2C2C2C] dark:text-[#FAF9F6] min-w-[170px] w-auto h-[45px] sm:min-w-[280px] sm:h-[60px] rounded-b-[5px] border-t-4 border-[#00C637] bg-[#FFFFFF] text-left pl-[15px] sm:pl-5 py-2 sm:text-xl text-lg'>{props.title}</button>
  )
}

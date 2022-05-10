import React from 'react'

export const ButtonHeader = (props) => {
  return (
        <button className='dark:bg-[#2C2C2C] dark:text-[#FAF9F6] w-[170px] h-[36px] sm:w-[280px] sm:h-[60px] rounded-b-[5px] border-t-4 border-[#00C637] bg-[#FFFFFF] text-left pl-5 text-xl'>{props.title}</button>
  )
}

import React from 'react'

export const ButtonHeader = (props) => {
  return (
        <button className='w-[280px] h-[60px] rounded-b-[5px] border-t-4 border-[#00C637] bg-[#FFFFFF] text-left pl-5 text-xl'>{props.title}</button>
  )
}

import React from 'react'
import music from './../assets/music.jpg'

export const MusicThumbnail = () => {
  return (
    <div className='MusicThumbnail h-[300px] rounded-[5px] bg-[white] cursor-pointer'>
        <img src={music} alt="music" className='h-[66%] w-full rounded-[5px]' />
        <div className='w-[75%] bg-[#F6F6F6] h-[3px] m-auto my-5 mt-7'></div>
        <div className='text-sm text-left pl-5'>
            <div>Red Blank Space</div>
            <div className='opacity-75'>Taylor Swift</div>
        </div>
    </div>
  )
}

import React from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { Pagination } from '../components/Pagination'
import { SearchBar } from '../components/SearchBar'

export const Recents = () => {
  return (
    <div className='Recents h-full w-full overflow-hidden'>

      <SearchBar/>

      <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 pb-[120px]'>
        <div className='flex justify-start mb-4'>
          <ButtonHeader title={'Recently Added'}/>
        </div>
        <div className="grid gap-3 grid-cols-5">
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
          <div className="col-span-1">
            <MusicThumbnail/>
          </div>
        </div>
        <div className='mt-5 '>
          <Pagination/>
        </div>
      </div>
    </div>
  )
}

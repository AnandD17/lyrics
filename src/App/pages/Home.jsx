import React from 'react'
import { ButtonHeader } from '../components/ButtonHeader'
import { MusicThumbnail } from '../components/MusicThumbnail'
import { Pagination } from '../components/Pagination'
import { SearchBar } from '../components/SearchBar'
import carousol from './../assets/car.jpg'

export const Home = () => {
  return (
    <div className='Home h-full w-full overflow-hidden'>

      <SearchBar />

      <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 pb-[120px]'>
        <div>
          <img src={carousol} alt="carousol" height={430} className='h-[430px] w-full' />
        </div>
        <div className='flex justify-start my-4'>
          <ButtonHeader title={'Recently Added'} />
        </div>
        <div className="grid gap-3 grid-cols-5 mb-5">
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
        </div>
        <div className='flex justify-start mb-4'>
          <ButtonHeader title={'Latest Albums'} />
        </div>
        <div className="grid gap-3 grid-cols-5">
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
          <div className="col-span-1">
            <MusicThumbnail />
          </div>
        </div>
      </div>
    </div>
  )
}

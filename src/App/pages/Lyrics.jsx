import React from 'react'
import { SearchBar } from '../components/SearchBar'
import { ButtonHeader } from '../components/ButtonHeader'
import music from './../assets/music.jpg'

export const Lyrics = () => {
  return (
    <div className='Lyrics h-full w-full overflow-hidden'>

            <SearchBar />

            <div className='overflow-auto h-[100%] bg-[#FBFBFB] px-6 pt-5 pb-[120px]'>
                <div className='flex justify-start my-4 mb-10'>
                    <ButtonHeader title={'Meet me at our spot'} />
                </div>
                <div className="grid gap-4 grid-cols-4 h-full bg-white">
                    <div className="col-span-4 h-auto sm:col-span-1">
                        <img src={music} alt="music" className='h-[215px] w-full rounded-[5px]' />
                        <div className='w-[75%] bg-[#F6F6F6] h-[3px] m-auto my-5 mt-7'></div>
                        <div className='flex flex-col gap-2'>
                            <div className='text-sm text-left pl-5'>
                                <div>Meet me at our spot</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Artist</div>
                                <div className='opacity-75 font-light'>Willow Smith</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Album</div>
                                <div className='opacity-75 font-light'>The Anxiety</div>
                            </div>
                            <div className='text-sm text-left pl-5'>
                                <div>Year</div>
                                <div className='opacity-75 font-light'>2021</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-3 text-center">
                        <div className='flex gap-4'>
                        <ButtonHeader title={'CRT File'} />
                        <ButtonHeader title={'Text'} />
                        </div>
                        
                        <div className='whitespace-div-wrap'>
                            We don't talk about Bruno, no, no, no
                            We don't talk about Bruno, but
                            It was my wedding day
                            It was our wedding day 
                            We were getting ready
                            And there wasn't a cloud in the sky
                            No clouds allowed in the sky
                            Bruno walks in with a mischievous grin
                            Thunder
                            You telling this story or am I?
                            I'm sorry, mi vida, go on
                            Bruno says, "It looks like rain"
                            Why did he tell us?
                            In doing so, he floods my brain
                            Abuela, get the umbrellas
                            Married in a hurricane
                            What a joyous day but anyway
                            We don't talk about Bruno, no, no, no
                            We don't talk about Bruno
                            Hey, grew to live in fear of Bruno stuttering or stumbling
                            I can always hear him sort of muttering and mumbling
                            I associate him with the sound of falling sand, ch ch ch
                            It's a heavy lift with a gift so humbling
                            Always left Abuela and the family fumbling
                            Grappling with prophecies they couldn't understand
                            Do you understand?
                            A seven-foot frame, rats along his back
                            When he calls your name it all fades to black
                            Yeah, he sees your dreams and feasts on your screams (Hey)
                            We don't talk about Bruno, no, no, no
                            We don't talk about Bruno
                            He told me my fish would die, the next day, dead (No, no)
                            He told me I'd grow a gut and just like he said (No, no)
                            He said that all my hair would disappear, now, look at my head (No, no)
                            Your fate is sealed when your prophecy is read
                            He told me that the life of my dreams
                            Would be promised, and someday be mine
                            He told me that my power would grow
                            Like the grapes that thrive on the vine (Óye, Mariano's on his way)
                            He told me that the man of my dreams
                            Would be just out of reach
                            Betrothed to another
                            It's like I hear him, now
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

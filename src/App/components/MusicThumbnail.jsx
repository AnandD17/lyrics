import { useNavigate } from 'react-router-dom';
import music from './../assets/music.jpg'

export const MusicThumbnail = (props) => {
  const navigate = useNavigate();
  const handleDir = (dir)=>{
    navigate(dir)
  }
  return (
    <div onClick={()=>{return(handleDir('/lyrics'),props.changeWord(props.slug))}} className='MusicThumbnail h-[300px] rounded-[5px] bg-[white] cursor-pointer' >
        <img src={props.img} alt="cant load image" className='h-[66%] w-full rounded-t-[5px]' />
        <div className='w-[75%] bg-[#F6F6F6] h-[3px] m-auto my-5 mt-7'></div>
        <div className='text-sm text-left pl-5 text-ellipsis'>
            <div className='truncate'>{props.name}</div>
            <div className='opacity-75 font-light truncate'>{props.artist}</div>
        </div>
    </div>
  )
}


MusicThumbnail.defaultProps = {
  img:music
}
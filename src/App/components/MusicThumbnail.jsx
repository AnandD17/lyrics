import { useNavigate } from 'react-router-dom';
import music from './../assets/music.jpg'

export const MusicThumbnail = (props) => {
  const navigate = useNavigate();
  const handleDir = ()=>{
    navigate(`/lyrics/${props.slug}`)
  }
  return (
    <div onClick={()=>{return(handleDir(),props.changeWord(props.slug))}} className='MusicThumbnail dark:bg-[#2C2C2C] sm:h-[300px] h-[250px] max-w-[250px] m-auto rounded-[5px] bg-[white] cursor-pointer' >
        <img src={props.img} alt="cant load image" className='h-[66%] w-full rounded-t-[5px]' />
        <div className='w-[75%] bg-[#F6F6F6] h-[3px] m-auto my-5 mt-7'></div>
        <div className='text-sm text-left pl-5 text-ellipsis dark:text-[#FAF9F6]'>
            <div className='truncate'>{props.name}</div>
            <div className='opacity-75 font-light truncate'>{props.artist}</div>
        </div>
    </div>
  )
}


MusicThumbnail.defaultProps = {
  img:music
}
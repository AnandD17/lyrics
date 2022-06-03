import { useNavigate } from 'react-router-dom';
import music from './../assets/lyrics.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const MusicThumbnail = (props) => {
  const navigate = useNavigate();
  const handleDir = ()=>{
    navigate(`/lyrics/${props.slug}`)
  }
  return (
    <NavLink to={`/lyrics/${props.slug}`} onClick={(e)=>{return(props.changeWord(props.slug))}} className='MusicThumbnail dark:bg-[#2C2C2C] w-full 2xl:h-[380px] xl:h-[317px] sm:h-[300px] h-[255px] w-full lg:min-w-[140px] m-auto rounded-[5px] bg-[white] cursor-pointer' >
        <img src={props.img} alt="cant load image" className='aspect-square w-full rounded-t-[5px]' />
        <div className='w-[75%] bg-[#F6F6F6] h-[3px] m-auto my-5 mt-7'></div>
        <div className='text-sm text-left pl-4 pr-4 text-ellipsis dark:text-[#FAF9F6]'>
            <div className='truncate'>{props.name}</div>
            <div className='opacity-75 font-light truncate'>{props.artist}</div>
        </div>
    </NavLink>
  )
}


MusicThumbnail.defaultProps = {
  img:music
}
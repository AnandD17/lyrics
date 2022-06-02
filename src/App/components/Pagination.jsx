import React, { useState } from 'react'
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom';

export const Pagination = (props) => {
  const navigate = useNavigate()
  const location = useLocation();
  const [gap,setGap]  =   useState('')

  const pageNumbers = [];
  const showPages = [];

  for(let i = 1; i <= props.totalPage; i++){
      pageNumbers.push(i);
  }

  if(pageNumbers.length<7){
    for(let i = 1; i <= pageNumbers; i++){
      showPages.push(pageNumbers[i]);
  }
  }

  else{
    if(props.page===1){
      // setGap('gap-5')
      showPages.push(1);
      showPages.push(2);
      showPages.push('..');
      showPages.push(props.totalPage-1);
      showPages.push(props.totalPage);
    }
    
    else if(props.page===2){
      // setGap('gap-5')
      showPages.push(1);
      showPages.push(2);
      showPages.push(3);
      showPages.push('..');
      showPages.push(props.totalPage);
    }
    
    else if(props.page===3){
      // setGap('gap-3')
      showPages.push(1);
      showPages.push(2);
      showPages.push(3);
      showPages.push(4);
      showPages.push('..');
      showPages.push(props.totalPage);
    }
    
    else if(props.page>3&&props.page<props.totalPage-2){
      // setGap('gap-2')
      showPages.push(1);
      showPages.push('..');
      showPages.push(props.page-1);
      showPages.push(props.page);
      showPages.push(props.page+1);
      showPages.push('..');
      showPages.push(props.totalPage);
    }
    
    else if(props.page===props.totalPage-2){
      // setGap('gap-3')
      showPages.push(1);
      showPages.push(2);
      showPages.push('..');
      showPages.push(props.page-2);
      showPages.push(props.page-3);
      showPages.push(props.page-1);
      showPages.push(props.totalPage);
    }
    
    else if(props.page===props.totalPage-1){
      // setGap('gap-4')
      showPages.push(1);
      showPages.push(2);
      showPages.push('..');
      showPages.push(props.page-2);
      showPages.push(props.page-1);
      showPages.push(props.totalPage);
    }

    else if(props.page===props.totalPage){
      // setGap('gap-6')
      showPages.push(1);
      showPages.push(2);
      showPages.push('..');
      showPages.push(props.page-2);
      showPages.push(props.page-1);
      showPages.push(props.totalPage);
    }
  }

  return (
    <div className={`Pagination bg-white w-full dark:bg-[#2C2C2C] py-3 flex justify-center ${props.display===false?'hidden':''}`}>
        <div className={`flex sm:gap-6 ${props.page===1||props.page===props.totalPage||props.page===2||props.page===props.totalPage-1?'gap-5':props.page===3||props.page===props.totalPage-2?'gap-4':'gap-2'}  dark:text-white`}>
            <div  onClick={()=>{props.changePage(props.page===1?1:props.page-1)}} className="cursor-pointer rounded-full font-bold flex items-center justify-center text-white bg-[#00C637] sm:text-4xl w-[25px] h-[25px]  sm:w-[30px] sm:h-[30px]"><BsArrowLeftShort/></div>

            {showPages.map((number,index)=>{return(
              <div   onClick={()=>{props.changePage(number)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[25px] h-[25px]  sm:w-[30px] sm:h-[30px] ${props.page===number?'text-white sm:text-base text-sm bg-[#00C637]':''}`}>{number}</div>
            )})}
            {/* <div   onClick={()=>{props.changePage(2)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===2?'text-white bg-[#00C637]':''}`}>2</div>
            <div   onClick={()=>{props.changePage(3)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===3?'text-white bg-[#00C637]':''}`}>3</div>
            <div   onClick={()=>{props.changePage(4)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===4?'text-white bg-[#00C637]':''}`}>4</div>
            <div   onClick={()=>{props.changePage(5)}} className={`cursor-pointer rounded-full flex items-center justify-center w-[30px] h-[30px] ${props.page===5?'text-white bg-[#00C637]':''}`}>5</div> */}
            <div   onClick={()=>{props.changePage(props.page===props.totalPage?props.totalPage:props.page+1)}} className="cursor-pointer rounded-full flex font-bolder items-center justify-center text-white bg-[#00C637] sm:text-4xl w-[25px] h-[25px]  sm:w-[30px] sm:h-[30px]"><BsArrowRightShort/></div>
        </div>
    </div>
  )
}

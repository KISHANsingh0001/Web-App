import React from 'react'
import Arrow from '../../assets/Arrow.png'


function Card1({title, img, text, buttonLink}) {
  return (
    <>
    <div className="">
        <div className="h-[448px] w-[435px] border border-black rounded-3xl p-4 m-5">
            <p className='md:text-4xl text-xl m-4 font-bold'>{title}</p>
            <p className='m-4'>{text}</p>
            <span className=' flex justify-between'>
               <span onClick={buttonLink} className='flex justify-center cursor-pointer m-5 items-end mb-10'> <img src={Arrow} alt=" button" /></span>
                <div className=""><img src={img} alt="" /></div>
            </span>
        </div>

    </div>
    </>
  )
}

export default Card1
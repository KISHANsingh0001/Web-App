import React from 'react'

function Card2({title,img,desc }) {
  return (
    <div className="max-w-[420px] m-4 ">
        <div className="flex  flex-col  items-center gap-4">
            <span className="text-3xl mt-8  text-white  ">{title}</span>
            <span><img src={img} alt="image" className='max-w-[400px]' /></span>
            <span className='text-white text-xl'>{desc}</span>
        </div>
    </div>
  )
}

export default Card2
import React from 'react'
import Card2 from './ui/Card2'
import img1 from '../assets/Rimg1.png'
import img2 from '../assets/Rimg2.png'
import img3 from '../assets/Rimg3.png'


function Banner() {
  return (
   <>
   <div className="my-8 p-5 pb-10  bg-blue-800 min-h-[500px] overflow-hidden">
  
    <span className='md:m-10 text-2xl  md:text-4xl text-white font-semibold'>What almost all parents go through</span>
    <div className="md:flex-row flex flex-col justify-between p-10 gap-4">
      <Card2  title={"1.Ignorance"} img={img1} desc={"Because of lack of awareness parents go through denial phase"}/>
      <Card2  title={"2.Denial"} img={img2} desc={"No this cannot happen to me or my child :("}/>
      <Card2  title={"3.Late Acceptance"} img={img3} desc={"When signs become more evident, then parents accept but its too late "}/>
    </div>
   </div>
   </>
  )
}

export default Banner
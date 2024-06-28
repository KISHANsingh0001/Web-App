import React from "react";
import Txt1 from "../assets/Txt1.png";
import HomeImg1 from "../assets/HomeImg1.png";
import RServices from "./RServices";
function Body() {
  return(
    <div className="BodyOuter">
      <div className="flex flex-col mt-20 justify-center items-center gap-4 min-w-full">
        <span className="text-5xl font-bold text-purple-500">Being Neurodivergent is</span>
        <span><img src={Txt1} alt=" NOT EASY" /></span>
        <span><div className="BtTFA p-2 bgBT1 text-white rounded-lg cursor-pointer font-semibold">Take Free Assessment</div></span>
        <span ><img src={HomeImg1} alt="img2" className=" my-7" /></span>
      </div>
      <RServices />
    </div>
  );
}

export default Body;

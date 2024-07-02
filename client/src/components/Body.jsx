import React from "react";
import Txt1 from "../assets/Txt1.png";
import HomeImg1 from "../assets/HomeImg1.png";
import RServices from "./RServices";
import AutismServices from "./AutismServices";
import Banner from "./Banner";
import NotAlone from "./NotAlone";
import AssessmentOffer from "./AssesmentOffer";
import OurReccomendations from "./OurRecommendations";
import Auth from "./Auth";
function Body() {
  const HomeChild = ()=>{
    return(
      <div className="BodyOuter ">
      <div className="flex flex-col md:mt-20 justify-center items-center gap-4 ">
        <span className="md:text-5xl text-3xl mt-2 text-center font-poppins text-purple-500 ">
        Being Autistic & ADHDer is not easy
        </span>
        <span className="FontA1 md:text-6xl text-4xl p-4 mb-4">
         <p>We got you!</p>
        </span>
        <span>
          <div className=" p-2 bgBT1 hover:bg-green-700  text-white rounded-lg cursor-pointer font-semibold">
            Take Free Assessment
          </div>
        </span>
        <span>
          <img src={HomeImg1} alt="img2" className=" my-7 md:max-w-[620px] mx-[10%] max-w-[80%]" />
        </span>
      </div>
      <RServices />
      <NotAlone />
      <AssessmentOffer />
      <AutismServices />
      <Banner />
      <OurReccomendations />
      <Auth />
    </div>
    )
  }
  return (
    <div className=" ">
   <HomeChild />
    </div>
  );
}

export default Body;

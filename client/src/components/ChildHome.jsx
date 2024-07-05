import React, { useState } from "react";
import HomeImg1 from "../assets/HomeImg1.png";
import RServices from "./RServices";
import ChildAutismServices from "./ChildAutismServices";
import Banner from "./Banner";
import NotAlone from "./NotAlone";
import OurReccomendations from "./OurRecommendations";
import ChildSufferings from "./ChildSuffering";
import ParentAssesmentOffer from './ParentAssesmentOffer'
import Blogs from "./Blogs";
import Assessment from "./Assessment";

function ChildHome() {
  return (
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
          <img
            src={HomeImg1}
            alt="img2"
            className=" my-7 md:max-w-[620px] mx-[10%] max-w-[80%]"
          />
        </span>
      </div>
      <RServices />
      <NotAlone />
      <ParentAssesmentOffer />
      <ChildAutismServices />
      <ChildSufferings />
      <Banner />
      <OurReccomendations />
      <Blogs />
    
    </div>
  );
}

export default ChildHome;

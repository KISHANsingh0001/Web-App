import React from "react";
import NotAlone from "./NotAlone";
import ParentAssesmentOffer from "./ParentAssesmentOffer";
import Banner from "./Banner";
import OurReccomendations from "./OurRecommendations";
import AutismServices from "./AutismServices";
import ParentSufferings from "./ParentsSuffering";

function ParentHome() {
  return (
    <div className="BodyOuter ">
      <div className="flex flex-col md:mt-20 justify-center items-center gap-4 ">
        <span className="md:text-5xl text-3xl mt-2 text-center font-poppins text-purple-500 ">
          Raising Neurodivergent child is not easy
        </span>
        <span className="FontA1 md:text-6xl text-4xl p-4 mb-4">
          <p>We got you!</p>
        </span>
        <span>
          <div className=" p-2 bgBT1 hover:bg-green-700  text-white rounded-lg cursor-pointer font-semibold">
            Take Free Assessment
          </div>
        </span>
      </div>
      <NotAlone />
      <ParentAssesmentOffer />
      <AutismServices />
      <ParentSufferings />
      <Banner />
      <OurReccomendations />
    </div>
  );
}

export default ParentHome;

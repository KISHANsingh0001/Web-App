import React from "react";
import OurReccomendationCard from "./cards/OurRecommendationCard";
import reccomendationCardImg from "../assets/ourRecommendationCardImg.jpg";

const OurReccomendations = () => {
  return (
    <div className="ourReccomendationsContainer my-14">
      <div className="flex justify-center items-center flex-col">
        <span className="grid justify-center content-center text-5xl font-poppins font-semibold text-medium-light-shade-magenta h-14">
          Our recommendation
        </span>
      </div>
      {/* <div className=" flex justify-center items-center mt-10"></div> */}
      <div className="flex justify-center items-center mt-10">
        <OurReccomendationCard
          img={reccomendationCardImg}
          title={
            "We recommend you reading the book written by a 13 years old individual who is autistic and non verbal"
          }
        />
      </div>
    </div>
  );
};

export default OurReccomendations;

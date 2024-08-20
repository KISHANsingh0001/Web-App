
import React from "react";
import OurReccomendationCard from "./cards/OurRecommendationCard";
import reccomendationCardImg from "../assets/ourRecommendationCardImg.jpg";

const OurReccomendations = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-12">
<div className="flex justify-center items-center flex-col">
  <span className="text-4xl md:text-5xl font-bold text-black text-center">
    Our recommendation
  </span>
</div>
      <div className="flex justify-center items-center mt-10">
        <OurReccomendationCard
          img={reccomendationCardImg}
          title={
            "We recommend you reading the book written by a 13 years old individual who is autistic and non-verbal"
          }
        />
      </div>
    </div>
  );
};

export default OurReccomendations;
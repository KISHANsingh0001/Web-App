import React from "react";

const OurReccomendationCard = ({ img, title, buttonLink }) => {
  return (
    <div className="card w-[1003px] h-[448px] bg-white lg:card-side border border-black rounded-[40px] shadow-xl px-5">
      <figure>
        <img
          className="w-[415px] h-[408px] rounded-[40px]"
          src={img}
          alt={`${img}`}
        />
      </figure>
      <div className="card-body flex-col justify-center">
        <div className="text-black font-poppins font-bold h-[204px] w-[508px] text-4xl">
          {title}
        </div>
        <span
          onClick={buttonLink}
          className="font-poppins font-semibold h-7 text-lg text-know-more"
        >
          Know more
        </span>
      </div>
    </div>
  );
};

export default OurReccomendationCard;

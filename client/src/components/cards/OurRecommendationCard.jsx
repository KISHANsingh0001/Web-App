import React from "react";

const OurReccomendationCard = ({ img, title, buttonLink }) => {
  return (
    <div className="card w-full flex flex-col md:flex-row h-[448px] bg-white lg:card-side border border-black rounded-[40px] shadow-xl px-5">
      <figure className="md:block hidden">
        <img
          className="w-[415px] h-[408px] p-4 rounded-[40px]"
          src={img}
          alt={`${img}`}
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div className="text-black font-poppins mt-14 font-bold w-full md:w-[508px] text-4xl md:text-4xl">
          {title}
          <br />
          <span
          onClick={buttonLink}
          className="font-poppins font-semibold h-7 text-lg text-know-more"
        >
          Know more
        </span>
        </div>
      </div>
    </div>
  );
};

export default OurReccomendationCard;

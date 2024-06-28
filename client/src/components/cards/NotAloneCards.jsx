import React from "react";

const NotAloneCards = ({ img, title, buttonLink }) => {
  return (
    <div className="h-[327px] w-[321px] border border-black rounded-[40px] px-8 pb-8 pt-14 m-5">
      <div className="numericImg">
        <img src={img} alt={`${img}`} />
      </div>
      <p className="text-3xl mt-6 mb-3 text-black font-bold">{title}</p>
      <span
        onClick={buttonLink}
        className="font-poppins font-semibold h-7 text-lg text-know-more"
      >
        Know more
      </span>
    </div>
  );
};

export default NotAloneCards;

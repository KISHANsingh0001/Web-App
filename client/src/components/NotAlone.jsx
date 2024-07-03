import React from "react";
import NotAloneCard from "./cards/NotAloneCards";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";

const NotAlone = () => {
  return (
    <>
      <div className="notAloneContainer my-14">
        <div className="flex justify-center items-center flex-col">
          <span className="grid justify-center content-center text-4xl font-poppins font-semibold text-medium-light-shade-magenta h-14">
            You're not alone at Leeza
          </span>
          <span className=" grid justify-center content-center text-topaz mt-5 text-base font-poppins font-medium h-8">
            From fears to freedom, from babbling to speech, we Leeza helps you
            get there
          </span>
        </div>
        <div className=" flex justify-center flex-wrap mt-10">
          <NotAloneCard title={"Take Free Autism Assessment"} img={one} />
          <NotAloneCard
            title={"Book Your Formal Diagnosis Assessment"}
            img={two}
          />
          <NotAloneCard title={"Therapy And Training Program"} img={three} />
          <NotAloneCard title={"Re Assessment"} img={four} />
        </div>
      </div>
    </>
  );
};

export default NotAlone;

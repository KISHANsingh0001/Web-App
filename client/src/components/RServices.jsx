import React from "react";
import Card1 from "./ui/Card1";
import img1 from "../assets/cardimg1.png";
import img2 from "../assets/cardimg2.png";
import img3 from "../assets/cardimg3.png";

function RServices() {
  return (
    <>
      <div className="ServicesOuter my-8 overflow-hidden" id="About">
        <div className="flex justify-center items-center flex-col">
          <span className="text-3xl font-poppins text-medium-light-shade-magenta font-semibold ">
            Our Services
          </span>
          <span className="text-lg text-slate-500 mt-5 flex flex-col text-center">
            <p>
              We provide to you the best choices for you. Adjust it to your
              needs and make sure your undergo treatment with our highly{" "}
            </p>
            <p>
              qualified doctors you can consult with us which type of service is
              suitable for your health
            </p>
          </span>
        </div>
        <div className=" flex justify-between m-[5%] flex-col md:flex-row items-center mt-10">
          <Card1
            title={"Take autism Assessment"}
            text={"Get the screening done and know the chances of Autism  "}
            img={img1}
          />
          <Card1
            title={"Book diagnosis assessment"}
            text={
              "Book your autism diagnosis assessment to confirm the screening results. done by a psychologist. "
            }
            img={img2}
          />
          <Card1
            title={"Start Therapy"}
            text={
              "We provide therapy at your home, at therapy center (online & offline) "
            }
            img={img3}
          />
        </div>
      </div>
    </>
  );
}

export default RServices;

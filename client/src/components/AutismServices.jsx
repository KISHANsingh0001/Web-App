import React from "react";
import img1 from "../assets/Frame68.png";
import img2 from "../assets/Frame69.png";
import img3 from "../assets/Frame70.png";
import img4 from "../assets/Frame71.png";

function AutismServices() {
  return (
    <>
      <div className="AutismServicesOuter mb-10 ">
        <span className="text-medium-light-shade-magenta font-poppins text-4xl  flex justify-center my-14 text-center font-bold">
          Autism services
        </span>
        <div className="online mx-[3%]">
          <span className="text-4xl my-5 font-bold">Online Mode</span>
          <div class="gradient-line my-5 mb-10"></div>
          <div className="crad flex mb-16 flex-col md:flex-row ">
            <span>
              <img src={img1} alt="img1" className=" max-w-[350px] ml-8  m-2" />
            </span>
            <div className="mx-16">
              <span>
                <p className="text-3xl font-bold my-5">Benefits</p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3 ">
                  <li>Provides an individual plan to support the child</li>
                  <li>1 on 1 support</li>
                  <li>
                    Encourages to perform therapies within professional guidance
                  </li>
                  <li>Eliminates dependency</li>
                  <li>Economical</li>
                </ul>
              </span>
              <button className="px-7 md:mt-20 md:mx-5 mt-5 py-2 rounded-xl bg-[#29A167] cursor-pointer  text-white">
                Book Now
              </button>
            </div>
          </div>

          <div className="crad flex mb-16 flex-col md:flex-row  ">
            <span>
              <img src={img2} alt="img1" className="max-w-[350px] ml-8  m-2" />
            </span>
            <div className="mx-16">
              <span>
                <p className="text-3xl font-bold my-5">Benefits</p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3 ">
                  <li>Therapies with Professional Guidance</li>
                  <li>Eliminates dependency</li>
                  <li>Promotes in dependency in the long term</li>
                  <li>Economical</li>
                </ul>
              </span>
              <button className="px-7 md:mt-20 md:mx-5 mt-5 py-2 rounded-xl bg-[#29A167] cursor-pointer  text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="offline mx-[3%]">
          <span className="text-4xl my-5 font-bold">Offline Mode</span>
          <div class="gradient-line my-5 mb-10"></div>

          <div className="crad flex mb-16 flex-col md:flex-row ">
            <span>
              <img src={img3} alt="img1" className="max-w-[350px] ml-8  m-2" />
            </span>
            <div className="mx-16">
              <span>
                <p className="text-3xl font-bold my-5">Benefits</p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3  ">
                  <li>Therapy at your place</li>
                  <li>No hassle of visiting therapy centers</li>
                  <li>
                    The progress will be tracked in our progress tracking system
                  </li>
                </ul>
              </span>
              <button className="px-7 md:mt-20 md:mx-5 mt-5 py-2 rounded-xl bg-[#29A167] cursor-pointer  text-white">
                Book Now
              </button>
            </div>
          </div>
          <div className="crad flex mb-16 flex-col md:flex-row ">
            <span>
              <img src={img4} alt="img1" className="max-w-[350px] ml-8  m-2" />
            </span>
            <div className="mx-16">
              <span>
                <p className="text-3xl font-bold my-5">Benefits</p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3 ">
                  <li>Partnered Therapy center</li>
                  <li>encouraged to join therapy sessions</li>
                  <li>
                    The progress will be tracked in our progress tracking system
                  </li>
                </ul>
              </span>
              <button className="px-7 md:mt-20 md:mx-5 mt-5 py-2 rounded-xl bg-[#29A167] cursor-pointer  text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutismServices;

import React from "react";
import img1 from "../assets/Frame68.png";
import img2 from "../assets/Frame69.png";
import img3 from "../assets/Frame70.png";
import img4 from "../assets/Frame71.png";

function ChildAutismServices() {
  return (
    <>
      <div className="AutismServicesOuter mb-10 ">
        <span className="text-medium-light-shade-magenta font-poppins text-4xl  flex justify-center my-14 text-center font-bold">
          Autism services
        </span>
        <div className="online mx-[3%]">
          <span className="text-4xl my-5 font-bold text-[#EB5D1E]">
            Online Mode
          </span>
          <div class="gradient-line my-5 mb-10"></div>
          <div className="crad flex mb-16 flex-col md:flex-row ">
            <span>
              {/* <img src={img1} alt="img1" className=" max-w-[350px] ml-8  m-2" /> */}
            </span>
            <div className="mx-16">
              <span>
                <p className="text-3xl font-bold my-5 text-[#EB5D1E]">
                  Benefits
                </p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3 ">
                  <li>Gets you the confirmation</li>
                  <li>1 on 1 support</li>
                  <li>Maintains anonymity</li>
                  <li>Proper support and accomodation</li>
                  <li>Economical</li>
                </ul>
              </span>
              <button className="btn text-white bg-[#29A167] border-[#29A167] hover:border-[#29A167] rounded-[10px] p-6 h-7 font-poppins font-medium text-xl min-h-0 hover:bg-[#29A167] flex-nowrap mb-3 mt-7">
                Book Now
              </button>
            </div>
          </div>

          <div className="crad flex mb-16 flex-col md:flex-row  ">
            <span>
              {/* <img src={img2} alt="img1" className="max-w-[350px] ml-8  m-2" /> */}
            </span>
            <div className="mx-16">
              <span>
                <p className="text-3xl font-bold my-5 text-[#EB5D1E]">
                  Benefits
                </p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3 ">
                  <li>Therapies with Professional Guidance</li>
                  <li>Eliminates dependency</li>
                  <li>Promotes in dependency in the long term</li>
                  <li>Economical</li>
                </ul>
              </span>
              <button className="btn text-white bg-[#29A167] border-[#29A167] hover:border-[#29A167] rounded-[10px] p-6 h-7 font-poppins font-medium text-xl min-h-0 hover:bg-[#29A167] flex-nowrap mb-3 mt-7">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="offline mx-[3%]">
          <span className="text-4xl my-5 font-bold text-[#EB5D1E]">
            Offline Mode
          </span>
          <div class="gradient-line my-5 mb-10"></div>

          <div className="crad flex mb-16 flex-col md:flex-row ">
            <span>
              {/* <img src={img3} alt="img1" className="max-w-[350px] ml-8  m-2" /> */}
            </span>
            <div className="mx-16">
              <span>
                <p className="text-3xl font-bold my-5 text-[#EB5D1E]">
                  Benefits
                </p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3  ">
                  <li>Therapy at your place</li>
                  <li>No hassle of visiting therapy centers</li>
                  <li>
                    The progress will be tracked in our progress tracking system
                  </li>
                </ul>
              </span>
              <button className="btn text-white bg-[#29A167] border-[#29A167] hover:border-[#29A167] rounded-[10px] p-6 h-7 font-poppins font-medium text-xl min-h-0 hover:bg-[#29A167] flex-nowrap mb-3 mt-7">
                Book Now
              </button>
            </div>
          </div>
          <div className="crad flex mb-16 flex-col md:flex-row ">
            <span>
              {/* <img src={img4} alt="img1" className="max-w-[350px] ml-8  m-2" /> */}
            </span>
            <div className="mx-16">
              <span>
                <p className="text-3xl font-bold my-5 text-[#EB5D1E]">
                  Benefits
                </p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3 ">
                  <li>Partnered Therapy center</li>
                  <li>encouraged to join therapy sessions</li>
                  <li>
                    The progress will be tracked in our progress tracking system
                  </li>
                </ul>
              </span>
              <button className="btn text-white bg-[#29A167] border-[#29A167] hover:border-[#29A167] rounded-[10px] p-6 h-7 font-poppins font-medium text-xl min-h-0 hover:bg-[#29A167] flex-nowrap mb-3 mt-7">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChildAutismServices;

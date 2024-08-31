import React, { useRef } from "react";
import img1 from "../assets/Frame68.png";
import img2 from "../assets/Frame69.png";
import img3 from "../assets/Frame70.png";
import img4 from "../assets/Frame71.png";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function ChildAutismServices() {
  // Refs for the online and offline sections
  const onlineRef = useRef(null);
  const offlineRef = useRef(null);

  // Check if the online section is in view
  const onlineInView = useInView(onlineRef, { once: true });
  // Check if the offline section is in view
  const offlineInView = useInView(offlineRef, { once: true });

  return (
    <>
      <div className="AutismServicesOuter mb-10">
        <span className="text-4xl font-poppins font-bold flex justify-center my-14 text-center md:text-4xl sm:text-3xl xs:text-2xl">
          Autism Services
        </span>
        <div className="online mx-[3%]" ref={onlineRef}>
          <span className="text-4xl my-5 font-bold text-[#CB6BE5]">
            Online Mode
          </span>
          <motion.div
            className="my-5 mb-10"
            style={{
              backgroundColor: "#F5B400",
              height: "4px",
              width: "100%",
              transformOrigin: "50% 50%", // Scale from the center
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: onlineInView ? 1 : 0 }} // Animate based on whether the online section is in view
            transition={{ duration: 2 }}
          />
          <div className="crad flex mb-16 flex-col md:flex-row">
            <span>
              <img
                src={img1}
                alt="img1"
                className="max-w-[350px] ml-8 m-2 border-none"
              />
            </span>
            <div className="mx-8 md:mx-16 mt-4 md:mt-0">
              <span>
                <p className="text-3xl font-bold my-5 text-[#EB5D1E]">
                  Benefits
                </p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3">
                  <li>Gets you the confirmation</li>
                  <li>1 on 1 support</li>
                  <li>Maintains anonymity</li>
                  <li>Proper support and accommodation</li>
                  <li>Economical</li>
                </ul>
              </span>
              <button className="mt-6 bg-[#29A167] text-white rounded-lg px-6 py-2 font-poppins font-medium text-xl hover:bg-green-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>

          <div className="crad flex mb-16 flex-col md:flex-row">
            <span>
              <img
                src={img2}
                alt="img2"
                className="max-w-[350px] ml-8 m-2 border-none"
              />
            </span>
            <div className="mx-8 md:mx-16 mt-4 md:mt-0">
              <span>
                <p className="text-3xl font-bold my-5 text-[#EB5D1E]">
                  Benefits
                </p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3">
                  <li>Therapies with Professional Guidance</li>
                  <li>Eliminates dependency</li>
                  <li>Promotes independence in the long term</li>
                  <li>Economical</li>
                </ul>
              </span>
              <button className="mt-6 bg-[#29A167] text-white rounded-lg px-6 py-2 font-poppins font-medium text-xl hover:bg-green-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="offline mx-[3%]" ref={offlineRef}>
          <span className="text-4xl my-5 font-bold text-[#CB6BE5]">
            Offline Mode
          </span>
          <motion.div
            className="my-5 mb-10"
            style={{
              backgroundColor: "#F5B400",
              height: "4px",
              width: "100%",
              transformOrigin: "50% 50%",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: offlineInView ? 1 : 0 }}
            transition={{ duration: 2 }}
          />

          <div className="crad flex mb-16 flex-col md:flex-row">
            <span>
              <img
                src={img3}
                alt="img3"
                className="max-w-[350px] ml-8 m-2 border-none"
              />
            </span>
            <div className="mx-8 md:mx-16 mt-4 md:mt-0">
              <span>
                <p className="text-3xl font-bold my-5 text-[#EB5D1E]">
                  Benefits
                </p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3">
                  <li>Therapy at your place</li>
                  <li>No hassle of visiting therapy centers</li>
                  <li>
                    The progress will be tracked in our progress tracking system
                  </li>
                </ul>
              </span>
              <button className="mt-6 bg-[#29A167] text-white rounded-lg px-6 py-2 font-poppins font-medium text-xl hover:bg-green-700 transition-colors duration-300">
                Book Now
              </button>
            </div>
          </div>

          <div className="crad flex mb-16 flex-col md:flex-row">
            <span>
              <img
                src={img4}
                alt="img4"
                className="max-w-[350px] ml-8 m-2 border-none"
              />
            </span>
            <div className="mx-8 md:mx-16 mt-4 md:mt-0">
              <span>
                <p className="text-3xl font-bold my-5 text-[#EB5D1E]">
                  Benefits
                </p>
                <ul className="md:text-2xl md:ml-10 flex flex-col gap-3">
                  <li>Partnered Therapy center</li>
                  <li>Encouraged to join therapy sessions</li>
                  <li>
                    The progress will be tracked in our progress tracking system
                  </li>
                </ul>
              </span>
              <button className="mt-6 bg-[#29A167] text-white rounded-lg px-6 py-2 font-poppins font-medium text-xl hover:bg-green-700 transition-colors duration-300">
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

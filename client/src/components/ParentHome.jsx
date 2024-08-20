import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotAlone from "./NotAlone";
import HomeImg2 from "../assets/HomeImg2.png";
import ChildAssesmentOffer from "./ChildAssesmentOffer";
import Banner from "./Banner";
import OurReccomendations from "./OurRecommendations";
import AutismServices from "./AutismServices";
import ParentSufferings from "./ParentsSuffering";
import Blogs from "./Blogs";
import Nav from "./Nav";
import Footer from "./Footer";

function ParentHome() {
  const assessmentOfferRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAssessment && assessmentOfferRef.current) {
      assessmentOfferRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  const handleTakeAssessment = () => {
    if (assessmentOfferRef.current) {
      assessmentOfferRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Nav />
      <div className="BodyOuter">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-10">
          <div className="text-container md:flex-1 text-center p-4">
            <span className="md:text-5xl text-3xl mt-2 font-poppins text-[#CB6BE5]">
              Raising a Neurodivergent child is not easy
            </span>
            <div className="mb-2" />
            <span className="text-4xl md:text-6xl text-[#F5B400] font-roboto-slab font-bold text-center p-4 mb-4">
              <p className="text-shadow-md">We got you!</p>
            </span>
            <div className="mb-2" />
            <button onClick={handleTakeAssessment}>
              <div className="p-2 bgBT1 hover:bg-green-700 text-white rounded-lg cursor-pointer font-semibold">
                Take Free Assessment
              </div>
            </button>
          </div>
          <div className="image-container md:flex-1 flex justify-center p-4">
            <img
              src={HomeImg2}
              alt="img2"
              className="md:max-w-[400px] max-w-[80%] md:w-auto"
            />
          </div>
        </div>
        <NotAlone />
        <div id="assessment-offer" ref={assessmentOfferRef}>
          <ChildAssesmentOffer />
        </div>
        <AutismServices />
        <ParentSufferings />
        <Banner />
        <OurReccomendations />
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default ParentHome;

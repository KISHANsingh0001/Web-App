import React, { useRef } from "react";
import HomeImg1 from "../assets/HomeImg1.png";
import ChildAutismServices from "./ChildAutismServices";
import Banner from "./Banner";
import NotAlone from "./NotAlone";
import OurReccomendations from "./OurRecommendations";
import ChildSufferings from "./ChildSuffering";
import ParentAssesmentOffer from './ParentAssesmentOffer';
import Blogs from "./Blogs";
import Nav from "./Nav";
import Footer from "./Footer";

function ChildHome() {
  const assessmentOfferRef = useRef(null);

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
            <span className="md:text-5xl text-3xl mt-2 font-poppins text-purple-500">
              Being Autistic & ADHDer is not easy
            </span>
            <div className="mb-2" />
            <span className="text-4xl md:text-6xl font-roboto-slab font-bold text-[#F5B400] p-4 mb-4">
              <p className="text-shadow-md">We got you!</p>
            </span>
            <div className="mb-2" />
            <button onClick={handleTakeAssessment}>
              <div className="p-2 bg-[#29A167] hover:bg-[#29A167]/90 text-white rounded-lg cursor-pointer font-semibold">
                Take Free Assessment
              </div>
            </button>
          </div>
          <div className="image-container md:flex-1 flex justify-center p-4">
            <img
              src={HomeImg1}
              alt="Home Image"
              className="md:max-w-[400px] max-w-[60%] w-auto"
            />
          </div>
        </div>
        <NotAlone />
        <div id="assessment-offer">
          <ParentAssesmentOffer />
        </div>
        <ChildAutismServices />
        <ChildSufferings />
        <Banner />
        <OurReccomendations />
        <Blogs />
      </div>
      <Footer />
    </div>
  );
}

export default ChildHome;

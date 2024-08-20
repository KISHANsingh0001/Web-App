import React from "react";
import NotAloneCards from "./cards/NotAloneCards";
import one from "../assets/assessmentcardsimg/freeassessment.png";
import two from "../assets/assessmentcardsimg/diagnosisAssessment.png";
import three from "../assets/assessmentcardsimg/trainingProgram.png";
import four from "../assets/assessmentcardsimg/bookConsultation.png";

const NotAlone = () => {
  return (
    <div className="my-14 py-10 px-5 pt-16 flex flex-col items-center" id="NotAlone">
      <div className="flex justify-center items-center flex-col text-center">
        <span className="text-4xl font-poppins font-semibold ">
          You're not alone at Leeza
        </span>
        <span className="mt-5 text-base font-poppins font-medium">
          From fears to freedom, from babbling to speech, Leeza helps you get there.
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8 mt-10 justify-center max-w-4xl w-full">
        <NotAloneCards
          title={"Take Free Autism Assessment"}
          img={one}
          buttonLink="/assessment"
          step={1}
          description={"Get an initial understanding of autism signs with our free assessment."}
          buttonText="Take Assessment"
        />
        <NotAloneCards
          title={"Book Consultation"}
          img={four}
          buttonLink="/bookconsultation"
          step={2}
          description={"Schedule a consultation with our specialists to discuss your needs."}
          buttonText="Book Now"
        />
        <NotAloneCards
          title={"Book Your Formal Diagnosis Assessment"}
          img={two}
          buttonLink="/diagnosisassesment"
          step={3}
          description={"Receive a comprehensive evaluation to understand your diagnosis."}
          buttonText="Book Diagnosis"
        />
        <NotAloneCards
          title={"Therapy And Training Program"}
          img={three}
          buttonLink="/scheduletherapy"
          step={4}
          description={"Join our therapy programs designed to support ongoing development."}
          buttonText="Enroll Now"
        />
      </div>
    </div>
  );
};

export default NotAlone;

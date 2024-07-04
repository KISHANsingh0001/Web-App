import React from "react";
import AssessmentOfferCards from "./cards/AssesmentOfferCards";

const ParentAssesmentOffer = () => {
  return (
    <div className="assesmentOfferContainer my-14" id="Assessment">
      <div className="flex justify-center items-center flex-col">
        <span className="grid justify-center content-center text-4xl font-poppins font-semibold text-medium-light-shade-magenta h-14">
          Assessments we offer
        </span>
        <span className=" grid justify-center content-center text-topaz mt-5 text-base font-poppins font-medium h-8">
          Take our assessments and get to know yourself
        </span>
      </div>
      <div className=" flex justify-center flex-wrap mt-10">
        
               <AssessmentOfferCards
          title={"Autism Quotient(AQ)"}
          age={"AGE 18+"}
          text={"A quick referral guide to adults with suspected autism"}
          id="ADULT_AQ_10_1"
        />
        <AssessmentOfferCards
          title={"ASRS-5"}
          age={"AGE 18+"}
          text={
            "The Adult ADHD Self-Report Scale for DSM-5 (ASRS-5) is a self-report screening scale for attention deficit hyperactivity disorder (ADHD) in adults. It’s the updated version of the ASRS v1.1"
          }
        />
        <AssessmentOfferCards
          title={"AQ-10"}
          age={"AGE 18+"}
          text={
            "The AQ-10 Autism Spectrum Quotient (AQ-10) is a quick questionnaire that primary care practitioners can use to see if a person should be referred for an autism assessment."
          }
            id="ADULT_AQ_10_1"
        />
        <AssessmentOfferCards
          title={"CAT-Q"}
          age={"AGE 18+"}
          text={
            "The Camouflaging Autistic Traits Questionnaire gives a measure of how much you camouflage your autistic proclivities. Note also that higher scores on the CAT-Q can also account for lower scores on other autism tests"
          }
            id="ADULT_AQ_10_1"
        />
        <AssessmentOfferCards
          title={"Repetitive Behavioral Questions"}
          age={"AGE 18+"}
          text={
            "The Adult Repetitive Behaviors Questionnaire-2 (RBQ-2A) is a self-administered questionnaire that measures restricted and repetitive behaviors in adults."
          }
            id="ADULT_AQ_10_1"
        />
      </div>
    </div>
  );
};

export default ParentAssesmentOffer;

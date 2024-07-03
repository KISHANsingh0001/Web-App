import React from "react";
import AssessmentOfferCards from "./cards/AssesmentOfferCards";

const ParentAssesmentOffer = () => {
  return (
    <div className="assesmentOfferContainer my-14">
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
          title={"Autism Spectrum Quotient(AQ)"}
          age={"AGE 4-11"}
          text={
            "A quick referral guide for parents to complete about a child aged 4-11 years with suspected autism who does not have a learning disability. Its is developed by NHS (National Institute of Health Research)"
          }
        />

        <AssessmentOfferCards
          title={"Autism Spectrum Quotient(AQ)"}
          age={"AGE 12-15"}
          text={
            "A quick referral guide for parents to complete about a teenager aged 12-15 years old with suspected autism who does not have a learning disability. Its is developed by NHS (National Institute of Health Research)"
          }
        />
      </div>
    </div>
  );
};

export default ParentAssesmentOffer;

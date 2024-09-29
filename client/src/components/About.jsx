import React from "react";
import Nav from "./Nav";

function About() {
  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Video section */}
          <div className="w-full md:w-1/2">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/gPBWH_jr_yI?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=gPBWH_jr_yI"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#CB6BE5] mb-4">
              Understanding Autism and the Importance of Early Intervention
            </h2>
            <p className="text-lg mb-4">
              Autism spectrum disorder (ASD) affects millions of people worldwide, with each individual experiencing a unique range of challenges related to communication, behavior, and social interaction. Early diagnosis and intervention are crucial for improving outcomes and helping individuals lead fulfilling lives. With the right support, children and adults with autism can overcome many of the obstacles they face, making early assessment essential.
            </p>
            <p className="text-lg mb-4">
              At <strong>Leeza</strong>, we recognize the significance of timely autism assessments and interventions. Leeza is the first place to turn to for expert guidance, personalized support, and the latest therapeutic solutions. Our specialists are dedicated to ensuring that every individual with autism has access to the care and tools they need to thrive in today’s world.
            </p>
            <p className="text-lg">
              Whether you're seeking a diagnosis or looking for advanced support and resources, Leeza is your trusted partner on this journey. Together, we can make a lasting impact on the lives of those affected by autism.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

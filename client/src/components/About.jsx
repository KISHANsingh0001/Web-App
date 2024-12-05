// import React from "react";
// import Nav from "./Nav";

// function About() {
//   return (
//     <>
//       <Nav />
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Video section */}
//           <div className="w-full md:w-1/2">
//             <iframe
//               className="w-full aspect-video rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/gPBWH_jr_yI?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=gPBWH_jr_yI"
//               title="YouTube video"
//               allowFullScreen
//             ></iframe>
//           </div>

//           {/* Text section */}
//           <div className="w-full md:w-1/2 flex flex-col justify-center">
//             <h2 className="text-3xl font-bold text-[#CB6BE5] mb-4">
//               Understanding Autism and the Importance of Early Intervention
//             </h2>
//             <p className="text-lg mb-4">
//               Autism spectrum disorder (ASD) affects millions of people worldwide, with each individual experiencing a unique range of challenges related to communication, behavior, and social interaction. Early diagnosis and intervention are crucial for improving outcomes and helping individuals lead fulfilling lives. With the right support, children and adults with autism can overcome many of the obstacles they face, making early assessment essential.
//             </p>
//             <p className="text-lg mb-4">
//               At <strong>Leeza</strong>, we recognize the significance of timely autism assessments and interventions. Leeza is the first place to turn to for expert guidance, personalized support, and the latest therapeutic solutions. Our specialists are dedicated to ensuring that every individual with autism has access to the care and tools they need to thrive in today’s world.
//             </p>
//             <p className="text-lg">
//               Whether you're seeking a diagnosis or looking for advanced support and resources, Leeza is your trusted partner on this journey. Together, we can make a lasting impact on the lives of those affected by autism.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;

// import React from "react";
// import Nav from "./Nav";

// const firstTeamProfiles = [
//   { name: "Kausar khan", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-1.jpg" },
//   { name: "Maryam", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-2.jpg" },
//   { name: "Rian ", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-3.jpg" },
//   // Add the rest of the profiles as needed...
// ];

// const secondTeamProfiles = [
//   { name: "Ella Thomas", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-11.jpg" },
//   { name: "Mia White", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-12.jpg" },
//   // Add the rest of the profiles as needed...
// ];

// // Reusable ProfileCard Component with Styling Adjustments
// const ProfileCard = ({ name, college, image }) => (
//   <div className="bg-white rounded-lg shadow-lg p-6 text-center mx-4 my-4 hover:shadow-xl transition-shadow">
//     <img src={image} alt={name} className="w-32 h-32 object-cover  mx-auto mb-4" />
//     <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
//     <p className="text-gray-500">{college}</p>
//   </div>
// );

// function About() {
//   return (
//     <>
//       <Nav />
//       <div className="bg-[#f1f5f9] min-h-screen">
//         <div className="container mx-auto px-4 py-8">
//           {/* Video and Text Section */}
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="w-full md:w-1/2">
//               <iframe
//                 className="w-full aspect-video rounded-lg shadow-lg"
//                 src="https://www.youtube.com/embed/gPBWH_jr_yI?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=gPBWH_jr_yI"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>

//             <div className="w-full md:w-1/2 flex flex-col justify-center">
//               <h2 className="text-3xl font-bold text-[#CB6BE5] mb-4">
//                 Understanding Autism and the Importance of Early Intervention
//               </h2>
//               <p className="text-lg mb-4">
//                 Autism spectrum disorder (ASD) affects millions of people worldwide, with each individual experiencing a unique range of challenges related to communication, behavior, and social interaction. Early diagnosis and intervention are crucial for improving outcomes and helping individuals lead fulfilling lives.
//               </p>
//               <p className="text-lg">
//                 At <strong>Leeza</strong>, we recognize the significance of timely autism assessments and interventions. Leeza is the first place to turn to for expert guidance, personalized support, and the latest therapeutic solutions.
//               </p>
//             </div>
//           </div>

//           {/* First Team Profiles Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-40  mt-48 mb-36">
//             {firstTeamProfiles.map((profile, index) => (
//               <ProfileCard key={index} {...profile} />
//             ))}
//           </div>

//           {/* Join Our Team Section */}
//           <div className="text-center mt-8 mb-12">
//             <button className="bg-gray-800 text-white py-2 px-4  text-lg">
//               Join our team!
//             </button>
//             <h3 className="text-2xl font-bold text-green-700 mt-4">Powered by the Finest!</h3>
//           </div>

//           {/* Second Team Profiles Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {secondTeamProfiles.map((profile, index) => (
//               <ProfileCard key={index} {...profile} />
//             ))}
//           </div>

//           {/* Awards and Recognition Section */}
//           <div className="text-center mt-12 mb-8">
//             <h2 className="text-3xl font-bold text-green-700 mb-4">AWARDS AND RECOGNITION</h2>
//             <div className="flex flex-wrap justify-center gap-8">
//               <img src="path/to/google-startups-logo.jpg" alt="Google for Startups" className="h-16" />
//               <img src="path/to/the-hindu-logo.jpg" alt="The Hindu" className="h-16" />
//               <img src="path/to/times-of-india-logo.jpg" alt="The Times of India" className="h-16" />
//               <img src="path/to/telangana-today-logo.jpg" alt="Telangana Today" className="h-16" />
//               <img src="path/to/amp-logo.jpg" alt="Association of Muslim Professionals" className="h-16" />
//             </div>
//           </div>

//           {/* Footer Section */}
//           <footer className="bg-gray-100 text-gray-700 py-8">
//             <div className="container mx-auto px-4">
//               <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-8">
//                 <div className="text-left">
//                   <img src="path/to/leeza-logo.jpg" alt="leeza Logo" className="h-8 mb-2" />
//                   <p>
//                     Registered not-for-profit organization u/s 8 of the
                     
                    
//                   </p>
//                   <p>Phone No: +91 111111111</p>
//                   <p>Email: support@leeza.app</p>
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-bold">Company</h4>
//                   <ul>
//                     <li>Corporate</li>
//                     <li>Blogs</li>
//                     <li>AI Wellness Buddy</li>
//                     <li>AI Therapist</li>
//                     <li>Contact us</li>
//                   </ul>
//                 </div>
//                 <div className="text-left">
//                   <h4 className="font-bold">Legal</h4>
//                   <ul>
//                     <li>Privacy & Policy</li>
//                     <li>Terms & Conditions</li>
//                     <li>Refund Policy</li>
//                     <li>Shipping Policy</li>
//                   </ul>
//                 </div>
//                 <div className="text-left">
//                   <img src="path/to/edventure-park-logo.jpg" alt="Edventure Park Logo" className="h-12" />
//                   <p>Incubated at Edventure Park</p>
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// }



import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

// Card data for Team Members (Meet Our Team)
const teamProfiles = [
  { name: "Aziz-ur-rahman", college: "Vageshwari College", image: "../src/assets/about/Aziz.png" },
  { name: "syed mohiuddin rafay", college: "St Joseph Degree & PG College", image: "../src/assets/about/Abdulrafay.png" },
  { name: "Mariyam ", college: "St Joseph Degree & PG College", image: "../src/assets/about/Mariyam.png" },
  { name: "Madhiha", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-3.jpg" },
  { name: "Hamza", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-4.jpg" },
  { name: "Hedayathuallah imamuddin", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-5.jpg" },
  { name: "Maaz", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-6.jpg" },
  { name: "sadia noor", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-7.jpg" },
  
  // { name: "Sam Smith", college: "St Joseph Degree & PG College", image: "path/to/profile-pic-9.jpg" },
];

// Card data for Powered by Finest section
const finestProfiles = [
  { name: "Emma Watson", college: "Oxford University", image: "../src/assets/about/1.png" },
  { name: "Liam Nelson", college: "Harvard University", image: "path/to/finest-pic-2.jpg" },
  { name: "Sophia Lee", college: "Stanford University", image: "path/to/finest-pic-3.jpg" },
  { name: "James Brown", college: "MIT", image: "path/to/finest-pic-4.jpg" },
  { name: "Olivia Davis", college: "Cambridge University", image: "path/to/finest-pic-5.jpg" },
  { name: "Ethan White", college: "Yale University", image: "path/to/finest-pic-6.jpg" },
];

// Profile Card for "Meet Our Team"
const ProfileCard = ({ name, college, image }) => (
  <div
    className="w-full bg-green-50 rounded-xl shadow-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 mb-6"
    style={{ height: "300px", width: "300px" }}
  >
    <img
      src={image}
      alt={name}
      className="h-2/3 w-full object-cover mb-4 rounded-lg"
    />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
    <p className="text-lg text-gray-600">{college}</p>
  </div>
);

// Profile Card for "Powered by Finest" with Hover Effect
const ImageCard = ({ name, college, image }) => (
  <div
    className="rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:brightness-110 duration-500"
    style={{ width: "300px", height: "350px" }}
  >
    <img
      src={image}
      alt={name}
      className="w-full h-3/4 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
    />
    <div className="text-center p-4 bg-white">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-lg text-gray-600">{college}</p>
    </div>
  </div>
);

// Awards and Recognition Card
const AwardCard = ({ logo, altText }) => (
  <div className="flex justify-center items-center">
    <img src={logo} alt={altText} className="h-12 mx-6" />
  </div>
);

function About() {
  return (
    <>
      <Nav />
      <div className="bg-[#f1f5f9] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Video and Text Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <iframe
                className="w-full aspect-video rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/gPBWH_jr_yI?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=gPBWH_jr_yI"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#CB6BE5] mb-4">
                Understanding Autism and the Importance of Early Intervention
              </h2>
              <p className="text-lg mb-4">
                Autism spectrum disorder (ASD) affects millions of people worldwide, with each individual experiencing a unique range of challenges related to communication, behavior, and social interaction. Early diagnosis and intervention are crucial for improving outcomes and helping individuals lead fulfilling lives.
              </p>
              <p className="text-lg">
                At <strong>Leeza</strong>, we recognize the significance of timely autism assessments and interventions. Leeza is the first place to turn to for expert guidance, personalized support, and the latest therapeutic solutions.
              </p>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div className="mb-56 mt-56">
            <h2 className="mb-10 text-3xl font-bold text-[#CB6BE5] text-center">
              Meet Our Team!
            </h2>
            <div className="flex flex-wrap justify-center gap-14 grid-cols-3">
              {teamProfiles.slice(0, 8).map((profile, index) => (
                <ProfileCard key={index} {...profile} />
              ))}
            </div>
          </div>

          {/* Powered by Finest Section */}
          <div className="text-center mt-12">
            <h3 className="text-3xl font-bold text-[#CB6BE5] mb-6">Powered by the Finest</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {finestProfiles.map((profile, index) => (
                <ImageCard key={index} {...profile} />
              ))}
            </div>
          </div>

          {/* Awards and Recognition Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6">Awards and Recognition</h3>
            <div className="flex justify-center gap-12 items-center">
              <AwardCard logo="path/to/google-logo.png" altText="Google for Startups" />
              <AwardCard logo="path/to/hindu-logo.png" altText="The Hindu" />
              <AwardCard logo="path/to/times-of-india-logo.png" altText="The Times of India" />
              <AwardCard logo="path/to/telangana-today-logo.png" altText="Telangana Today" />
              <AwardCard logo="path/to/amp-logo.png" altText="AMP" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;







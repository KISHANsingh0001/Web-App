import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import ChildHome from "./components/ChildHome";
import ParentHome from "./components/ParentHome";
import ScheduleDiagnosisAssesment from "./components/ScheduleDiagnosisAssesment";
import BookConsultation from "./components/BookConsultation";
import ScheduleTherapy from "./components/ScheduleTherapy";
import Assessment from "./components/Assessment";

function App1() {
  const Child = () => {
    return (
      <>
        {/* <Nav /> */}
        <ChildHome />
        <Footer />
      </>
    );
  };

  const Parent = () => {
    return (
      <>
        {/* <Nav /> */}
        <ParentHome />
        <Footer />
      </>
    );
  };

  const [content, setContent] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  const handleChildClick = () => {
    setContent("Child");
    setShowPopup(false);
  };

  const handleParentClick = () => {
    setContent("Parent");
    setShowPopup(false);
  };

  return (
    <>
      <div className=" ">
        <Nav />
        {showPopup && (
          <div className="popup min-h-screen flex justify-center items-center">
            <div className="popup-content border border-black  rounded-xl p-10 ">
              <h2 className=" text-3xl ">Select an Option</h2>
              <div className=" flex justify-between items-center gap-4 p-4 m-2 ">
                <button
                  onClick={handleChildClick}
                  className="border border-black hover:font-bold px-4 py-2 rounded-xl my-2"
                >
                  Adult
                </button>
            
                <button
                  onClick={handleParentClick}
                  className="border border-black hover:font-bold px-4 py-2 rounded-xl my-2"
                >
                  Parent
                </button>
              </div>
            </div>
          </div>
        )}
        {!showPopup && (content === "Parent" ? <Parent /> : <Child />)}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/home" element={<App1 />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/diagnosisassesment"
          element={<ScheduleDiagnosisAssesment />}
        />
        <Route path="/bookconsultation" element={<BookConsultation />} />
        <Route path="/scheduletherapy" element={<ScheduleTherapy />} />
        <Route path="/assessment/:id" element={<Assessment/>} />
      </Routes>
    </Router>
  );
}

export default App;

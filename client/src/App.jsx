import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import ChildHome from "./components/ChildHome";
import ParentHome from "./components/ParentHome";

function App1() {
  const Child = () => {
    return (
      <>
        <Nav />
        <ChildHome />
        <Footer />
      </>
    );
  };

  const Parent = () => {
    return (
      <>
        <Nav />
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
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Select an Option</h2>
              <div>
                <button
                  onClick={handleChildClick}
                  className="border border-black my-2"
                >
                  Child
                </button>
              </div>
              <div>
                <button
                  onClick={handleParentClick}
                  className="border border-black my-2"
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
      </Routes>
    </Router>
  );
}

export default App;

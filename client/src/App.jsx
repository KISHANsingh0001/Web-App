import { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Auth from "./components/Auth"

function App1() {
  return (
    <>
      <Nav />
      <Body />
      <Footer />
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

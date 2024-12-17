// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Auth1 from "./components/Auth1"
import ChildHome from "./components/ChildHome";
import ParentHome from "./components/ParentHome";
import HomePage from "./components/HomePage";
import ScheduleDiagnosisAssesment from "./components/ScheduleDiagnosisAssesment";
import BookConsultation from "./components/BookConsultation";
import ScheduleTherapy from "./components/ScheduleTherapy";
import Assessment from "./components/Assessment";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminOpinion from "./components/AdminOpinion";
import DiplomaHome from "./components/DiplomaHome";
import Blogs from './components/Blogs';
import DemoCard from "./components/DemoCard";
import UserProfile from "./components/UserProfile";
import About from "./components/About";
import AutismServices from "./components/AutismServices";
import BookingSchedule from "./components/BookingSchedule";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/DiplomaHome" element={<DiplomaHome />} />
      <Route path="/DemoCard" element={<DemoCard />} />
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/diagnosisassesment"
          element={<ScheduleDiagnosisAssesment />}
        />
        <Route path="/child" element={<ChildHome />} />
        <Route path="/blogs" element={<Blogs />} /> The Blogs route
        <Route path="/About" element={<About />} />
        <Route path="/parent" element={<ParentHome />} />
        <Route path="/bookconsultation" element={<BookConsultation />} />
        <Route path="/scheduletherapy" element={<ScheduleTherapy />} />
        <Route path="/assessment/:id" element={<Assessment/>} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-opinion" element={<AdminOpinion />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/autism-services" element={<AutismServices />} /> {/* Added Autism Services route */}
        <Route path="/booking-schedule" element={<BookingSchedule />} /> {/* Added Booking Schedule route */}
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </Router>
  );
}

export default App;

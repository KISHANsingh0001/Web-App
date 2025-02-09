import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth1";
import HomePage from "./components/HomePage";
import ChildHome from "./components/ChildHome";
import ParentHome from "./components/ParentHome";
import ScheduleDiagnosisAssesment from "./components/ScheduleDiagnosisAssesment";
import BookConsultation from "./components/BookConsultation";
import ScheduleTherapy from "./components/ScheduleTherapy";
import Assessment from "./components/Assessment";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminOpinion from "./components/AdminOpinion";
import DiplomaHome from "./components/DiplomaHome";
import Blogs from "./components/Blogs";
import DemoCard from "./components/DemoCard";
import UserProfile from "./components/UserProfile";
import About from "./components/About";
import AutismServices from "./components/AutismServices";
import BookingSchedule from "./components/BookingSchedule";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />

        {/* Main Pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route
          path="/diagnosis-assessment"
          element={<ScheduleDiagnosisAssesment />}
        />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/schedule-therapy" element={<ScheduleTherapy />} />
        <Route path="/assessment/:id" element={<Assessment />} />
        <Route path="/autism-services" element={<AutismServices />} />
        <Route path="/booking-schedule" element={<BookingSchedule />} />

        {/* User & Admin */}
        <Route path="/child" element={<ChildHome />} />
        <Route path="/parent" element={<ParentHome />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-opinion" element={<AdminOpinion />} />

        {/* Extra Pages */}
        <Route path="/diploma-home" element={<DiplomaHome />} />
        <Route path="/demo-card" element={<DemoCard />} />
      </Routes>
    </Router>
  );
};

export default App;
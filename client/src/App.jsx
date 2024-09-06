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
import UserProfile from "./components/UserProfile";
import DiplomaHome from "./components/DiplomaHome";
import DemoCard from "./components/DemoCard";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/DiplomaHome" element={<DiplomaHome />} />
      <Route path="/DemoCard" element={<DemoCard />} />
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/diagnosisassesment"
          element={<ScheduleDiagnosisAssesment />}
        />
        <Route path="/child" element={<ChildHome />} />
        <Route path="/parent" element={<ParentHome />} />
        <Route path="/bookconsultation" element={<BookConsultation />} />
        <Route path="/scheduletherapy" element={<ScheduleTherapy />} />
        <Route path="/assessment/:id" element={<Assessment/>} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-opinion" element={<AdminOpinion />} />
        <Route path="/user-profile" element={<UserProfile />} /> 
      </Routes>
    </Router>
  );
}

export default App;

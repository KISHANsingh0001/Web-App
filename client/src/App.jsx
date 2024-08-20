import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
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

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
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
      </Routes>
    </Router>
  );
}

export default App;

import Navbar from "./components/Navbar";
import DashboardLayout from "./components/DashboardLayout";
import { useState } from "react";
// import api from "./api/api";
import "./App.css";

import ResumeUpload from "./components/ResumeUpload";
import JDUpload from "./components/JDUpload";
import MatchResume from "./components/MatchResume";
import Ranking from "./components/Ranking";
import InterviewQuestions from "./components/InterviewQuestions";
function App() {
  return (
    <DashboardLayout>
      <Navbar />

     <div className="upload-grid">
  <div className="upload-card">
  <ResumeUpload />
</div>

<div className="upload-card">
  <JDUpload />
</div>

  
</div>

    <div className="dashboard-card"> 
  <h2>Resume Matching</h2>

  <MatchResume />
</div>

     <div className="dashboard-card">
  <h2>Candidate Ranking</h2>

  <Ranking />
</div>
     <div className="dashboard-card">
  <h2>Interview Questions</h2>

  <InterviewQuestions />
</div>
    </DashboardLayout>
  );
}

export default App;



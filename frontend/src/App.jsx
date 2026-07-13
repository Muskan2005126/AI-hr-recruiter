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
    <div style={{ padding: "40px" }}>
      <h1>AI HR Recruiter</h1>

      <ResumeUpload />

      <JDUpload />

      <MatchResume />

      <Ranking />
      <InterviewQuestions />
    </div>
  );
}

export default App;



import { useState } from "react";
import api from "../api/api";

function InterviewQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInterviewQuestions = async () => {
    setLoading(true);

    try {
      const response = await api.get("/generate-interview");
      setQuestions(response.data.interview_questions);
    } catch (error) {
      console.error(error);
      alert("Failed to generate interview questions!");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Interview Questions</h2>

      <button onClick={handleInterviewQuestions}>
        Generate Interview Questions
      </button>

      <br />
      <br />

      {loading && <p>Generating Questions...</p>}

      {questions.length > 0 && (
        <div>
          <h3>Questions</h3>

          <ol>
            {questions.map((question, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {question}
              </li>
            ))}
          </ol>
        </div>
      )}

      <hr />
    </div>
  );
}

export default InterviewQuestions;
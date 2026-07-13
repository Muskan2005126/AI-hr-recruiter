import { useState } from "react";
import api from "../api/api";

function MatchResume() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMatchResume = async () => {
    setLoading(true);

    try {
      const response = await api.get("/match-resume");
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend!");
    }

    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleMatchResume}>
        Match Resume
      </button>

      <br />
      <br />

      {loading && <p>Matching...</p>}

      {result && (
        <div>
          <h2>Match Score: {result.match_score}%</h2>

          <h3>Matched Skills</h3>

          <ul>
            {result.matched_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Missing Skills</h3>

          <ul>
            {result.missing_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Summary</h3>

          <p>{result.summary}</p>
        </div>
      )}

      <hr />
    </div>
  );
}

export default MatchResume;
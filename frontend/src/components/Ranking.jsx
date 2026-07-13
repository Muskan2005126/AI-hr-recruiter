import { useState } from "react";
import api from "../api/api";

function Ranking() {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRanking = async () => {
    setLoading(true);

    try {
      const response = await api.get("/rank-candidates");
      setRanking(response.data.ranking);
    } catch (error) {
      console.error(error);
      alert("Ranking failed!");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Candidate Ranking</h2>

      <button onClick={handleRanking}>
        Generate Ranking
      </button>

      <br />
      <br />

      {loading && <p>Generating Ranking...</p>}

      {ranking.length > 0 && (
        <div>
          {ranking.map((candidate, index) => (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>
                {index + 1}. {candidate.name}
              </h3>

              <p>Match Score: {candidate.match_score}%</p>
            </div>
          ))}
        </div>
      )}

      <hr />
    </div>
  );
}

export default Ranking;
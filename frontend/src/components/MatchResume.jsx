


// import { useState } from "react";
// import api from "../api/api";

// function MatchResume() {
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleMatchResume = async () => {
//     setLoading(true);

//     try {
//       const response = await api.get("/match-resume");
//       setResult(response.data.result);
//     } catch (error) {
//       console.error(error);
//       alert("Error connecting to backend!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <button onClick={handleMatchResume}>
//         Match Resume
//       </button>

//       <br />
//       <br />

//       {loading && <p>Matching Resume...</p>}

//       {result && (
//         <div className="match-result-card">
//           <div className="score-section">
//             <h2>Resume Match Score</h2>

//             <div className="score-circle">
//               {result.match_score}%
//             </div>
//           </div>

//           <div className="skills-section">
//             <h3>Matched Skills</h3>

//             <div className="skills-container">
//               {result.matched_skills.map((skill, index) => (
//                 <span key={index} className="skill matched">
//                   {skill}
//                 </span>
//               ))}
//             </div>

//             <h3>Missing Skills</h3>

//             <div className="skills-container">
//               {result.missing_skills.map((skill, index) => (
//                 <span key={index} className="skill missing">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="summary-box">
//             <h3>AI Summary</h3>

//             <p>{result.summary}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MatchResume;


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
      alert("❌ Unable to connect to the backend. Please try again.");
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

      {loading && (
        <p
          style={{
            color: "#2563eb",
            fontWeight: "bold",
            marginTop: "15px",
          }}
        >
          ⏳ Matching Resume...
        </p>
      )}

      {result && (
        <div className="match-result-card">
          <div className="score-section">
            <h2>Resume Match Score</h2>

            <div className="score-circle">
              {result.match_score}%
            </div>
          </div>

          <div className="skills-section">
            <h3>Matched Skills</h3>

            <div className="skills-container">
              {result.matched_skills.map((skill, index) => (
                <span key={index} className="skill matched">
                  {skill}
                </span>
              ))}
            </div>

            <h3>Missing Skills</h3>

            <div className="skills-container">
              {result.missing_skills.map((skill, index) => (
                <span key={index} className="skill missing">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="summary-box">
            <h3>AI Summary</h3>

            <p>{result.summary}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MatchResume;
// import { useState } from "react";
// import api from "../api/api";

// function Ranking() {
//   const [ranking, setRanking] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleRanking = async () => {
//     setLoading(true);

//     try {
//       const response = await api.get("/rank-candidates");
//       setRanking(response.data.ranking);
//     } catch (error) {
//       console.error(error);
//       alert("Ranking failed!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
      

//       <button onClick={handleRanking}>
//         Generate Ranking
//       </button>

//       <br />
//       <br />

//       {loading && <p>Generating Ranking...</p>}

//       {ranking.length > 0 && (
//         <div>
//           {ranking.map((candidate, index) => (
//             <div
//               key={index}
//               style={{
//                 border: "1px solid gray",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 borderRadius: "8px",
//               }}
//             >
//               <h3>
//                 {index + 1}. {candidate.name}
//               </h3>

//               <p>Match Score: {candidate.match_score}%</p>
//             </div>
//           ))}
//         </div>
//       )}

//       <hr />
//     </div>
//   );
// }

// export default Ranking;


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
      <button onClick={handleRanking}>
        Generate Ranking
      </button>

      <br />
      <br />

      {loading && <p>Generating Ranking...</p>}

      {ranking.length > 0 && (
        <div className="ranking-list">
          {ranking.map((candidate, index) => (
            <div
              key={index}
              className={`ranking-card rank-${index + 1}`}
            >
              <div className="ranking-top">
                <h2>
                  {index === 0
                    ? "🥇"
                    : index === 1
                    ? "🥈"
                    : index === 2
                    ? "🥉"
                    : "🏅"}{" "}
                  {candidate.name}
                </h2>

                <span className="ranking-score">
                  {candidate.match_score}%
                </span>
              </div>

              <p>
                Candidate Rank #{index + 1}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Ranking;
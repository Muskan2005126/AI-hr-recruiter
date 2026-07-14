// import { useState } from "react";
// import api from "../api/api";

// function InterviewQuestions() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleInterviewQuestions = async () => {
//     setLoading(true);

//     try {
//       const response = await api.get("/generate-interview");
//       setQuestions(response.data.interview_questions);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to generate interview questions!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
   

//       <button onClick={handleInterviewQuestions}>
//         Generate Interview Questions
//       </button>

//       <br />
//       <br />

//       {loading && <p>Generating Questions...</p>}

//       {questions.length > 0 && (
//         <div>
//           <h3>Questions</h3>

//           <ol>
//             {questions.map((question, index) => (
//               <li key={index} style={{ marginBottom: "10px" }}>
//                 {question}
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}

//       <hr />
//     </div>
//   );
// }

// export default InterviewQuestions;




// import { useState } from "react";
// import api from "../api/api";

// function InterviewQuestions() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleInterviewQuestions = async () => {
//     setLoading(true);

//     try {
//       const response = await api.get("/generate-interview");
//       setQuestions(response.data.interview_questions);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to generate interview questions!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div>
//       <button onClick={handleInterviewQuestions}>
//         Generate Interview Questions
//       </button>

//       <br />
//       <br />

//       {loading && <p>Generating Questions...</p>}

//       {questions.length > 0 && (
//         <div className="questions-container">
//           {questions.map((question, index) => (
//             <div key={index} className="question-card">
//               <h3>Question {index + 1}</h3>

//               <p>{question}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default InterviewQuestions;

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
      alert("❌ Unable to generate interview questions. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleInterviewQuestions}>
        Generate Interview Questions
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
          ⏳ Generating Interview Questions...
        </p>
      )}

      {questions.length > 0 && (
        <div className="questions-container">
          {questions.map((question, index) => (
            <div key={index} className="question-card">
              <h3>Question {index + 1}</h3>

              <p>{question}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InterviewQuestions;
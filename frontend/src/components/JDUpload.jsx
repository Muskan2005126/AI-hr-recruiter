import { useState } from "react";
import api from "../api/api";

function JDUpload() {
  const [jdFile, setJdFile] = useState(null);

  const handleJDUpload = async () => {
    if (!jdFile) {
      alert("Please choose a Job Description!");
      return;
    }

    const formData = new FormData();
    formData.append("file", jdFile);

    try {
      await api.post("/upload-jd", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Job Description uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("JD upload failed!");
    }
  };

  return (
    <div>
      <h2>Upload Job Description</h2>

      <input
        type="file"
        accept=".txt"
        onChange={(e) => setJdFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleJDUpload}>
        Upload JD
      </button>

      <hr />
    </div>
  );
}

export default JDUpload;
import { useState } from "react";
import api from "../api/api";

function ResumeUpload() {
  const [resumeFile, setResumeFile] = useState(null);

  const handleResumeUpload = async () => {
    if (!resumeFile) {
      alert("Please choose a Resume!");
      return;
    }

    const formData = new FormData();
    formData.append("file", resumeFile);

    try {
      await api.post("/upload-resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Resume upload failed!");
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResumeFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleResumeUpload}>
        Upload Resume
      </button>

      <hr />
    </div>
  );
}

export default ResumeUpload;
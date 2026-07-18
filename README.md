#  AI HR Recruiter

An **Agentic AI-based HR Recruitment Assistant** that automates the initial recruitment process using **React.js**, **FastAPI**, and **Google Gemini AI**. The application helps recruiters parse resumes, compare them with job descriptions, rank candidates, and generate AI-powered interview questions.

---

##  Project Overview

The AI HR Recruiter simplifies the hiring process by leveraging AI to analyze resumes and job descriptions. It reduces manual effort by automatically extracting candidate information, evaluating skill matches, ranking applicants, and generating relevant interview questions.

---

##  Features

- 📄 Upload Resume (PDF)
- 📝 Upload Job Description
- 🤖 AI Resume Parsing using Google Gemini
- 🎯 Resume vs Job Description Skill Matching
- 📊 Candidate Ranking
- 💬 AI-generated Interview Questions
- 🎨 Modern React Dashboard
- ⚡ FastAPI REST APIs
- 📱 Responsive User Interface

---

## 🏗️ Architecture

```text
                Resume PDF
                     │
                     ▼
          Resume Parser Agent
                     │
                     ▼
             Parsed Resume Data
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
Skill Matcher   Ranking Agent   Interview Agent
      │              │              │
      └──────────────┼──────────────┘
                     ▼
             React Dashboard
```

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS3

### Backend
- FastAPI
- Python
- Google Gemini AI
- PyMuPDF
- JSON

### AI Components
- Resume Parser Agent
- Skill Matcher Agent
- Candidate Ranking Agent
- Interview Question Generator Agent

---

## 📂 Project Structure

```text
AI-hr-recruiter/
│
├── backend/
│   ├── agents/
│   │   ├── resume_parser.py
│   │   ├── skill_matcher.py
│   │   ├── ranking_agent.py
│   │   └── interview_generator.py
│   │
│   ├── uploads/
│   ├── data/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🚀 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Muskan2005126/AI-hr-recruiter.git
cd AI-hr-recruiter
```

---

### 2️⃣ Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/upload-resume` | Upload Resume PDF |
| POST | `/upload-jd` | Upload Job Description |
| GET | `/match-resume` | Resume & JD Matching |
| GET | `/rank-candidates` | Candidate Ranking |
| GET | `/generate-interview` | Generate Interview Questions |

---



## 💡 Key Learning Outcomes

- Built an Agentic AI-inspired recruitment workflow.
- Integrated Google Gemini AI with FastAPI.
- Developed RESTful APIs for AI-powered recruitment tasks.
- Designed a modular React frontend.
- Implemented resume parsing and AI-based skill matching.
- Learned prompt engineering and AI workflow integration.

---

## 🔮 Future Improvements

- Multiple Resume Upload
- Recruiter Login & Authentication
- Candidate Database
- Email Notifications
- Resume History
- AI Feedback Reports
- Cloud Deployment (Render/Vercel/AWS)

---

## 👩‍💻 Author

**Muskan Jaiswal**

- GitHub: https://github.com/Muskan2005126
- LinkedIn: https://www.linkedin.com/in/muskan-jaiswal-62a995330/

---


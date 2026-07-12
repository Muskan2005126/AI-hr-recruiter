from agents.ranking_agent import rank_candidates
from fastapi import FastAPI, UploadFile, File
import os
import shutil
from agents.skill_matcher import match_skills
from agents.resume_parser import parse_resume
from agents.interview_generator import generate_interview_questions
app = FastAPI()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.get("/")
def home():
    return {
        "message": "AI HR Recruiter Backend is Running!"
    }


# ---------------- Resume Upload ----------------

@app.post("/upload-resume")
def upload_resume(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, "resume.pdf")

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "message": "Resume uploaded successfully"
    }


# ---------------- Job Description Upload ----------------

@app.post("/upload-jd")
def upload_jd(file: UploadFile = File(...)):

    file_path = os.path.join(UPLOAD_FOLDER, "job_description.txt")

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "message": "Job Description uploaded successfully"
    }


# ---------------- Resume Parser ----------------

@app.get("/read-resume")
def read_resume():

    result = parse_resume("uploads/resume.pdf")

    return result

@app.get("/match-skills")
def match_resume():

    resume_path = "uploads/resume.pdf"
    jd_path = "uploads/job_description.txt"

    resume_data = parse_resume(resume_path)

    with open(jd_path, "r", encoding="utf-8") as file:
        jd_text = file.read()

    result = match_skills(resume_data, jd_text)

    return result


@app.get("/match-resume")
def match_resume_api():

    # Parse Resume
    resume_data = parse_resume("uploads/resume.pdf")

    # Read Job Description
    with open("uploads/job_description.txt", "r", encoding="utf-8") as file:
        jd_text = file.read()

    # Match Skills
    result = match_skills(resume_data, jd_text)

    return {
        "status": "success",
        "result": result
    }
@app.get("/rank-candidates")
def rank_candidates_api():

    candidates = [
        {
            "name": "Priya Verma",
            "match_score": 78
        },
        {
            "name": "Rahul Sharma",
            "match_score": 92
        },
        {
            "name": "Aman Singh",
            "match_score": 65
        },
        {
            "name": "Neha Gupta",
            "match_score": 84
        }
    ]

    ranked_candidates = rank_candidates(candidates)

    return {
        "status": "success",
        "total_candidates": len(ranked_candidates),
        "ranking": ranked_candidates
    }
@app.get("/generate-interview")
def generate_interview():

    # Load parsed resume
    with open("data/resume.json", "r") as file:
        resume_data = file.read()

    # Load job description
    with open("uploads/job_description.txt", "r") as file:
        job_description = file.read()

    questions = generate_interview_questions(
        resume_data,
        job_description
    )

    return {
        "status": "success",
        "interview_questions": questions
    }
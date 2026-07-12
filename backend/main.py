from fastapi import FastAPI, UploadFile, File
import os
import shutil
from agents.skill_matcher import match_skills
from agents.resume_parser import parse_resume

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
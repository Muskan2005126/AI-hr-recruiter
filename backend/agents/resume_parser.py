import fitz
import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def extract_text_from_pdf(pdf_path):
    document = fitz.open(pdf_path)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    return text


def parse_resume(pdf_path):

    resume_text = extract_text_from_pdf(pdf_path)

    prompt = f"""
You are an AI Resume Parser.

Extract the following information from the resume.

Return ONLY valid JSON.

Fields:
- name
- email
- phone
- skills
- education
- experience
- projects

Resume:
{resume_text}
"""

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt,
    )

    clean_text = response.text.strip()

    if clean_text.startswith("```json"):
        clean_text = clean_text.replace("```json", "").replace("```", "").strip()

    resume_data = json.loads(clean_text)

    os.makedirs("data", exist_ok=True)

    with open("data/resume.json", "w") as file:
        json.dump(resume_data, file, indent=4)

    return resume_data
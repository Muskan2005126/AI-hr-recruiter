import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_interview_questions(resume_data, job_description):

    prompt = f"""
You are an AI Technical Interviewer.

Based on the resume and job description, generate 10 interview questions.

Resume:

{resume_data}

Job Description:

{job_description}

Return only a numbered list.
"""

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt
    )

    return response.text
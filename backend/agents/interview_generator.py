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

    try:
        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents=prompt
        )

        text = response.text.strip()

        questions = []

        for line in text.split("\n"):
            line = line.strip()

            if line:
                if line[0].isdigit():
                    line = line.split(".", 1)[-1].strip()

                questions.append(line)

        if not questions:
            raise Exception("No interview questions generated.")

        return questions

    except Exception as e:

        print(f"Interview Generator Error: {e}")

        # Fallback Questions
        return [
            "Tell me about yourself.",
            "Explain your final year project.",
            "Why do you want to join this company?",
            "What is FastAPI?",
            "What is React?",
            "Explain REST API.",
            "Difference between SQL and NoSQL.",
            "Explain Object-Oriented Programming.",
            "Describe a challenging project you worked on.",
            "What are your strengths and weaknesses?"
        ]
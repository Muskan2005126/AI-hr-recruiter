import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def match_skills(resume_data, job_description):

    prompt = f"""
You are an AI HR Recruiter.

Compare the candidate resume with the job description.

Resume:

{json.dumps(resume_data, indent=2)}

Job Description:

{job_description}

Return ONLY JSON.

Format:

{{
    "match_score": 0,
    "matched_skills": [],
    "missing_skills": [],
    "summary": ""
}}
"""

    try:
        response = client.models.generate_content(
            model="gemini-flash-latest",
            contents=prompt
        )

        clean_text = response.text.strip()

        if clean_text.startswith("```json"):
            clean_text = (
                clean_text.replace("```json", "")
                .replace("```", "")
                .strip()
            )

        result = json.loads(clean_text)

        return result

    except json.JSONDecodeError:
        raise Exception(
            "Gemini returned an invalid JSON response while matching skills."
        )

    except Exception as e:
        raise Exception(
            f"Skill matching failed: {str(e)}"
        )
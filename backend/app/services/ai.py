# backend/app/services/ai.py

import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def parse_user_intent(user_input: str) -> str:
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a healthcare scheduling assistant."},
            {"role": "user", "content": user_input}
        ]
    )
    return response["choices"][0]["message"]["content"]

from fastapi import APIRouter
from app.services.ai import parse_user_intent

router = APIRouter()

@router.post("/interpret")
def interpret_input(input_text: str):
    result = parse_user_intent(input_text)
    return {"response": result}

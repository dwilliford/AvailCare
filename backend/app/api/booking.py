from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import json
from datetime import datetime

router = APIRouter()

# Mock provider database
with open("./app/services/providers.json") as f:
    providers = json.load(f)

class BookingRequest(BaseModel):
    specialty: str
    date: str

class BookingConfirmation(BaseModel):
    provider_id: int
    time_slot: str

@router.post("/match")
def match_provider(request: BookingRequest):
    matches = [
        p for p in providers
        if p["specialty"].lower() == request.specialty.lower() and
           any(slot.startswith(request.date) for slot in p["available_slots"])
    ]
    if not matches:
        raise HTTPException(status_code=404, detail="No providers available")
    return matches

@router.post("/book")
def book_slot(confirmation: BookingConfirmation):
    for provider in providers:
        if provider["id"] == confirmation.provider_id:
            if confirmation.time_slot in provider["available_slots"]:
                provider["available_slots"].remove(confirmation.time_slot)
                return {
                    "message": "Appointment booked successfully",
                    "provider": provider["name"],
                    "time": confirmation.time_slot
                }
    raise HTTPException(status_code=400, detail="Slot not available")

from fastapi import FastAPI
from app.api import endpoints
from app.api import booking

app = FastAPI()

app.include_router(endpoints.router)
app.include_router(booking.router)



@app.get("/health")
def health_check():
    return {"status": "ok"}


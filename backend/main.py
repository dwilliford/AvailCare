from fastapi import FastAPI
from app.api import endpoints

app = FastAPI()
app.include_router(endpoints.router)

@app.get("/health")
def health_check():
    return {"status": "ok"}


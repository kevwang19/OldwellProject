import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from mock_data import DASHBOARD

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "OldWell API"}


@app.get("/api/dashboard")
async def get_dashboard():
    # Simulate 1-second delay to see loading state
    await asyncio.sleep(1)
    return DASHBOARD

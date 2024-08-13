# main
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message" : "Got it"}

@app.get("/signin")
async def sign_in():
    return {"status": "good"}
### Backend

- Python v3.9.6
- Purpose : Handle API calls, train LLM models
- Framework: FastAPI
- Why not NodeJS? 
  - Because FastAPI is faster comparing to NodeJS
- Why not Flask?
  - Because FastAPI have more advantages: asynchronous, in-built data validation and simplicity

```python
#how to run it
cd backend/
uvicorn main:app --reload  
```
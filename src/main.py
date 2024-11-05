from fastapi import FastAPI
from .some_module.utils import greet_user


app = FastAPI()

@app.get("/greet/{name}")
def greet(name: str):
    return {"message": greet_user(name)}
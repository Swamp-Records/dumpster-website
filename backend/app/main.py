from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from datetime import datetime, timezone
import os
from pathlib import Path
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "ok"}

load_dotenv(Path(__file__).resolve().parents[1] / ".env")

API_KEY = os.getenv("BANDSINTOWN_APP_ID")
ARTIST_ID = "15675958"


@app.get("/api/shows")
def get_shows():
    if not API_KEY or API_KEY == "your_actual_api_key_here":
        raise HTTPException(
            status_code=503,
            detail="The Bandsintown API key is not configured.",
        )

    events_url = f"https://rest.bandsintown.com/artists/id_{ARTIST_ID}/events"
    try:
        events_response = requests.get(
            events_url,
            params={"app_id": API_KEY, "date": "all"},
            timeout=10,
        )
        events_response.raise_for_status()
    except requests.HTTPError as exc:
        upstream_status = exc.response.status_code if exc.response is not None else "unknown"
        raise HTTPException(
            status_code=502,
            detail=f"Bandsintown events request returned HTTP {upstream_status}.",
        ) from None
    except requests.RequestException as exc:
        raise HTTPException(
            status_code=502,
            detail="Could not connect to Bandsintown while loading events.",
        ) from None

    try:
        events = events_response.json()
    except requests.exceptions.JSONDecodeError as exc:
        raise HTTPException(
            status_code=502,
            detail="Bandsintown returned invalid event data.",
        ) from None

    if not isinstance(events, list):
        raise HTTPException(
            status_code=502,
            detail="Bandsintown returned invalid event data.",
        )

    now = datetime.now(timezone.utc)
    upcoming_events = []
    for event in events:
        if not isinstance(event, dict):
            continue

        value = event.get("datetime")
        if not isinstance(value, str):
            continue

        try:
            event_time = datetime.fromisoformat(value.replace("Z", "+00:00"))
            if event_time.tzinfo is None:
                event_time = event_time.replace(tzinfo=timezone.utc)
        except ValueError:
            continue

        if event_time >= now:
            upcoming_events.append(event)

    return upcoming_events

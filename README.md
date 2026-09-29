# Dumpster

Website for Dumpster, a local band from Gainesville, Florida.

## Tech Stack

- Frontend: React (Vite)
- Backend: Python (FastAPI)

## Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+
- [Python](https://www.python.org/) 3.10+
- Git

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Swamp-Records/dumpster-website.git
cd dumpster-website
```

### 2. Backend setup

```bash
cd backend
python -m venv .venv
```

Activate the virtual environment:

- macOS/Linux: `source .venv/bin/activate`
- Windows (PowerShell): `.venv\Scripts\Activate.ps1`
- Windows (cmd): `.venv\Scripts\activate.bat`

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API runs at http://localhost:8000 (interactive docs at http://localhost:8000/docs).

### 3. Frontend setup

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The app runs at http://localhost:5173. The frontend currently uses the backend API only for future integration; both servers can be started independently.

## Checks

From `frontend/`, run `npm run lint` and `npm run build` to lint and build the frontend.

## Project Structure

```
frontend/   React app (components, pages, hooks, api, assets)
backend/    FastAPI app (routes, models, services, tests)
```

## Contributing

1. Create a branch: `git checkout -b feature/your-change`
2. Commit your changes and push the branch
3. Open a pull request into `main`.
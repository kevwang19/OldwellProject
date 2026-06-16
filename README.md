# OldWell — OWL Fund Intelligence

Take-home dashboard recreated with **Next.js (React + TypeScript)** frontend and **FastAPI** backend serving mock data.

## Structure

```
OldWell/
├── frontend/   # Next.js UI
└── backend/    # FastAPI + mock data
```

## Run locally

**Terminal 1 — backend**

```bash
cd backend
source .venv/bin/activate
fastapi dev
```

API: http://127.0.0.1:8000  
Docs: http://127.0.0.1:8000/docs  
Dashboard data: http://127.0.0.1:8000/api/dashboard

**Terminal 2 — frontend**

```bash
cd frontend
cp .env.local.example .env.local   # optional, defaults to 127.0.0.1:8000
npm run dev
```

App: http://localhost:3000

## Approach

- **Mock data in Python** (`backend/mock_data.py`), exposed via `GET /api/dashboard`
- **Frontend fetches from the API** on load (client-side fetch to demonstrate API integration)
- **Chart.js + react-chartjs-2** for line and donut charts
- **Tailwind** for layout and styling to match the reference dashboard

## What I'd do next

- Split `/api/dashboard` into smaller endpoints (summary, performance, alerts)
- Add loading skeletons and error retry
- Generate TypeScript types from OpenAPI schema
- Add tests for API routes and key UI components
- Polish chart styling to match the reference pixel-for-pixel

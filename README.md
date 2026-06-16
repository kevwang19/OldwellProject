# OldWell Project

Take-home dashboard recreated with **Next.js (React + TypeScript)** frontend and **FastAPI** backend serving mock data.

## Structure

```
OldWell/
├── frontend/   # Next.js UI
└── backend/    # FastAPI + mock data
```

Backend file structure is very simple... just 2 files main.py and mock_data.py

Frontend file structure is just comprised of /app and /components. The folder /app has main navigation pages (/dashboard). The /components folder has subfolders (/nav for components related to overall navigation), and (/dashboard for components related to dashboard page for now).

## Setup

**Prerequisites:**
- Python 3.10+ 
- Node.js 18+

**First time setup:**

**Backend:**
```bash
cd backend
python3 -m venv .venv

# On macOS/Linux:
source .venv/bin/activate

# On Windows:
# .venv\Scripts\activate

pip install -r requirements.txt
```

**Frontend:**
```bash
cd frontend
npm install
```

## Run locally

**Terminal 1 — backend**

```bash
cd backend
# On macOS/Linux:
source .venv/bin/activate

# On Windows:
# .venv\Scripts\activate

fastapi dev
```

API: http://127.0.0.1:8000  
Docs: http://127.0.0.1:8000/docs  
Dashboard data: http://127.0.0.1:8000/api/dashboard

**Terminal 2 — frontend**

optional  .env.local.example .env.local, NEXT_PUBLIC_API_URL defaults to 127.0.0.1:8000

```bash
cd frontend
npm run dev
```

App: http://localhost:3000

## Setup

- **Mock data in Python FastAPI backend** (`backend/mock_data.py`), exposed via `GET /api/dashboard`
- **Frontend nextjs fetches from the API** on dashboard page load
- **Chart.js with react-chartjs-2** for line and donut charts
- **Tailwind** for layout and styling to match the reference dashboard
- Simulated loading delay + loading skeletons to show what is constant vs what is dynamic data in smooth ux

## What I'd do next / Future Considerations

- Frontend Authentication ... user signin / account creation / onboarding
- API Authentication / Authorization ... make sure backend api can only receive requests from our frontend / allowed client apps, and make sure that the user who is making the requests are allowed to perform the actions in the apis (RLS / multitenant situations)
- Split `/api/dashboard` into smaller endpoints (summary, performance, alerts) if they are reused in other pages
- Migrate hardcoded mock data into SQLite db for local testing or temporary projects, or create tables and seed tables with migrations in actual database in cloud like AWS/GCP or Supabase/Firebase
- Deploy both parts to hosting environments, perhaps frontend Nextjs to vercel, backend python FastAPI to AWS Elasticbeanstalk or API Gateway / Lambda depending on what is appropriate for business use case
- Evaluate whether this should be separate frontend + backend or just use a full stack framework like Nextjs in one repo, and if stay separate, should they be deployed to separate github repos for separation of concerns / releases, or stay in 1 monorepo

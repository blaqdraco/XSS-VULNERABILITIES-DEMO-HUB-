# XSS Demo (React + Django)

This project intentionally demonstrates multiple XSS flavors. Run only in a disposable environment.

## Stack
- Django REST API (backend/api)
- React (frontend/src)

## Quick start
1. Backend
   ```bash
   cd backend
   python -m venv .venv
   .venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver 0.0.0.0:8000
   ```
2. Frontend
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. Open http://localhost:3000

## Pages
- Reflected: `/reflected` — backend echoes `q` query via `/api/search/`.
- DOM: `/dom` — reads `?msg=` and `#hash` and injects into DOM.
- Stored: `/stored` — comments saved via `/api/comments/` and rendered raw.
- Blind: `/admin` — same stored payload fires when “admin” views it.

## Intentional vulnerabilities
- React components render untrusted data with `dangerouslySetInnerHTML`.
- Django endpoint reflects input without escaping.
- No output encoding or sanitization anywhere.

## Talk tracks / mitigation
- React normally escapes values; avoid `dangerouslySetInnerHTML`.
- Django templates and DRF escape by default; encode output or sanitize input.
- Add CSP headers, input validation, output encoding, and context-aware escaping.

Use this code for education only.

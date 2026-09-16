# Student Management System

A full-stack CRUD web application for managing student records, built with Django REST Framework (backend) and HTML/CSS/JavaScript (frontend).

## 1. Project Overview

This project allows an admin to add, view, update, and delete student records through a simple web interface. The frontend communicates with a Django REST API backend, which stores data in an SQLite database.

## 2. Problem Statement

Educational institutions need a simple way to maintain student records (name, department, email, phone, year) without manual paperwork. This system provides a lightweight web-based solution for CRUD (Create, Read, Update, Delete) operations on student data.

## 3. Objectives

- Build a REST API to manage student records
- Provide a frontend interface for CRUD operations
- Connect frontend and backend using Fetch API
- Store data persistently in a database

## 4. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Django, Django REST Framework |
| Database | SQLite |
| API Testing | Postman |
| Version Control | Git / GitHub |

## 5. System Architecture

```
User → Browser (HTML/CSS/JS Frontend)
     → Fetch API (JSON requests)
     → Django REST Framework (Views + Serializers)
     → Django ORM
     → SQLite Database
```

## 6. Database Design

**Table: Student**

| Field | Type | Constraints |
|---|---|---|
| id | Integer | Primary Key, Auto-increment |
| name | CharField | Required |
| department | CharField | Required |
| email | EmailField | Required |
| phone | CharField | Required |
| year | Integer | Required |

## 7. API Endpoints

| Operation | HTTP Method | Endpoint | Description |
|---|---|---|---|
| Create | POST | `/api/students/` | Add a new student |
| Read All | GET | `/api/students/` | List all students |
| Read One | GET | `/api/students/{id}/` | Get a single student |
| Update | PUT | `/api/students/{id}/` | Update a student |
| Delete | DELETE | `/api/students/{id}/` | Remove a student |

## 8. Project Folder Structure

```
StudentManagment/
└── backend/
    ├── backend/          # Django project settings
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── students/          # Django app
    │   ├── models.py
    │   ├── serializers.py
    │   ├── views.py
    │   ├── urls.py
    │   └── migrations/
    ├── frontend/          # Static frontend
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    ├── db.sqlite3
    └── manage.py
```

## 9. Installation & Execution Steps

### Backend Setup
```bash
cd backend
pip install djangorestframework
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
Backend runs at: `http://127.0.0.1:8000/`

### Frontend Setup
1. Open `frontend/index.html` using VS Code Live Server extension
2. Frontend runs at: `http://127.0.0.1:5500/`

### CORS Configuration
`CORS_ALLOW_ALL_ORIGINS = True` is set in `settings.py` to allow frontend-backend communication across different ports.

## 10. CRUD Functionality

| Function | Description |
|---|---|
| Create | Fill the form and click "Add Student" — sends a POST request |
| Read | Student list loads automatically on page load — GET request |
| Update | Click "Edit" on a row, form auto-fills, click submit — sends a PUT request |
| Delete | Click "Delete" on a row — sends a DELETE request |

## 11. Testing

API endpoints were tested using Postman for all CRUD operations:
- POST `/api/students/` — tested with valid and missing fields
- GET `/api/students/` — tested with empty and populated database
- PUT `/api/students/{id}/` — tested with valid and invalid IDs
- DELETE `/api/students/{id}/` — tested with valid and invalid IDs

*(Attach Postman screenshots here for submission)*

## 12. Challenges Faced & Solutions

| Challenge | Solution |
|---|---|
| `ModuleNotFoundError: No module named 'rest_framework'` | Installed Django REST Framework via `pip install djangorestframework` |
| 404 on `/api/students/1/` | Fixed by creating a student record first; ID did not exist yet |
| `ERR_CONNECTION_REFUSED` | Restarted the Django development server |
| Form not submitting via JS (page reload with `?`) | Fixed duplicate `const API_URL` declaration causing a `SyntaxError` that broke `preventDefault()` |
| CORS issue between frontend and backend ports | Enabled `CORS_ALLOW_ALL_ORIGINS = True` in settings |

## 13. Future Enhancements

- Add authentication (login/logout) for admin access
- Add search and filter functionality
- Add pagination for large student lists
- Add client-side and server-side input validation (email format, phone number format)
- Deploy to a cloud platform (Render, Railway, or PythonAnywhere)

## 14. Author

GOWRIKA K P — ECE, Batch 922525106100

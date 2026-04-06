# Smart Task & Notes Management System

A full-stack MERN application for managing tasks and notes with secure authentication, categorization, and tracking.

## Features
- **User Authentication**: Secure login and signup using JWT.
- **Task Management**: Create, read, update, and delete tasks with priority and due dates.
- **Notes System**: Organize ideas and snippets efficiently.
- **Priority Labels**: Categorize items as High, Medium, or Low.
- **Responsive Design**: Optimized for both mobile and desktop.

## Tech Stack
- **Frontend**: React.js, Vite, TailwindCSS (or Vanilla CSS), Axios.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Atlas).
- **Authentication**: JSON Web Tokens (JWT).

## Project Structure
```text
Smart_Task/
├── backend/        # Express server and API routes
└── frontend/       # React application frontend
```

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account

### 1. Backend Setup
1. `cd backend`
2. `npm install`
3. Create a `.env` file with:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret
   ```
4. `npm start`

### 2. Frontend Setup
1. `cd frontend`
2. `npm install`
3. Create a `.env` file with:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
4. `npm run dev`

---

## API Documentation (Postman)

The following endpoints are available for testing:

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get token |

### Tasks
| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| GET | `/api/tasks` | Yes | Get all tasks |
| POST | `/api/tasks` | Yes | Create a task |
| PUT | `/api/tasks/:id` | Yes | Update a task |
| DELETE | `/api/tasks/:id` | Yes | Delete a task |

---

## Live Links
- **Frontend**: [Link to Vercel/Netlify]
- **Backend**: [Link to Render/Heroku]

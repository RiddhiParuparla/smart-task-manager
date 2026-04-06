# Smart Task & Notes Management System (MERN Stack)

## 📌 Project Overview

The Smart Task & Notes Management System is a full-stack MERN application that allows users to securely register and log in, and manage their tasks efficiently using CRUD operations. It ensures data security using JWT authentication and stores data in MongoDB.

---

## 🎯 Objective

To build a full-stack web application using the MERN stack that demonstrates authentication, REST API integration, CRUD operations, and cloud deployment.

---

## 🚀 Features

* User Authentication (JWT + bcrypt)
* Add, Update, Delete Tasks
* Protected Routes (Only logged-in users can access tasks)
* MongoDB Data Persistence
* Responsive User Interface

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Axios, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **Authentication:** JWT (JSON Web Token)

---

## 📂 Project Structure

* `/backend` → Contains API, database models, and server logic
* `/frontend` → Contains React UI and client-side logic

---

## 🔐 API Endpoints

### Auth Routes

* `POST /api/auth/register` → Register new user
* `POST /api/auth/login` → Login user

### Task Routes (Protected)

* `GET /api/tasks` → Get all tasks
* `POST /api/tasks` → Create new task
* `PUT /api/tasks/:id` → Update task
* `DELETE /api/tasks/:id` → Delete task

---

## ⚙️ Environment Variables

### Backend (.env)

PORT=5000
MONGODB_URI=mongodb://localhost:27017/smart-task-db
JWT_SECRET=supersecret_jwt_key_123

### Frontend (.env)

REACT_APP_API_URL=https://smart-task-api.onrender.com/api

---

## 🌐 Live Links

* **Frontend:** https://smart-task-manager.vercel.app
* **Backend:** https://smart-task-api.onrender.com

---

## 📸 Screenshots

(Add screenshots like below)

* Register Page
  <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/9386fe02-0075-4729-aa89-bf96e0774abc" />

* Login Page
  <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/0ec57d82-6283-4ae5-bff5-e1ee7ea256e2" />

* Dashboard
  <img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/27766b9f-4174-43fe-9432-f98fd54fa3a6" />

* Add Task & Task List
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/61d244eb-5890-420a-b0bf-4259e3e6a503" />

---

## 🧪 API Testing

Tested using Postman with JWT authentication. All endpoints were verified including authentication and protected routes.

---

## 📦 Installation & Setup

### Backend Setup

cd backend
npm install
npm start

### Frontend Setup

cd frontend
npm install
npm start

---

## 🚀 Deployment

* Frontend deployed on Vercel
* Backend deployed on Render
* Database hosted on MongoDB Atlas

---

## 👩‍💻 Author

Riddhi Paruparla

---

## 📌 Conclusion

This project demonstrates complete full-stack MERN development including authentication, CRUD functionality, API integration, and cloud deployment.

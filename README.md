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
  <img width="1011" height="686" alt="Screenshot 2026-04-06 094205" src="https://github.com/user-attachments/assets/63f382f7-648a-466a-aab4-2aed37d600e9" />

* Login Page
  <img width="951" height="654" alt="Screenshot 2026-04-06 094244" src="https://github.com/user-attachments/assets/ad2256ab-db90-46a0-bda3-86cee1c0fcd5" />

* Dashboard
  <img width="1012" height="481" alt="Screenshot 2026-04-06 094334" src="https://github.com/user-attachments/assets/b5a87ff8-d381-43ac-ae1a-90dc34a9def6" />


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

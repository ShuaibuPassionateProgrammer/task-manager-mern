# 📝 MERN Stack Task Manager

A full-stack Task Manager application built using the **MERN stack** (MongoDB, Express, React, Node.js). This project allows users to create, read, update, and delete tasks with a simple and intuitive interface.

## 🚀 Features

- ✅ Add new tasks
- 📝 Edit existing tasks
- ❌ Delete tasks
- 📄 View all tasks
- 🔄 Persistent storage using MongoDB
- 📡 RESTful API with Express.js
- ⚛️ React frontend with Axios for API communication

---

## 🛠️ Technologies Used

### Frontend
- [React](https://reactjs.org/) (^18.3.1)
- [Axios](https://axios-http.com/) (^1.7.7)
- [React DOM](https://reactjs.org/docs/react-dom.html) (^18.3.1)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📂 Project Structure

```bash
mern-task-manager/
│
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── App.js
│       └── index.js
│
├── server/                 # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env                # Environment variables
│   └── server.js
│
├── package.json            # Backend dependencies
└── README.md

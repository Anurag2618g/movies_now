# Movies Now 🎬

Movies Now is a MERN application that lets users search movies through the TMDB API and maintain a **Trending Movies** section based on user interactions. The project is structured for easy expansion, with more features planned in future updates.

---

## ✨ Features

- **Smart Movie Search**  
  Debounced search powered by TMDB for fast, efficient querying.

- **Trending Movies**  
  When users interact with a movie, it is saved to MongoDB and displayed in the trending section.

- **Detailed Movie Preview**  
  Displays poster, rating, language, and release year.

- **Modular MERN Architecture**  
  Clean separation between backend (Node/Express/MongoDB) and frontend (React).

- **Future-Ready Design**  
  Additional features like user accounts, watchlists, and recommendations will be added.

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- Axios
- TailwindCSS
- react-use (debouncing)

### Backend
- Node.js
- Express
- MongoDB / MongoDB Atlas
- Mongoose

---

## 📁 Project Structure

movies-now/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
├── components/
├── App.jsx
└── .env

yaml
Copy code

---

## 🔧 Environment Variables

### Backend (`backend/.env`)
MONGO_URI=your_mongo_connection_string
PORT=3000

### Frontend (`frontend/.env`)
VITE_API_TOKEN=your_tmdb_api_token
VITE_BASE_URL=http://localhost:3000


---

## 🚀 Getting Started

Clone the repository:

git clone https://github.com/yourusername/movies-now.git
cd movies-now

### Backend Setup
cd backend
npm install
npm start

### Backend runs at:
http://localhost:3000
Frontend Setup
cd frontend
npm install
npm run dev

### Frontend runs at:
http://localhost:5173
🛠️ API Endpoints
POST /api/trending
Stores or updates a trending movie.

Request Body:

json
Copy code
{
  "movie_id": 123,
  "title": "Inception",
  "poster_path": "/abc123.jpg"
}
GET /api/movies?limit=6
Returns trending movies in newest-first order.

---

### ⚠️ Current Limitations
No authentication

Simple trending logic (no scoring or analytics)

No pagination or infinite scrolling

No user preferences stored yet

---

### 🗺️ Future Roadmap
User accounts & authentication

Watchlists / favorites

Movie detail pages

Recommendation engine

Dark mode

Trending score weighting

---

### 📄 License
MIT License
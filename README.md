# Car Rental Booking App

A fullstack web application for car rental bookings, allowing users to browse, book, and manage cars, while owners can list and manage their vehicles and bookings.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

### User Features
1. **User Registration & Login**  
   - Secure authentication using JWT.
2. **Browse Cars**  
   - View all available cars with filters for location, date, and car features.
3. **Book Cars**  
   - Select pickup and return dates, check availability, and book cars.
4. **View My Bookings**  
   - See all past and current bookings with details and statuses.

### Owner Features
1. **Become an Owner**  
   - Users can upgrade their role to list cars.
2. **List Cars**  
   - Add new cars with images and detailed specifications.
3. **Manage Cars**  
   - View, update availability, or remove listed cars.
4. **Manage Bookings**  
   - View all bookings for owned cars, approve or cancel requests.
5. **Dashboard**  
   - Overview of total cars, bookings, revenue, and recent activities.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios, React Router, Motion
- **Backend:** Node.js, Express.js, MongoDB (via Mongoose), JWT, Multer, ImageKit
- **Deployment:** Vercel (for both client and server)
- **Other:** ESLint, dotenv

---

## Project Structure

```
CarRental-fullstack-main/
│
├── client/                # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── assets/        # Images, icons, dummy data
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # React Context for global state
│   │   ├── pages/         # Page components (Home, Cars, Owner, etc.)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── server/                # Backend (Node.js/Express)
│   ├── configs/           # DB and ImageKit configs
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Auth, file upload
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── server.js
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/CarRental-fullstack-main.git
cd CarRental-fullstack-main
```

### 2. Install Dependencies

#### Backend

```sh
cd server
npm install
```

#### Frontend

```sh
cd ../client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in both `server/` and `client/` directories.

#### Example for `server/.env`:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
PORT=3000
```

#### Example for `client/.env`:

```
VITE_BASE_URL=http://localhost:3000
VITE_CURRENCY=$
```

### 4. Run the Application

#### Backend

```sh
cd server
npm run server
```

#### Frontend

```sh
cd ../client
npm run dev
```

The frontend will be available at `http://localhost:5173` (default Vite port).

---

## Scripts

### Backend (`server/package.json`)

- `npm run server` — Start server with nodemon (development)
- `npm start` — Start server with Node.js

### Frontend (`client/package.json`)

- `npm run dev` — Start Vite dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## API Endpoints

### User Routes (`/api/user`)
- `POST /register` — Register a new user
- `POST /login` — Login user
- `GET /data` — Get user data (requires JWT)
- `GET /cars` — Get all available cars

### Owner Routes (`/api/owner`)
- `POST /change-role` — Become an owner
- `POST /add-car` — Add a new car (with image upload)
- `GET /cars` — Get all cars owned by user
- `POST /toggle-car` — Toggle car availability
- `POST /delete-car` — Remove a car
- `GET /dashboard` — Get dashboard stats
- `POST /update-image` — Update owner profile image

### Booking Routes (`/api/bookings`)
- `POST /check-availability` — Check car availability for dates/location
- `POST /create` — Create a new booking
- `GET /user` — Get bookings for logged-in user
- `GET /owner` — Get bookings for owner’s cars
- `POST /change-status` — Change booking status (owner only)

---

## Deployment

- Both client and server are configured for deployment on [Vercel](https://vercel.com/).
- See `vercel.json` in both `client/` and `server/` for rewrite/build rules.

---

## Screenshots

_Add screenshots of the main pages and features here for better documentation._

---

## License

This project is licensed under the MIT License.

---

## Credits

- UI inspired by modern car rental platforms.
- Built with [React](https://react.dev/), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/), and [Vercel](https://vercel.com/).

---

**Feel free to contribute or open
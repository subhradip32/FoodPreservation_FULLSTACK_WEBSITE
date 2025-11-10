# NourishNet: Full Stack Food Marketplace

NourishNet is a professional full-stack web application for buying and selling fresh produce, supporting local farmers, and reducing food waste. It features a modern React frontend and a robust Spring Boot backend with PostgreSQL.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features
- User authentication (signup/login)
- Marketplace for browsing products
- Add to cart and buy now functionality
- Cart management (add, remove, clear)
- Responsive, modern UI with Tailwind CSS and Framer Motion
- Testimonials, features, and more

---

## Tech Stack
**Frontend:**
- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- React Router

**Backend:**
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Maven

---

## Project Structure
```
Full_stack_finalProject/
├── nourishnetfrontend/   # React + Vite frontend
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main app pages (marketplace, cart, login, signup)
│   ├── src/             # Entry point and assets
│   ├── package.json     # Frontend dependencies
│   └── ...
├── nourishnetbackend/   # Spring Boot backend
│   ├── src/main/java/com/nourishnet/nourishnetbackend/
│   │   ├── controller/  # REST API controllers
│   │   ├── model/       # JPA entities
│   │   ├── repository/  # Data repositories
│   │   ├── service/     # Business logic
│   ├── src/main/resources/ # application.properties
│   ├── pom.xml          # Backend dependencies
│   └── ...
└── README.md            # Project documentation
```

---

## Setup & Installation

### Prerequisites
- Node.js & npm
- Java 21+
- PostgreSQL

### Backend Setup
1. Configure PostgreSQL in `nourishnetbackend/src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
   spring.datasource.username=myuser
   spring.datasource.password=yourpassword
   ```
2. Install dependencies and run the backend:
   ```bash
   cd nourishnetbackend
   ./mvnw spring-boot:run
   ```

### Frontend Setup
1. Install dependencies and run the frontend:
   ```bash
   cd nourishnetfrontend
   npm install
   npm run dev
   ```
2. Access the app at [http://localhost:5173](http://localhost:5173)

---

## Usage
- Sign up or log in to your account
- Browse products in the marketplace
- Add items to your cart
- View and manage your cart
- Click "Buy Now" to purchase and clear your cart

---

## API Endpoints
**Auth:**
- `POST /api/auth/signup` — Register new user
- `POST /api/auth/login` — Login user

**Marketplace:**
- `GET /api/food_post` — List all products

**Cart:**
- `GET /api/cart/{userId}` — Get user's cart items
- `POST /api/cart/{userId}/add/{foodpostId}` — Add item to cart
- `DELETE /api/cart/{userId}/remove/{foodpostId}` — Remove item from cart
- `DELETE /api/cart/{userId}/clear` — Clear cart

---

## Screenshots
> Add screenshots of your UI here for a more professional look!

---

## License
This project is licensed under the MIT License.

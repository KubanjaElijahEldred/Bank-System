# Bank System

A comprehensive banking system built with React, Node.js, Java, and MongoDB.

## Architecture

- **Frontend**: React application for user interface
- **Backend**: Node.js API server with Express.js
- **Java Services**: Spring Boot microservices for core banking operations
- **Database**: MongoDB for data persistence

## Features

- User authentication and authorization
- Account management (checking, savings)
- Transaction processing
- Fund transfers
- Balance inquiries
- Transaction history
- Admin dashboard

## Tech Stack

- Frontend: React, Tailwind CSS, Axios
- Backend: Node.js, Express.js, JWT
- Java Services: Spring Boot, Spring Data MongoDB
- Database: MongoDB
- Authentication: JWT tokens

## Getting Started

### Prerequisites
- Node.js (v16+)
- Java (v11+)
- MongoDB
- Maven
- Docker & Docker Compose (optional)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install:all
   ```
3. Set up MongoDB database
4. Configure environment variables
5. Start all services

### Running the Application

#### Option 1: Using Docker Compose (Recommended)
```bash
docker-compose up -d
```

#### Option 2: Manual Setup
```bash
# Start MongoDB
mongod

# Start Java services (from java-services directory)
cd java-services
mvn spring-boot:run

# Start Node.js backend (from backend directory)
cd backend
npm install
npm run dev

# Start React frontend (from frontend directory)
cd frontend
npm install
npm start
```

### Access Points
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Java Services: http://localhost:8080
- MongoDB: localhost:27017

## API Documentation

API endpoints will be available at `http://localhost:3001/api-docs`

## Project Structure

```
bank-system/
├── frontend/          # React application
├── backend/           # Node.js API server
├── java-services/     # Java microservices
├── database/          # MongoDB schemas and scripts
└── docker-compose.yml # Container orchestration
```


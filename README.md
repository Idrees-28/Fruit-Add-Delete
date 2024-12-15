# Fruit Add and Delete Application

## Project Overview
The Fruit Add and Delete Application is a simple and interactive app built with React and Node.js. It allows users to add new fruits to a list and delete existing ones. The application demonstrates CRUD functionality with seamless integration between the frontend and backend.

---

## Features
- **Add Fruits**: Users can add new fruits to the list dynamically.
- **Delete Fruits**: Remove fruits from the list with a single click.
- **Responsive Design**: Works on desktop, tablet, and mobile devices.
- **Real-time Updates**: List updates instantly with no page refresh required.
- **REST API Integration**: Backend API for handling add and delete operations.

---

## Technologies Used

### Frontend
- **React**: JavaScript library for building the user interface.
- **Axios**: For making API requests to the backend.
- **CSS**: Styling for layout and design.

### Backend
- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for creating RESTful APIs.
- **MongoDB**: Database for storing the list of fruits.
- **Mongoose**: For schema-based interaction with MongoDB.

---

## Installation Guide

### Prerequisites
- Node.js (v16 or later)
- MongoDB installed locally or access to a cloud-based MongoDB instance
- A modern web browser
- A code editor (optional for modifications)

---

### Steps

#### 1. Clone the Repository:
   ```bash
   git clone https://github.com/Idrees-28/fruit-app.git
   ```

#### 2. Navigate to the Project Directory:
   ```bash
   cd fruit-app
   ```

#### 3. Install Dependencies:

   **For Backend:**
   ```bash
   cd backend
   npm install
   ```

   **For Frontend:**
   ```bash
   cd frontend
   npm install
   ```

#### 4. Configure Environment Variables:
Create a `.env` file in the `backend` directory and add the following:
   ```
   PORT=5000
   DB_URI=your_database_connection_string
   ```

#### 5. Start the Application:

   **Start the Backend:**
   ```bash
   cd backend
   npm start
   ```

   **Start the Frontend:**
   ```bash
   cd frontend
   npm start
   ```

#### 6. Open the App:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Endpoints

### Backend REST API
- **GET /fruits**: Fetch the list of all fruits.
- **POST /fruits**: Add a new fruit to the list.
- **DELETE /fruits/:id**: Delete a fruit by its ID.
---

## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## Acknowledgments
- **React**: For building the dynamic frontend.
- **Node.js**: For creating a robust backend server.
- **Express**: For simplifying REST API creation.
- **MongoDB**: For efficient data storage.

---

## Contact
For any inquiries, feel free to reach out:
- **Email**: idreesjee2810@gmail.com
- **GitHub**: [Idrees-28](https://github.com/Idrees-28)

---

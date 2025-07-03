# Trends With Technology (Full-Stack Edition)

A full-stack web application designed to provide career guidance for students and recent graduates. This platform helps users track technology trends, discover relevant courses, apply for jobs, and receive personalized career advice, all powered by a robust backend server and database.

---

## Table of Contents

- [About The Project](#about-the-project)
- [Project Architecture](#project-architecture)
- [Core Features](#core-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [API Endpoints](#api-endpoints)
- [Contact](#contact)

---

## About The Project

In the fast-evolving tech landscape, staying updated is key to building a successful career. This project was built to address that challenge. It serves as a centralized platform where users can align their learning path with current industry demands.

The application simulates a real-world, multi-user environment. A front-end client built with Vanilla JavaScript provides a dynamic user interface, while a backend server built with Node.js and Express handles all business logic, user authentication, and data persistence.

---

## Project Architecture

This application follows a classic client-server model:

*   **Client (Frontend):** A single-page application (SPA) responsible for rendering the user interface and communicating with the backend. It is located in the `/client` directory.
*   **Server (Backend):** A RESTful API built with Node.js and Express. It handles all business logic, including user authentication, data validation, and interaction with the database. It is located in the `/server` directory.
*   **Database:** A cloud-hosted MongoDB Atlas instance serves as the central data store for all users, courses, jobs, and guidance requests.


*(This is a generic diagram URL, you can create and link your own if you wish)*

---

## Core Features

-   **Secure User Authentication**: Full registration and login system with password hashing.
-   **Personalized Dashboard**: A central hub showing a user's registered courses, job applications, and career milestones.
-   **Dynamic Course & Job Listings**: Users can browse, search, and register for courses or apply for jobs.
-   **Personalized Guidance System**: Users can submit specific career questions and receive responses from an administrator.
-   **Dedicated Admin Panel**: An admin-only section to manage users (e.g., grant admin rights), add/edit/delete courses and jobs, and respond to guidance requests.
-   **Real-time Notifications**: A notification system to alert users of important events, such as a response to their guidance request.
-   **Career Progress Tracking**: Users can add and track their personal career milestones (e.g., "Completed a certification").

---

## Technologies Used

This project is built with the MERN stack philosophy, using JavaScript across the entire stack.

| Category      | Technology                                    |
| :------------ | :-------------------------------------------- |
| **Frontend**  | `HTML5`, `CSS3`, `Vanilla JavaScript (ES6+)`  |
| **Backend**   | `Node.js`, `Express.js`                       |
| **Database**  | `MongoDB` with `Mongoose` (via MongoDB Atlas) |
| **Libraries** | `CORS`, `(and others from package.json)`      |
| **Dev Tools** | `Git & GitHub`, `VS Code`                     |

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have the following software installed on your machine:
*   **Node.js** (which includes npm): [Download here](https://nodejs.org/)
*   **Git**: [Download here](https://git-scm.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/vikramvkm/trends-with-technology.git
    cd trends-with-technology
    ```

2.  **Set up the Backend Server:**
    *   Navigate to the server directory:
      ```sh
      cd server
      ```
    *   Install the required NPM packages:
      ```sh
      npm install
      ```
    *   Create a `.env` file in the `server` directory and add your MongoDB connection string:
      ```
      MONGODB_URI=your_mongodb_atlas_connection_string
      ```
      _(**Note:** For this project, the connection string is currently hardcoded in `server.js`. For production, using a `.env` file is best practice.)_

3.  **Run the Backend Server:**
    *   From the `server` directory, run:
      ```sh
      node server.js
      ```
    *   The server will start on `http://localhost:5000`. You should see a success message in the terminal confirming the database connection.

4.  **Run the Frontend Client:**
    *   **Leave the server terminal running.**
    *   Open the `/client/index.html` file in your favorite web browser.

The application should now be fully functional, with the front-end communicating with your local backend server.

---

## API Endpoints

The backend server exposes the following RESTful API endpoints:

| Method | Endpoint                    | Description                               |
| :----- | :-------------------------- | :---------------------------------------- |
| `POST` | `/api/users/register`       | Registers a new user.                     |
| `POST` | `/api/users/login`          | Logs in an existing user.                 |
| `GET`  | `/api/courses`              | Fetches all available courses.            |
| `GET`  | `/api/jobs`                 | Fetches all available jobs.               |
| `POST` | `/api/guidance/request`     | Submits a new guidance request (auth req).|
| `GET`  | `/api/admin/users`          | (Admin) Fetches all users.                |

*(This is a summary. More endpoints for courses, jobs, and user-specific data are defined in the `/server/routes` directory.)*

---

## Contact

Vikram Vkm - [your-email@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/vikramvkm/trends-with-technology](https://github.com/vikramvkm/trends-with-technology)

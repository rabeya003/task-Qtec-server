

# Todo List Server

Clientside repo: https://github.com/rabeya003/task-Qtec-client

This repository contains the code for a simple Todo List server built with Node.js and MongoDB. The server provides basic CRUD (Create, Read, Update, Delete) functionality for managing tasks in a Todo List application.

## Features

- **Create**: Add new tasks to the Todo List.
- **Read**: Retrieve all tasks or a specific task by its ID.
- **Update**: Modify an existing task.
- **Delete**: Remove a task from the Todo List.

## Technologies Used

- **Node.js**: A JavaScript runtime environment for building server-side applications.
- **Express.js**: A minimalist web framework for Node.js used to handle routing and middleware.
- **MongoDB**: A NoSQL database used to store tasks in the Todo List.
- **MongoDB Atlas**: A cloud-based MongoDB service used for hosting the database.

## Dependencies

- **express**: Web framework for Node.js.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **mongodb**: Official MongoDB driver for Node.js.

## Setup

1. Clone the repository to your local machine.
2. Install dependencies using npm or yarn: `npm install`.
3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    PORT=5000
    DB_USER=<your_mongodb_username>
    DB_PASSWORD=<your_mongodb_password>
    ```
4. Replace `<your_mongodb_username>` and `<your_mongodb_password>` with your MongoDB Atlas username and password.
5. Ensure that your MongoDB Atlas cluster allows connections from your IP address or from any IP address (0.0.0.0/0).
6. Start the server by running `nodemon index.js`.

## API Endpoints

- **GET /task**: Retrieve all tasks.
- **GET /task/:id**: Retrieve a specific task by its ID.
- **POST /task**: Create a new task.
- **PUT /task/:id**: Update an existing task.
- **DELETE /task/:id**: Delete a task by its ID.



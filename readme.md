# Docker Demo Project

This project is a sample for demonstrating how to use Docker to containerize a full-stack application with a React frontend and a Node.js backend.

## Project Structure

The project consists of two main parts:
- **Frontend**: Built with React using Create React App.
- **Backend**: Built with Node.js and Express.

## Installation

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    ```

2. **Install dependencies**:
    - Navigate to the project directory and install dependencies for both frontend and backend.
    ```sh
    cd docker-demo
    npm install
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. **Build and Run with Docker**:
    - Navigate back to the project root directory and start the containers.
    ```sh
    cd ..
    docker-compose up --build
    ```

## Usage

- **Frontend**: Access the React app at `http://localhost:3000`.
- **Backend**: The Node.js server will be running at `http://localhost:5000`.

## Project Layout

```markdown
docker-demo/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── ...
├── frontend/
│   ├── Dockerfile
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── docker-compose.yml
├── package.json
└── readme.md


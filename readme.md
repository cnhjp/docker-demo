# Docker Demo

This repository contains a demo application showcasing the use of Docker for containerization.

## Project Structure

The project consists of two main components:

- **backend**: Contains the backend server written in Node.js using Express.
- **frontend**: Contains the frontend web application written in React.

## Getting Started

To get started, ensure Docker is installed on your machine.

### Running the Application Locally

1. Clone the repository: `git clone https://github.com/your-username/docker-demo.git`
2. Navigate to the project directory: `cd docker-demo`
3. Build and run the Docker containers: `docker-compose up --build`
   - This will build the Docker images and start the containers for both the backend and frontend.
4. Access the application in your browser at `http://localhost:8080`.

### Building the Docker Images

To build the Docker images separately, use the following commands:

- Build the backend image:
  ```bash
  cd backend
  docker build -t backend .
  ```

- Build the frontend image:
  ```bash
  cd ../frontend
  docker build -t frontend .
  ```

### Running the Containers

To run the containers separately, use the following commands:

- Run the backend container:
  ```bash
  docker run -p 5000:5000 -d backend
  ```

- Run the frontend container:
  ```bash
  docker run -p 8080:80 -d frontend
  ```

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)


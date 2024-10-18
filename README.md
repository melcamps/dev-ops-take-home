# Task Manager

## Description
Task Manager is a web application for managing tasks. It allows users to add, delete, and view tasks, leveraging a backend built with Node.js, Express, and MongoDB, and a frontend developed with HTML, JavaScript, CSS. The application is containerized using Docker and orchestrated using Helm on a Kubernetes cluster.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [License](#license)

## Features
- Add new tasks
- View all tasks
- Delete tasks
- Built with a responsive and modern UI
- Containerized using Docker
- Deployed using Kubernetes with Helm

## Technologies Used
- **Frontend**: JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Containerization**: Docker
- **Orchestration**: Kubernetes, Helm
- **Version Control**: Git, GitHub

## Getting Started
Follow these instructions to set up the project locally.

### Prerequisites
- Docker
- Docker Compose
- Minikube
- Helm
- Node.js

### Local Development
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/task-manager.git
    cd task-manager
    ```

2. **Run the Application**:
    - Build and run the application using Docker Compose:
      ```bash
      docker-compose up
      ```
    - Access the frontend at `http://localhost:8080` and the backend at `http://localhost:3000`.

### Deployment
1. **Start Minikube**:
    ```bash
    minikube start
    ```

2. **Install the Helm Chart**:
    ```bash
    helm install task-manager ./task-manager
    ```

3. **Verify Deployment**:
    ```bash
    kubectl get pods
    kubectl get services
    ```
    

# React + Azure Container Apps Sample Project

This project is a sample application demonstrating the use of Azure Static Web Apps with a React frontend and Azure Container Apps with a Node.js backend. The project is designed to be easily deployable using `azd` command.

## Project Structure

- **static-web-app**: Contains the React frontend application.
- **backend**: Contains the Node.js application that serves as the backend API.

## Prerequisites

- Node.js (v14 or above)
- Azure CLI
- Azure Developer CLI (azd)
- Docker (for local development of the backend)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository_url>
cd react-container-app
```

### 2. Install Dependencies

#### Frontend

```bash
cd static-web-app
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

### 3. Run Locally

#### Frontend

```bash
cd static-web-app
npm start
```

#### Backend

```bash
cd backend
node index.js
```

### 4. Deploy to Azure

```bash
azd up
```

This will deploy both the frontend and backend to Azure, setting up the necessary resources automatically.

## Files Included

- **Dockerfile**: Used to containerize the Node.js backend.
- **index.js**: The entry point of the Node.js backend.
- **src/App.tsx**: The main React component fetching data from the backend API.
- **README.md**: This file.
- **azure.yaml**: Configuration file for `azd` deployment.

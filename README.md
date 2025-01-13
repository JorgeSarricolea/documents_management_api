# Documents API Server

## Overview

The **Documents API Server** is a backend application designed using the principles of **Clean Architecture**. It provides robust APIs for managing authentication, roles, categories, document information, and user documents. This project is built with **Node.js**, **Express.js**, and **Prisma ORM**, following a structured project layout for maintainability and scalability.

---

## Features

- **Authentication**:
  - Signup and login with role assignment.
  - Password hashing and JWT-based authentication.
- **Role Management**:
  - CRUD operations for roles.
- **User Management**:
  - CRUD operations for users.
- **Category Management**:
  - Define categories for documents with flexible configuration.
- **Document Management**:
  - CRUD operations for document information and user-specific documents.
- **Error Handling**:
  - Centralized error management using middleware.
- **CORS Enabled**:
  - Allows cross-origin resource sharing for secure communication.

---

## Project Structure

```
└── 📁src
    └── 📁__tests__
        └── 📁auth
            └── login.test.js
            └── signup.test.js
        └── 📁role
        └── 📁user
    └── 📁adapters
        └── 📁database
            └── 📁orm
                └── prisma.js
    └── 📁application
        └── 📁services
            └── 📁auth
                └── auth.service.js
                └── defaultRole.service.js
                └── login.service.js
                └── password.service.js
                └── signup.service.js
                └── token.service.js
            └── category.service.js
            └── documentInfo.service.js
            └── role.service.js
            └── user.service.js
            └── userDocument.service.js
    └── 📁domain
        └── 📁entities
            └── role.entitie.js
            └── user.entitie.js
        └── 📁repositories
            └── category.repository.js
            └── documentInfo.repository.js
            └── role.repository.js
            └── user.repository.js
            └── userDocument.repository.js
    └── 📁infrastructure
        └── 📁config
        └── 📁routes
            └── auth.routes.js
            └── category.routes.js
            └── documentInfo.routes.js
            └── role.routes.js
            └── user.routes.js
            └── userDocument.routes.js
        └── server.js
    └── 📁interfaces
        └── 📁controllers
            └── auth.controller.js
            └── category.controller.js
            └── documentInfo.controller.js
            └── role.controller.js
            └── user.controller.js
            └── userDocument.controller.js
        └── 📁middlewares
            └── error.handler.js
        └── 📁presenters
            └── category.presenter.js
            └── documentInfo.presenter.js
            └── role.presenter.js
            └── user.presenter.js
            └── userDocument.presenter.js
        └── 📁validators
            └── auth.validator.js
            └── category.validator.js
            └── documentInfo.validator.js
            └── role.validator.js
            └── userDocument.validator.js
    └── 📁mocks
        └── password.repository.mock.js
        └── role.repository.mock.js
        └── token.repository.mock.js
        └── user.repository.mock.js
    └── 📁shared
        └── 📁constants
        └── 📁exceptions
        ├── utils
```

---

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker and Docker Compose

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/documents_api_server.git
   cd documents_api_server
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=8000
   HOST=localhost
   DATABASE_URL=mysql://user:password@localhost:3306/your_database
   JWT_SECRET=your_jwt_secret
   MYSQL_ROOT_PASSWORD=your_root_password
   MYSQL_USER=your_user
   MYSQL_PASSWORD=your_password
   MYSQL_DATABASE=your_database
   ```

4. Set up the database using Docker Compose:
   Ensure Docker is running and execute:

   ```bash
   docker-compose up -d
   ```

5. Run Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev --name init
   ```

6. Start the server:

   ```bash
   pnpm start
   ```

7. Access the API:
   Open your browser or API client (e.g., Postman) and navigate to:
   ```
   http://localhost:8000/api/v1
   ```

---

## Usage

### Authentication

- **Signup**: `POST /auth/signup`
- **Login**: `POST /auth/login`

### Roles

- **Get all roles**: `GET /roles`
- **Create role**: `POST /roles`
- **Update role**: `PUT /roles/{id}`
- **Delete role**: `DELETE /roles/{id}`

### Users

- **Get all users**: `GET /users`
- **Get user by ID**: `GET /users/{id}`
- **Update user**: `PUT /users/{id}`
- **Delete user**: `DELETE /users/{id}`

### Categories

- **Get all categories**: `GET /categories`
- **Create category**: `POST /categories`
- **Update category**: `PUT /categories/{id}`
- **Delete category**: `DELETE /categories/{id}`

### Document Info

- **Get all documents info**: `GET /documents-info`
- **Create document info**: `POST /documents-info`
- **Update document info**: `PUT /documents-info/{id}`
- **Delete document info**: `DELETE /documents-info/{id}`

### User Documents

- **Get all user documents**: `GET /user-documents`
- **Create user document**: `POST /user-documents`
- **Update user document**: `PUT /user-documents/{id}`
- **Delete user document**: `DELETE /user-documents/{id}`

---

## Docker Compose Configuration

Below is the Docker Compose configuration for the MySQL database:

```yaml
version: "3.8"

services:
  mysql:
    image: mysql:9.1.0
    container_name: documents_manager_project
    networks:
      - documents_manager
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

networks:
  documents_manager:
    driver: bridge

volumes:
  mysql_data:
```

---

## Testing

Run the test suite using:

```bash
pnpm test
```

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

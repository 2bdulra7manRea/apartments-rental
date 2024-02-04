# Nest React Apartments Rental Web Application

## Overview

This web application is designed to manage apartments for rental purposes. It is built using React for the frontend, Node.js with NestJS for the backend, and MySQL as the database. TypeScript is used throughout the project, and class-validator is employed for data validation. The user interface is developed using Ant Design and Tailwind CSS libraries. Swagger is integrated for API documentation.

## Technologies Used

- **Frontend:**

  - React
  - Ant Design
  - Tailwind CSS

- **Backend:**
  - Node.js
  - NestJS
  - TypeScript
  - MySQL + TypeORM
  - Class Validator for DTO validation
  - Swagger for API documentation

## Features

- User Authentication using JWT.
- Three roles: Client, Admin, and Realtor.
- User functionalities: Login, Register, Logout.
- Filtering apartments by price, number of rooms, and size.
- Integration with Google Maps to display apartment locations.

### Roles and Permissions

- **Client:**

  - Can view and filter apartments.
  - Can manage their own profile.

- **Realtor:**

  - Can create and update apartments.
  - Can update the status of apartments (Rented/Available).

- **Admin:**
  - Has access to all resources.
  - Can manage users (Create/Delete/Update).
  - Can manage apartments (Create/Delete/Update).

## Application Examples

![Application Example](/src/image.jpg)

## Endpoints

### Authentication

- **POST** `/auth/login`

  - Login to the application.

- **POST** `/auth/register`
  - Register a new user.

### Users

- **GET** `/users/:id`

  - Retrieve user details by ID.

- **GET** `/users/list`

  - Retrieve a list of users.

- **POST** `/users/new`

  - Create a new user.

- **DELETE** `/users/:id`
  - Delete a user by ID.

### Apartments

- **GET** `/apartment/:id`

  - Retrieve apartment details by ID.

- **GET** `/apartment/list`

  - Retrieve a list of apartments.

- **POST** `/apartment/new`

  - Create a new apartment.

- **DELETE** `/apartment/:id`
  - Delete an apartment by ID.

## Getting Started

1. **Clone the repository:**

   ```
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```
   cd <project-folder>
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

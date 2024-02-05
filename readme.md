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

- Node.js application based on a layered architecture with MySQL database.
- User Authentication using JWT.
- Three roles: Client, Admin, and Realtor.
- User functionalities: Login, Register, Logout.
- Filtering apartments by price, number of rooms, and size.
- Integration with Google Maps to display apartment locations.

## Technologies and Patterns Used

- **Repository Pattern:** Implemented the repository pattern to separate data retrieval logic from the rest of the application.

- **Builder Pattern:** Utilized the builder pattern to construct complex objects in a step-by-step fashion, allowing for flexible object creation.

- **Functional Hooks in React:**

  - `useState`, `useEffect`, and other React hooks were employed to manage state and other React features in functional components.

- **UseQuery with AJAX in React:**

  - Leveraged the `useQuery` hook (possibly from Apollo Client or React Query) to handle AJAX requests in a declarative manner, simplifying data fetching and state management.

- **UseForm Hooks for Form Management:**
  - Integrated `useForm` hooks, possibly from libraries like `react-hook-form`, to streamline form state, validation, and submission processes.

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

![Application Example1](/img/1.jpeg)
![Application Example2](/img/2.jpeg)
![Application Example3](/img/3.jpeg)
![Application Example4](/img/4.jpeg)

## Endpoints

`http://{{localhost}}/api/`

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

### 1. Clone the repository

```
git clone <repository-url>
```

## Backend Setup

### 1. Install Dependencies

Navigate to the backend directory and run the following command to install the required dependencies:

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory and configure the following environment variables:

```env
NODE_SERVER_PORT=4000
DB_PORT=<Your_DB_Port>
DB_HOST=<Your_DB_Host>
MYSQL_ROOT_PASSWORD=<Your_MySQL_Root_Password>
MYSQL_DATABASE_USER_NAME=<Your_MySQL_Username>
MYSQL_DATABASE=<Your_MySQL_Database_Name>
SALT_ROUNDS=<Your_Salt_Rounds>
JWT_SECRET=<Your_JWT_Secret>
```

### 3. Set Up MySQL Database

Ensure you have MySQL installed and running. Update the `DB_PORT`, `DB_HOST`, `MYSQL_ROOT_PASSWORD`, `MYSQL_DATABASE_USER_NAME`, and `MYSQL_DATABASE` in the `.env` file with your database configuration.

### 4. Start the Backend Server

Run the following command to start the NestJS backend server:

```bash
npm run start:dev
```

Access the API endpoints either using a tool like Postman or through the provided Swagger documentation at `{{localhost}}/docs`.

## Frontend Setup

### 1. Install Dependencies

Navigate to the frontend directory and run the following command to install the required dependencies:

```bash
cd client
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the frontend directory and configure the following environment variables:

```env
REACT_APP_API_KEY=<Your_Google_Map_API_Key>
REACT_APP_BACKEND_URL_API=<Your_Backend_API_URL>
REACT_APP_TOKEN_KEY=<Your_Token_Local_Storage_Key_>
```

### 3. Start the Frontend Development Server

Run the following command to start the React frontend development server:

```bash
npm start
```

## Accessing the Application as Admin

To access the application as an admin, you can use the following credentials:

- **Email:** admin@admin.com
- **Password:** 1234

Please note that these are default admin credentials for development purposes.

Visit the application at `http://localhost:3000` in your web browser.

Now you have successfully set up and configured the NestJS React application for managing apartment rentals.

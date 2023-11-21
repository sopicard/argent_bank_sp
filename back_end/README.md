# Project #10 - Argent Bank API

This codebase contains the backend code needed to run the Argent Bank application, now using MongoDB Atlas for database management.

## Getting Started

### Prerequisites

The backend uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) database

Please make sure you have Node.js installed. Database configurations are managed through environment variables.

```bash
# Check Node.js version
node --version

### Instructions

1. Fork this repository.
2. Clone the forked repository to your computer.
3. Open a terminal in the project directory.
4. Create a .env file with the necessary environment variables based on .env.example.
5. Install dependencies and start the server:

# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

The server will start at http://localhost:3001, and your MongoDB Atlas database should now contain two users!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.






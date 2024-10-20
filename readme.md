# Historical Places API

## Description

Historical Places API is a Node.js application that serves as a backend for retrieving information about various historical places. It utilizes Express for building the web server.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)

## Installation

To get started with the project, clone the repository and install the required dependencies:

```bash
git clone https://github.com/salmanbukhari37/historical-places-api.gi
cd historical-places-api
npm install
```

## Usage

### Run the Project

```
npm run dev
```

This command uses ts-node-dev to start the application with live reload.

### Build the project

```
npm run build
```

This command compiles the TypeScript files into JavaScript.

### Run in Production Mode:

```
npm start
```

### API Endpoints

#### GET **/api/places**

Retrieve a list of all historical places.

#### GET **/api/places/:id**

Retrieve detailed information about a specific historical place by ID.

#### PUT **/api/places/:id**

Update the visited status of a specific historical place by ID.

##### Request Body:

```
{
  "visited": true // or false
}
```

## Dependencies

This project uses the following dependencies:

- cors: Middleware for enabling CORS (Cross-Origin Resource Sharing)
- dotenv: Module for loading environment variables from a .env file
- express: Web framework for Node.js

## Dev Development Dependencies

- @types/cors: Type definitions for cors
- @types/express: Type definitions for express
- @types/node: Type definitions for Node.js
  nodemon: Utility for automatically restarting the server during development
- ts-node-dev: TypeScript development server with live reload
- typescript: TypeScript language for developing applications

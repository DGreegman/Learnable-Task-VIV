# Hotel Management API

APIS in vanilla javascript using NodeJs and ExpressJs for the frontend to consume, for storage of room types and rooms, respectively, Authentication and Authorization added preventing unauthenticated users from having access and also if a user is authenticated and not an admin then the user can't delete or edit a room-type

# Folder Structure Conventions

> Folder structure and naming conventions to be followed using MVC Pattern

     |––Task-VIV root
     |–– src
     |	|–– config
     |	|	|- config.js
     |	|–– models
     |	|	|- rooms-model.js
     |  |   |- rooms-types-model.js
     |  |   |- user.model.js
     |	|–– routes
     |	|	|- rooms-routes.js
     |  |   |- rooms-types-routes.js
     |  |   |- user.route.js
     |	|–– controllers
     |	|	|- rooms-controllers.js
     |  |   |- rooms-types-controllers.js
     |  |   |- user.controller.js
     |  |–– errors
     |  |   |-CustomError.js
     |  |–– Helpers
     |  |   |- helpers.js
     |  |–– middlewares
     |  |   |- restrict.js
     |  |   |- validateToken.js
     |  |   |- validateUserInput.js
     |	|- app.js
     |-.gitignore
     |-package-lock.json
     |-package.json
     |-tsconfig.json
     |-README.md

# Requirements

Node - Javascript runtime Engine MongoDB - A NoSql Database for database connections

# Installation

1. clone Repo [repo](https://github.com/DGreegman/Learnable-Task-VIV)
2. install dependencies using the command:

    `npm install `

3. Set up:

-   MongoDB install MongoDB locally or use cloud based
-   Update the MongoDB connection string in config.js file to point to your MongoDB instance.

# Usage

**Start the server:**

    npm run dev

By default, the server runs on port 3000. You can change the port by setting the PORT environment variable.

# Documentation
link for documentation is below:

[docs](https://documenter.getpostman.com/view/29102282/2sA2xpU9yX)
# ticket 1 - understand these questions

## What endpoints and types of requests does this API support?
/api/users - GET, POST
/api/users/:id - GET, DELETE

## What's the main purpose of the `db/helpers.js` file?
to inject SQL to seed data and tables

## What's the main purpose of each file in the `users` folder?
### .model.js
- Functions that use SQL to interact with the database (SELECTING users, INSERT users & DELETE users)
### .controller.js
- The API handlers for each request relating to users (status handlers)
- It references .model.js
### .router.js 
- Linking the API handlers in .controllers.js to specific endpoints

## Where and how are the files in the `users` folder used within the overall API and Express app?
- .router.js interacts with .controller.js, which in turn interacts with .model.js, which then interacts with .index.js (the pool to talk to the database)

## What endpoints/operations does the API support?
- /api/users - GET, POST
/api/users/:id - GET, DELETE

## What's the purpose of the `vitest.config.js` file?

- setup config files

# Ticket 2 - Setup
- Familiarising yourself with an existing codebase Y
- Install the project's existing dependencies (listed in the package.json) Y
- Install Vitest and Supertest both as dev dependencies. Y
- Set up a PostgreSQL database Y
- Then create a .env file at the root of this repository and within it add a line: DATABASE_URL=REPLACE_ME_WITH_YOUR_CONNECTION_STRING Y

# Ticket 3 - Test Skeleton
- create users.test.js within users folder
- within users.test.js write a bare bones test (the test name can be "GET /api/health works" and the test callback can be left empty)


# Multitenant
 
This is a Node.js and MongoDB-based multitenant backend application for managing organizations, users, and stores. The application provides REST API endpoints for creating, retrieving, updating, and deleting organizations, users, and stores.

> Make sure you have mongod installed via this link https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/
> - Start mongod on Mac using this command `brew services start mongodb/brew/mongodb-community` and
> - Stop mongod using this command `brew services stop mongodb-community@6.0`


## Features
- Organization registration with basic information such as name, email, department, and password.
- User registration linked to organizations, including user details and role.
- Users can create private or public stores with store details like name, description, and link.

## Technologies Used
- Node.js
- Express.js
- MongoDB (via Mongoose)
  
## Getting Started
1. Clone this repository:

```
git clone https://github.com/your-username/organization-app.git
cd organization-app
```

2. Install the dependencies:
```
npm install
```
3. Configure MongoDB:

Update the MongoDB connection URL in `src/app.js` to point to your MongoDB instance.

4. Start the server:
```
node src/app.js
```
The server will run on http://localhost:3000 by default. You can now use API endpoints to interact with the application.

## API Endpoints
1. Organizations:

- POST /organizations: Create a new organization.
- GET /organizations: Get all organizations.
- GET /organizations/:id: Get a specific organization.
- PUT /organizations/:id: Update an organization.
  
2. Users:

- POST /organizations/:orgId/users: Create a new user within an organization.
- GET /organizations/:orgId/users: Get all users within an organization.
- PUT /users/:id: Update a user.

3. Stores:

- POST /users/:userId/stores: Create a new store for a user.
- GET /users/:userId/stores: Get all stores owned by a user.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.

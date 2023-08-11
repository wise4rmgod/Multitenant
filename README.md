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

Update the MongoDB connection URL in `server.js` to point to your MongoDB instance.

4. Start the server:
```
node server.js
```
The server will run on http://localhost:3000 by default. You can now use API endpoints to interact with the application.

## API Endpoints
### Organization Registration:
Create an Organization:

- Method: POST
- Endpoint: /organizations
- Request Body:
```json
{
  "name": "Organization Name",
  "email": "organization@example.com",
  "department": "IT",
  "password": "organizationPassword"
}
```
- Response: Newly created organization details
### Get All Organizations:

- Method: GET
- Endpoint: /organizations
- Response: List of all organizations
### Get a Specific Organization:

- Method: GET
- Endpoint: /organizations/:id
- Response: Details of the specified organization
### Update an Organization:

- Method: PUT
- Endpoint: /organizations/:id
- Request Body:
```json
{
  "name": "New Organization Name",
  "email": "new@example.com",
  "department": "HR"
}
```
- Response: Updated organization details

## Users Registration:
### Create a User:

- Method: POST
- Endpoint: /organizations/:orgId/users
- Request Body:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "userPassword",
  "role": "employee"
}
```
- Response: Newly created user details
### Get All Users for an Organization:

- Method: GET
- Endpoint: /organizations/:orgId/users
- Response: List of users in the specified organization
### Update a User:

- Method: PUT
- Endpoint: /users/:id
- Request Body:
```json
{
  "name": "Updated User Name",
  "role": "manager"
}
```
- Response: Updated user details

## Stores Management:
### Create a Store for a User:

- Method: POST
- Endpoint: /users/:userId/stores
- Request Body:
```json
{
  "name": "Store Name",
  "description": "Store Description",
  "link": "storelink.com"
}
```
- Response: Newly created store details
### Get All Stores for a User:

- Method: GET
- Endpoint: /users/:userId/stores
- Response: List of stores owned by the user

## Contributing
Contributions are welcome! Feel free to open issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.

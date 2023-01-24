# Todo List API

A simple API for a todo list app with authentication, built using Prisma as an ORM, JSONWebToken, and bcrypt.

## Getting Started

1. Clone the repository
```
git clone https://github.com/gordonGin/foodstyles-todos-api.git
```

2. Install dependencies

```
npm install
```

3. Add your database URL and your jwt secret to a `.env` file in the root of the project. The file should look like this:
```
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
```

4. Start the development server
```
npm start
```


## Features

- User registration and login
- Create, read, update, and delete todos
- Authentication using JSONWebToken and bcrypt
- Prisma as an ORM for database operations

## Endpoints

- `POST /user`: Register a new user
- `POST /signin`: Login an existing user
- `GET /todo`: Get a list of all todos
- `GET /todo:id`: Get a todo
- `POST /todo`: Create a new todo
- `PUT /todo/:id`: Update an existing todo
- `DELETE /todo/:id`: Delete an existing todo
 
## Built With

- [Express](https://expressjs.com/) - Web framework for Node.js
- [Prisma](https://www.prisma.io/) - ORM for database operations
- [JSONWebToken](https://jwt.io/) - Standard for creating JSON-based access tokens
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Library for hashing passwords

## Author

Ricardo Pimpão

## License

This project is licensed under the MIT License - see the [LICENSE.md]

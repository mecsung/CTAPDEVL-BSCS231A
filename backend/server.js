
//#region 1

// Import the Express module
// Anything load with require() is, by definition, a module in Node.js terminology
const express = require('express');

// Create an instance of the Express application
const app = express();

// Server Starter is a function that starts the server, 
// and listens on a specific port (3000 in this case)
// If the server is successfully running, it automatically calls the arrow function
// The arrow function is a callback that runs console.log to tell it's working
app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 

//#endregion

//#region 2

// Basic route to test the server
// Route Handler is a function that run when a specific route is hit
// .get() means it responds to GET requests (like when you visit a URL in your browser)
// / is the root path, so this route will be hit when you visit the base URL of the server
// The root path can be changed into like /welcome or /home/welcome
// REQuest object (contains info about the incoming request like headers, query params, etc.)
// RESponse object (used to send data back to the client)
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//#endregion

//#region 3

// Loads the dotenv package and runs its config() method 
// It reads a .env file and adds all the environment variables to process.env
require('dotenv').config();

// Load environment variables from a .env file into process.env
// process.env is an object containing environment variables 
const port = process.env.PORT;  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 

//#endregion

//#region 4

// Middleware is a function that runs between the request and the response
// .use() runs for every incoming request, regardless of the HTTP method or route
// Checks if the request has JSON data in its body
// If yes, it converts it to a JavaScript object
app.use(express.json());

// Custom Middleware to log the request path and method for every incoming request
// next is a method in the parameter
// res wasn't used, but it's there, 
// because middleware functions need 3 parameters (req, res, next) to work properly
app.use((req, res, next) => {
    console.log(req.path, req.method);

    // Passes control to the next middleware or route handler
    // calling the next method
    // If the next() function is not called, the request will be left hanging,
    // and the client will not receive a response
    next();
});

//#endregion

//#region 5

// Import the notes routes from the routes/notes.js file
const notesRoutes = require('./routes/notes');

// All routes in notesRoutes will now start with /api/notes
app.use('/api/notes', notesRoutes);

//#endregion
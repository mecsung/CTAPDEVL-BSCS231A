require('dotenv').config();

const express = require('express');
const dns = require('dns'); // Lets Node use custom DNS resolvers.
const mongoose = require('mongoose');
const notesRoutes = require('./routes/notes');

// Create an instance of the Express application
const app = express();

// Middleware
app.use(express.json()); // Parses JSON request bodies into req.body.

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});



// Use the notes routes
app.use('/api/notes', notesRoutes);

// Force reliable DNS resolvers for Atlas SRV lookups on restricted networks.
dns.setServers(['8.8.8.8', '1.1.1.1']); // Uses public DNS to resolve Atlas SRV records.

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting MongoDB:', error);
    });

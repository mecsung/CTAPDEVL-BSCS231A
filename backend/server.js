const express = require('express');

//Instance of express
const app = express();
//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use( (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

const notesRoutes = require('./routes/notes');
app.use('/api/notes', notesRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {    
    console.log(`Server is running on port ${process.env.PORT || 3000}`);   

});

// app.listen(3000, () => {    
//     console.log('Server is running on port 3000');

// });
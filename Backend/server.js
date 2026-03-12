require('dotenv').config();

const express = require ('express');
const mongoose = require ('mongoose');

const notesRouter = require('./routes/notes');
const app = express(); 
app.use (express.json());
app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
})
//route to notes
app.use('/api/notes', notesRouter);
mongoose.connect(process.env.MONGO_URI).then(() =>{
    app.listen(process.env.port, () => {
        console.log('Server and Database are running on port', process.env.port);
    });
}).catch((errror) => {
    console.error('Error connecting to Mongodb:',error);
    
});

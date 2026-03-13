const mongoose = require('mongoose');

// Create a reference to the Schema constructor from Mongoose
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        required: true
    }
}, {timestamps: true}
);

// Creates a Mongoose model named 'Note' based on the noteSchema
// "mongoose.model()" registers it with Mongoose, 
// and allows us to interact with the 'notes' collection in the MongoDB database
// The "noteSchema" tells Mongoose what fields each note should have (title and content)
module.exports = mongoose.model('Note', noteSchema);

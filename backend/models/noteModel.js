const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

// create model
// const Note = mongoose.model('Note', noteSchema);

// export model
// module.exports = Note;

module.exports = mongoose.model('Note', noteSchema);
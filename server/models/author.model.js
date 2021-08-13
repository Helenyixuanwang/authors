const mongoose = require('mongoose');
const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [ true, "A author name is required."],
        minLength: [3, "A author name must be at least 3 characters long."],
    },
}, { timestamps:true })

//collection name and the schema are required to create a model
module.exports = mongoose.model('Author', AuthorSchema);
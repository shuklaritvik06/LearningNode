const mongoose = require('mongoose');
const { username,password} = require("../config/dbConfig");

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.aeiaykn.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    }
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: String,
    name: String
});

module.exports = mongoose.model('usersDB',usersSchema);
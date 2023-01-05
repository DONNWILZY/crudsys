const mongoose = require('mongoose');
const schema = mongoose.Schema;
let memberSchema = new schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('staff', memberSchema)
const mongoose = require('mogoose');
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

module.exports = mongoose.model('member', memberSchema)
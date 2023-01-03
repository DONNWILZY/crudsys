const mongoos = require('mogoose');
const schema = mongoos.Schema;
let memberschema = new schema({
    fullname: {
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
    },
})

module.exports = mongoos.model('team', memberschema)
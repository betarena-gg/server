const mongoose = require("mongoose");
const schema = mongoose.Schema

const Hashschema = new schema({
    hash: {
        type: String,
        required: true,
    },
    used: {
        type: Boolean,
        default: false,
    }
}, { timestamp : true})

module.exports = mongoose.model('CrashGameHash', Hashschema)
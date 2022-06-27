const {Schema, model} = require("mongoose");

const usuarioSchema = Schema({
    name: {
        require: true,
        type: String
    },
    email: {
        unique: true,
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
})

module.exports = model('Usuario', usuarioSchema)
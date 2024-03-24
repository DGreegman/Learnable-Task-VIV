const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    confirm_password: {
        type: String
    },
    profilePic: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: "user"
    }
},
    {
        timestamps: true
    }

)

module.exports = mongoose.model("User", UserSchema)
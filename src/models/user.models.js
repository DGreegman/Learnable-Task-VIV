const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: [true, "Please confirm Your Password"]
    },
    profilePic: {
        type: String,
        default: ""
    },
},
    {
        timestamps: true
    }

)

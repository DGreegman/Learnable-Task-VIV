const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rooms = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    roomType: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'RoomType'
    }
},
    {
        timestamp: true
    }
)


module.exports = mongoose.model('Rooms', Rooms)
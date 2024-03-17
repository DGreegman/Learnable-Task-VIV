const mongoose = require('mongoose')

const RoomTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
},
    {
        timestamps:true
    }
)

module.exports = mongoose.model('RoomType', RoomTypeSchema)
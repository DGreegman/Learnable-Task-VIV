const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const roomsTypes = require('./routes/rooms-type-routes')
const rooms = require('./routes/rooms-route')



// Database Connection 
connectDb()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/rooms-types', roomsTypes)
app.use('/api/v1/rooms', rooms)


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

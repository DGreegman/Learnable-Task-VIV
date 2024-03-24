const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb = require('./config/config')
const roomsTypes = require('./routes/rooms-type-routes')
const rooms = require('./routes/rooms-route')
const CustomError = require('./errors/CustomError')
const errorHandler = require('./handler/handler')



// Database Connection 
connectDb()

dotenv.config()

// ROUTE USAGE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/rooms-types', roomsTypes)
app.use('/api/v1/rooms', rooms)

// DEFAULT ROUTE
app.use('*', (req, res, next) => {
/*     res.status(404).json({
        data:
        {
            status:'fail',
            message: `Oops... Seems Like the Route ${req.originalUrl} You are Looking For does not Exist`
        }
    }) */

/*     const err = new Error(`Oops... Seems Like the Route ${req.originalUrl} You are Looking For does not Exist`)
    err.statusCode = 404
    err.status = 'fail' */
    const err = new CustomError(`Oops... Seems Like the Route ${req.originalUrl} You are Looking For does not Exist`, 404)
    next(err)
})

app.use(errorHandler)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

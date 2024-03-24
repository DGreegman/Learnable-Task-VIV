const CustomError = require('../errors/CustomError')

/* 
    function to only allow only admins to perform specific operations like,
    delete and edit
*/
const restrict = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            next(new CustomError('Sorry but you do not have permission to perform this action...', 403))
        }
        next()
    }
}

module.exports = restrict   
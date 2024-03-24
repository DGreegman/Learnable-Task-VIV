const User = require('../models/user.models')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const CustomError = require('../errors/CustomError')


class UserController {

    async register(req, res, next) {

        try {

            const { name, email, password, role } = req.body

            const userExists = await User.findOne({ email })
            if (userExists) {
                const error = new CustomError('User with this email already exists', 400)
               return next(error)
            }

            const hashPassword = bcrypt.hashSync(password, 7)
            const user = new User({ name, email, password: hashPassword, role })

            await user.save()

            res.status(201).json({ message: 'User created' })
        } catch (e) {
            console.log(e)
        }
    }


    // login a user and implement jwt

    async login(req, res, next) {

        try {

            const { email, password } = req.body

            const user = await User.findOne({ email })
            if (!user) {
                const error = new CustomError('User with this email does not exist', 400)
                return  next(error)
            }

            const isPasswordCorrect = bcrypt.compareSync(password, user.password)
            if (!isPasswordCorrect) {
                const error = new CustomError('Password is incorrect', 400)
                return next(error)
            }

            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' })

            res.status(200).json({
                status: 'success',
                token,
                data: {
                    message: "User Successfully Logged In..."
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
}


module.exports = UserController


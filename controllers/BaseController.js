const { v4: uuidv4 } = require('uuid');
const User = require('../models/UserModel')

const BaseController = {
    homepage: (req, res, next) => {
        res.json({page: "home page two three four five"})
    },
    getUsersList: async (req, res, next) => {
        try {
            const users = await User.find()
            console.log('users: ', users)
            if(users.length === 0){
                throw new Error("No users are found")
            }
            res.json(users)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    getCreateAutoUser: async (req, res, next) => {
        try {
            const uid = uuidv4()
            const newUser = new User({
                name: "user " + uid,
                email: "user" +uid + "@example.com"
            })
            await newUser.save()
            res.json(newUser)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },
    getRandomUser: async (req, res, next) => {
        try {
            const count = await User.countDocuments()
            if(count === 0) throw new Error("No users Found")
            const random = Math.floor(Math.random() * count)
            const user = await User.findOne().skip(random)
            console.log('getRandomUser: ', count, random, user);
            res.json(user)
        } catch (error) {
            console.log(error);
            next(error)
        }
    },

};

module.exports = BaseController;
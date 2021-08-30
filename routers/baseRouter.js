const express = require('express')
const BaseController = require('../controllers/BaseController')
const router = express.Router()


// define the home page route
router.get('/', BaseController.homepage)
router.get('/users',BaseController.getUsersList)
router.get('/auto/user',BaseController.getCreateAutoUser)
router.get('/random/user',BaseController.getRandomUser)

module.exports = router
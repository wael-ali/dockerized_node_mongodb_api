const express = require('express')
const TodosController = require('../controllers/TodosController')
const router = express.Router()


// define the home page route
router.get('/todos', TodosController.getTodos)
router.post('/todos', TodosController.postAddTodo)

module.exports = router
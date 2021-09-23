const express = require('express')
const TodosController = require('../controllers/TodosController')
const router = express.Router()


// define the home page route
router.get('/todos', TodosController.getTodos)
router.post('/todos', TodosController.postAddTodo)
router.delete('/todos/:id', TodosController.deleteTodo)
router.put('/todos/:id', TodosController.putUpdateTodo)

module.exports = router
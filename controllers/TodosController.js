const User = require('../models/UserModel')
const Todo = require('../models/TodoModel')

const TodosController = {
    getTodos: async (req, res, next) => {
        try {
            let todos = await Todo.find()
            if (!todos || todos.length === 0) {
                todos = [
                    { text: 'example', isDone: false }
                ]
            }
            res.json({data: todos})
        } catch (error) {
            next(error)
        }
    },
    postAddTodo: async (req, res, next) => {
        try {
            const todoText = req.body.todo;
            if(!todoText) {
                const error = new Error('Bad content');
                error.statusCode = 400;
            }
            let newtodo = new Todo({
                text: todoText.trim()
            });
            newtodo = await newtodo.save()
            res.json({ todo: newtodo })
        } catch (error) {
            next(error)
        }

    }
};

module.exports = TodosController;
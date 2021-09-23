const User = require('../models/UserModel')
const Todo = require('../models/TodoModel')

const TodosController = {
    getTodos: async (req, res, next) => {
        try {
            let todos = await Todo.find()
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
            res.status(201).json({ todo: newtodo })
        } catch (error) {
            next(error)
        }

    },
    deleteTodo: async (req, res, next) => {
        try {
            const id = req.params.id;
            if(!id) {
                const error = new Error('Bad content');
                error.statusCode = 400;
            }
            const todo = await Todo.findById(id)
            if(!todo) {
                const error = new Error('Not Found')
                error.statusCode = 404
                throw error
            }
            await todo.delete()
            res.status(200).json({})
        } catch (error) {
            next(error)
        }
    },
    putUpdateTodo: async (req, res, next) => {
        try {
            const editedTodo = req.body.editedTodo;
            if(!editedTodo) {
                const error = new Error('Bad content');
                error.statusCode = 400;
            }
            let todo = await Todo.findById(editedTodo._id)
            if(!todo) {
                const error = new Error('Not Found')
                error.statusCode = 404
                throw error
            }
            todo.isDone = editedTodo.isDone
            todo.text = editedTodo.text
            todo = await todo.save()
            res.status(200).json({todo})
        } catch (error) {
            next(error)
        }
    }
};

module.exports = TodosController;
const User = require('../models/UserModel')

const TodosController = {
    getTodos: (req, res, next) => {
        res.json({todos: "todos controller::getTodos"})
    }
};

module.exports = TodosController;
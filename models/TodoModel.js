const mongoose = require('mongoose');

const TodoSechema = new mongoose.Schema({
  text: String,
  isDone: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('Todo', TodoSechema);
module.exports = Todo;
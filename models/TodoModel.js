const mongoose = require('mongoose');

const TodoSechema = new mongoose.Schema({
  text: { type: String, required: true },
  isDone: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('Todo', TodoSechema);
module.exports = Todo;
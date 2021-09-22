<template>
  <div class="p-8 bg-gray-100 md:w-1/2 rounded-md">
    <div class="mb-8 p-3 rounded bg-gray-300">
      <div>
        <input v-model="todo"
          class="p-1 rounded w-4/6"
          type="text"
          name="text"
          id="text"
        >
        <button
          class="p-1 rounded bg-green-600 w-1/6 float-right"
          @click="addTodoToList()"
        >
          Add
        </button>
      </div>
      <div v-if="todoError"
        class="text-xs text-red-500"
      >{{ todoError }}</div>
    </div>
    <h1 class="text-4xl mb-8">todos list</h1>
    <div class="p-3">
      <div v-for="(item, index) in todos" :key="index"
        class="p-1 mb-1 rounded bg-green-400"
      >
        <div class="p-1 flex items-center">
          <!-- <div class="text-xl ml-1"><font-awesome-icon icon="check-square" /></div> -->
          <div>
            <input :checked="item.isDone"
              class="mr-1"
              type="checkbox"
            >
          </div>
          <div class="flex-grow">{{ item.text }}</div>
          <div class="text-xl ml-1"><font-awesome-icon icon="trash" /></div>
        </div>
      </div>
      <div v-if="!todos || todos.length === 0">
          the Todo lis is empty.
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'TodosList',
  data () {
    return {
      todo: this.placeHolder(),
      todoError: null
    }
  },
  methods: {
    addTodoToList () {
      if (this.todo !== this.placeHolder()) {
        if (this.todos.find(todo => todo.text === this.todo) === undefined) {
          // this.$store.commit('ADD_TODO', this.todo)
          this.$store.dispatch('addTodo', this.todo)
          this.todo = this.placeHolder()
        } else {
          this.todoError = 'is already added!'
          setTimeout(this.clearTodoError, 2000)
        }
      } else {
        this.todoError = 'This should not be empty!!'
        setTimeout(this.clearTodoError, 2000)
      }
    },
    placeHolder () {
      return 'Add todo item...'
    },
    clearTodoError () {
      this.todoError = null
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  created () {
    console.log('Todos lis is created')
    this.$store.dispatch('getTodos')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> </style>

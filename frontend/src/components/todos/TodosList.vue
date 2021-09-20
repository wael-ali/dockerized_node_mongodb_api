<template>
  <div>
    <div>
      <input v-model="todo"
        type="text"
        name="text"
        id="text"
      >
      <button @click="addTodoToList()">
        Add
      </button>
    </div>
    <h1>todos list</h1>
    <div>
      <div v-for="(item, index) in todos" :key="index">
        <div class="bg-green-600">
         <span>{{ item.text }}</span>
         <span><font-awesome-icon icon="check-square" /></span>
         <span><font-awesome-icon icon="trash" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodosList',
  data () {
    return {
      todo: this.placeHolder(),
      todos: [
        { text: 'home work' },
        { text: 'haus halt' },
        { text: 'visit granny' }
      ]
    }
  },
  methods: {
    addTodoToList () {
      console.log('AAA: ' + this.todo)
      if (this.todo !== this.placeHolder()) {
        if (this.todos.find(todo => todo.text === this.todo) === undefined) {
          this.todos.push({ text: this.todo })
          this.todo = this.placeHolder()
        } else {
          alert('is already added!')
        }
      } else {
        alert('please, Add todo')
      }
    },
    placeHolder () {
      return 'Add todo item...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> </style>

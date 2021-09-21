<template>
  <div class="p-8 bg-gray-100 w-1/2 rounded-md">
    <div class="mb-8 p-3 rounded bg-gray-300">
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
        { text: 'home work', isDone: true },
        { text: 'haus halt', isDone: true },
        { text: 'visit granny', isDone: false }
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

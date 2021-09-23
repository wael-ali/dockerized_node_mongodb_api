<template>
  <div>
    <div class="p-1 flex items-center">
      <div>
        <input v-model="todo.isDone" :checked="todo.isDone"
          class="mr-1"
          type="checkbox"
          @change="updateTodo"
        >
      </div>
      <div class="flex-grow">{{ todo.text }}</div>
      <div class="text-xl ml-1">
        <span @click="deleteTodo(todo._id)">
          <font-awesome-icon icon="trash" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>

// import { mapState } from 'vuex'

export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      checked: this.todo.isDone
    }
  },
  methods: {
    updateTodo () {
      console.log('updateChecked', this.todo.isDone)
      this.$store.dispatch('updateTodo', this.todo)
    },
    deleteTodo (id) {
      this.$store.dispatch('deletTodo', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> </style>

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO: (state, payLoad) => {
      state.todos.push({
        text: payLoad,
        isDone: false
      })
    },
    SET_TODOS: (state, payLoad) => {
      state.todos = payLoad
    }
  },
  actions: {
    getTodos: async ({ commit }, payLoad = null) => {
      try {
        const response = await axios.get('/todos')
        console.log('Response:', response)
        if (response.status === 200) {
          commit('SET_TODOS', response.data.data)
        } else {
          console.log('cant get todos list')
        }
      } catch (error) {
        console.log('Error:', error)
      }
    },
    addTodo: async ({ dispatch }, payLoad) => {
      try {
        const response = await axios.post('/todos', { todo: payLoad })
        if (response.status === 201) {
          dispatch('getTodos')
        } else {}
        console.log('Response:', response)
      } catch (error) {
        console.log('Error:', error)
      }
    },
    deletTodo: async ({ dispatch }, id) => {
      try {
        const response = await axios.delete(`/todos/${id}`)
        if (response.status === 200) {
          dispatch('getTodos')
        } else {}
        console.log('Response:', response)
      } catch (error) {
        console.log('Error:', error)
      }
    },
    updateTodo: async ({ dispatch }, editedTodo) => {
      try {
        const response = await axios.put(`/todos/${editedTodo._id}`, { editedTodo: editedTodo })
        if (response.status === 200) {
          dispatch('getTodos')
        } else {}
        console.log('Response:', response)
      } catch (error) {
        console.log('Error:', error)
      }
    }
  },
  modules: {
  }
})

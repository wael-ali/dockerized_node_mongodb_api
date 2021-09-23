<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Home</router-link>
      <span v-if="userIsLoggedin">
        |
        <router-link to="/about">About</router-link> |
        <router-link :to="{ path: 'todos' }">Todos</router-link>
      </span>
      <span class="float-right">
        <router-link v-if="!userIsLoggedin" :to="{ path: 'login' }">Login</router-link>
        <button v-if="userIsLoggedin" @click="logout">Logout</button>
      </span>
    </div>
    <div class="">
      <div class="min-h-screen w-full flex justify-center items-center">
        <router-view/>
      </div>
    </div>
    <div class="p-3 bg-gray-500">
      <div class="text-center"> footer </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default ({
  name: 'App',
  computed: {
    ...mapGetters({
      userIsLoggedin: 'userIsLoggedin'
    })
  },
  methods: {
    logout () {
      this.$store.commit('SET_USER', null)
      localStorage.removeItem('todo_user')
      location.reload()
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  @apply flex flex-col bg-opacity-50;
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
  @apply p-2 h-10 bg-gray-100;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

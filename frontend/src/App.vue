<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ path: 'todos' }">Todos</router-link>
    </div>
    <div class="flex">
      <div class="bg-green-500 w-36">
        side bar
      </div>
      <div class="text-center bg-red-300 min-h-screen w-full">
        <router-view/>
      </div>
    </div>
    <div class="  bg-blue-500">
      <div> footer </div>
      <div> footer </div>
      <div> footer </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  @apply flex flex-col bg-red-500 bg-opacity-50;
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
  @apply p-2 h-10 bg-yellow-300;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

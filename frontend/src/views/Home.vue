<template>
  <div class="text-center">
    <img alt="logo" src="../assets/logo.svg">
    <HelloWorld msg="Welcome to Your Todos App"/>
    <!-- <font-awesome-icon icon="user-secret" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

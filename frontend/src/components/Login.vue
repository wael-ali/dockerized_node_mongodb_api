<template>
  <div class="md:w-2/6 ms:w-full p-5 bg-gray-200 rounded">
    <h1 class="mb-4">Login</h1>
    <div class="form">
      <div class="form-field">
        <input type="email"
          v-bind="form.email"
          name="email"
          id="loginEmail"
          placeholder="Email">
      </div>
      <div class="form-field">
        <input type="password"
          v-bind="form.password"
          name="password"
          id="loginPassword"
          placeholder="Password">
      </div>
      <div class="form-field rounded text-center p-1">
        <button @click="submitLogin">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitLogin () {
      alert('submit data is not implemented yet!!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form {
    @apply rounded;
  }
  .form .form-field {
    @apply mb-4 bg-blue-300;
  }
  .form-field input {
    @apply w-full p-1;
  }
</style>

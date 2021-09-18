<template>
  <div>
    <h1>Login Page</h1>
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
      <div class="form-field">
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
    width: 30%;
    margin: auto;
    padding: 2rem;
    background-color: rgb(240, 245, 245);
    border-radius: 4px;
  }
  .form .form-field {
    margin-bottom: 2rem;
  }

</style>

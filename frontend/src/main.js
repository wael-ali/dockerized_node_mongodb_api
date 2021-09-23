import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPlusSquare, faCheckSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/css/index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

library.add(faUserSecret, faPlusSquare, faCheckSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    const fakeUser = { name: 'fake_user', email: 'fake.eamil@example.com' }
    window.localStorage.setItem('todo_user', JSON.stringify(fakeUser))
    const user = window.localStorage.getItem('todo_user')
    this.$store.commit('SET_USER', JSON.parse(user))
    console.log('Vue APP is created', user)
  },
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'
import LoginSignUp from '@/components/LoginSignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginSignUp',
      component: LoginSignUp
    }
  ]
})

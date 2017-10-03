import Vue from 'vue'
import Router from 'vue-router'
import Karuta from '@/pages/Karuta'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Karuta',
      component: Karuta
    }
  ]
})

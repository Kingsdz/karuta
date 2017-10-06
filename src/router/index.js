import Vue from 'vue'
import Router from 'vue-router'
import Karuta from '@/pages/Karuta'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/karuta/', component: Karuta },
    { path: '/karuta/:package/:number', component: Karuta }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import KarutaPage from '@/pages/KarutaPage'
import HomePage from '@/pages/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/karuta/', component: KarutaPage },
    { path: '/karuta/:package/:number', component: KarutaPage }
  ]
})

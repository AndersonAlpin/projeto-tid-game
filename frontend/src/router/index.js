import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Game from '../views/Game.vue'
import Menu from '../views/Menu.vue'
import About from '../views/About.vue'
import Ranking from '../views/Ranking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

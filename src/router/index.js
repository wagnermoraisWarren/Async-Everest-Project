import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Formulario from '../components/Formulario.vue'
import Editar from '../components/Editar.vue'
import Lista from '../components/Lista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/register',
    name: 'register',
    component: Formulario
  },

  {
    path: '/edit',
    name: 'edit',
    component: Editar
  },

  {
    path: '/list',
    name: 'list',
    component: Lista
  }
]

const router = new VueRouter({
  routes
})

export default router
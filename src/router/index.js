import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ThingsTodo from '../components/ThingsTodo.vue'
import MountKlm from '../components/MountKlm.vue'
import BookView from '../components/BookView.vue'
import popDestination from '../components/popDestination.vue'
import RestView from '../components/RestView.vue'
import HotelView from '../components/HotelView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/ThingsTodo',
    name: 'ThingsTodo',
    component: ThingsTodo
  },
  {
    path: '/MountKlm',
    name: 'MountKlm',
    component: MountKlm
  },
  {
    path: '/BookView',
    name: 'BookView',
    component: BookView
  },
  {
    path: '/popDestination',
    name: 'popDestination',
    component: popDestination
  },
  {
    path: '/RestView',
    name: 'RestView',
    component: RestView
  },
  {
    path: '/HotelView',
    name: 'HotelView',
    component: HotelView
  },
]

const router = new VueRouter({
  routes
})

export default router

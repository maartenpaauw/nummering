import Vue from 'vue'
import Router from 'vue-router'
import Generator from '@/components/Generator'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'generator',
      component: Generator
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})

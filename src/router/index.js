import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Generator from '@/components/Generator'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'generator',
      component: Generator
    },
    {
      path: '/deze-tool',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'not_found',
      component: NotFound
    }
  ]
})

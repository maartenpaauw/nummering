import Vue from 'vue'
import Router from 'vue-router'
import TheGenerator from '@/components/TheGenerator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Generator',
      component: TheGenerator
    }
  ]
})

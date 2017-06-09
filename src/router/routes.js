import About from '@/components/About'
import Generator from '@/components/Generator'
import NotFound from '@/components/NotFound'

export default [
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

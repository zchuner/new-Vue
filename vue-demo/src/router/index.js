import Vue from 'vue'
import Router from 'vue-router'

// import home from '../components/home'
import msg from '@/components/msg'
import home from '@/components/home'
import list from '@/components/list'
// import homeheader from '@/components/homeheader'

Vue.use(Router)
const routes=[
  {
      path: '/home',
      name:'home',
      component:home

    },
    {
      path:'/msg',
      component:msg
    }
]
export default new Router({
  routes
})

import Vue from 'vue'
import Router from 'vue-router'

// import home from '../components/home'
import msg from '@/components/msg'
import home from '@/components/home'
import list from '@/components/list'
import show from '@/components/show'
import cloneapp from '@/components/cloneapp'


Vue.use(Router)
const routes=[
  {
      path: '/home',
      name:'home',
      component:home
      

    },
    {
      path:'/msg',
      component:msg,
      children:[
        {
          path:'show',
          name:'show',
          component:show
        },
        {
          path:'',component:msg
        }
      ]
      
    },
    {
      path: '/cloneapp',
      name:'cloneapp',
      component:cloneapp
      

    }
]
export default new Router({
  routes
})

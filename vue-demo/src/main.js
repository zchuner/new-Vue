// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueResource from 'vue-resource'
// import Router from 'vue-router'
import App from './App'
// Vue.use(Router)
// Vue.use(VueResource)
import router from './router/index'
// import msg from './components/msg'
// import home from './components/home'
// import list from './components/list'
// import homeHeader from './components/homeHeader'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data(){
  	return{

  	}
  },
  router,
  components: { App },
  template: '<App/>'
})


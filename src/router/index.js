import Vue from 'vue'
import Router from 'vue-router'
const index = ()=>import("@/components/main/index")

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

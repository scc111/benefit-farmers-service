import Vue from 'vue'
import Router from 'vue-router'
const index = () => import("@/components/main/index")
const dryFruitDetail = () => import("@/components/detail/dryFruit.vue")


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      // children: [
      //   { path: 'dryFruitDetail', name: 'dryFruitDetail', component: dryFruitDetail }
      // ]
    },
    {
      path: '/dryFruitDetail',
      name: 'dryFruitDetail',
      component: dryFruitDetail
    }
  ]
})

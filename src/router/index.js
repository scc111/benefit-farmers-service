import Vue from 'vue'
import Router from 'vue-router'
const index = () => import("@/components/main/index")
const dryFruitDetail = () => import("@/components/detail/dryFruit.vue")
const about = () => import("@/components/about/about.vue")


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/dryFruitDetail',
      name: 'dryFruitDetail',
      component: dryFruitDetail
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})

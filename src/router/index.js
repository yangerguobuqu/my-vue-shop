import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Cart from '@/views/cart'
import VueLazyload from "vue-lazyload"
Vue.use(Router)
Vue.use(VueLazyload, {
  loading: 'static/loading-svg/loading-bars.svg',
  try: 3 // default 1
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/GoodsList',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

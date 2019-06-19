import Vue from 'vue'
import VueRouter from 'vue-router'
import './cube-ui'
import App from './App.vue'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import './common/stylus/index.styl'

Vue.config.productionTip = false

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]
const router = new VueRouter({
  routes
})

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

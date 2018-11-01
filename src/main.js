import Vue from 'vue'
import App from './App.vue'
// import Router from 'vue-router'
// import About from '@/components/About'
// import '@/assets/scss/agency.scss'
Vue.config.productionTip = false
// Vue.use(Router)
// const router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/about',
//       name: 'about',
//       component: About
//     }
//   ]
// })

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')


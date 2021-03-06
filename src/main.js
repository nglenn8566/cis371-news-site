import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Paginate from 'vuejs-paginate'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.component('paginate', Paginate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

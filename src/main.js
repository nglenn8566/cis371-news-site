import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Paginate from 'vuejs-paginate'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import * as firebase from 'firebase';

Vue.use(BootstrapVue)
Vue.use(require('vue-moment'));

Vue.config.productionTip = false
Vue.component('paginate', Paginate)
router.beforeEach((to, from, next) =>{
  const user = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record =>record.meta.requiresAuth);
  if(requiresAuth && !user){
    next('/');
  } else if(requiresAuth && user){
    next();
  }else{
    next();
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Login from './views/Login.vue'
import About from './views/About.vue'
import Tech from './views/Tech.vue'
import ArticleView from './views/ArticleView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/tech',
      name: 'tech',
      component: Tech
    },
    {
      path: '/article/view',
      name: 'articleView',
      component: ArticleView
    }
  ],
  mode: 'history'
})

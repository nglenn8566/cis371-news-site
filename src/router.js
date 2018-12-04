import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Login from './views/Login.vue'
import About from './views/About.vue'
import Tech from './views/Tech.vue'
import ArticleView from './views/ArticleView.vue'
import CreateView from './views/Create.vue'
import Enter from './views/Entertainment.vue'
import Sports from './views/Sports.vue'
import Politics from './views/Politics.vue'


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
      path: '/entertainment',
      name: 'enter',
      component: Enter
    },
    {
      path: '/sports',
      name: 'sports',
      component: Sports
    },
    {
      path: '/politics',
      name: 'politics',
      component: Politics
    },
    {
      path: '/article/:uid',
      name: 'articleView',
      component: ArticleView
    },
    {
      path: '/create',
      component: CreateView,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})

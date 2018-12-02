import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Login from './views/Login.vue'
import About from './views/About.vue'
import Tech from './views/Tech.vue'
import ArticleView from './views/ArticleView.vue'
import CreateView from './views/Create.vue'
import NewUser from './views/NewUser.vue'

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
      path: '/NewUser',
      name: 'newUser',
      component: NewUser
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import HomeRecommend from 'pages/home/children/recommend/recommend'
import HomeCartoon from 'pages/home/children/cartoon/cartoon'
import HomeAmuse from 'pages/home/children/amuse/amuse'
import Subarea from 'pages/subarea/subarea'
import Serialization from 'pages/serialization/serialization'
import SerializationHot from 'pages/serialization/children/hot/hot'
import SerializationLatest from 'pages/serialization/children/latest/latest'

//import Subarea from 'pages/subarea/tab-container-templete'
import Finish from 'pages/finish/finish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/recommend'
    },
    {
      path: '/home',
      redirect: '/home/recommend'
    },
    {
      path: '/serialization',
      redirect: '/serialization/latest'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'recommend',
          component:HomeRecommend
        },
        {
          path:'cartoon',
          component:HomeCartoon
        },
        {
          path:'amuse',
          component:HomeAmuse
        },
      ]
    },

    {
      path: '/subarea',
      name: 'Subarea',
      component: Subarea,
    },

    {
      path: '/serialization',
      name: 'Serialization',
      component: Serialization,
      children:[
        {
          path:'hot',
          component:SerializationHot
        },
        {
          path:'latest',
          component:SerializationLatest
        }
      ]
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish
    }
  ]
})

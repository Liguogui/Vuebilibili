import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/home'
import HomeRecommend from 'pages/home/children/recommend/recommend'
import HomeCartoon from 'pages/home/children/cartoon/cartoon'
import HomeAmuse from 'pages/home/children/amuse/amuse'
import Subarea from 'pages/subarea/subarea'
import Serialization from 'pages/serialization/serialization'
import SerializationLatest from 'pages/serialization/children/latest/latest'
import SerializationHot from 'pages/serialization/children/hot/hot'
import Finish from 'pages/finish/finish'
import FinishLatest from 'pages/finish/children/latest/latest'
import FinishHot from 'pages/finish/children/hot/hot'

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
      path: '/finish',
      redirect: '/finish/latest'
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
          path:'latest',
          component:SerializationLatest
        },
        {
          path:'hot',
          component:SerializationHot
        }
      ]
    },

    {
      path: '/finish',
      name: 'Finish',
      component: Finish,
      children:[
        {
          path:'latest',
          component:FinishLatest
        },
        {
          path:'hot',
          component:FinishHot
        }
      ]
    }
  ]
})

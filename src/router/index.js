import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import InerParamRectify from '../components/InerParamRectify'
import ExternParamRectify from '../components/ExternParamRectify'
import LinerCast from '../components/LinerCast'
import RealTimeTest from '../components/RealTimeTest'

const routes = [
  {
    path: '/',
    redirect: { name: 'InerParam' }
  },
  {
    path: '/InerParam',
    name: 'InerParam',
    component: InerParamRectify
  },
  {
    path: '/ExternParam',
    name: 'ExternParam',
    component: ExternParamRectify
  },
  {
    path: '/Liner',
    name: 'Liner',
    component: LinerCast
  },
  {
    path: '/RealTime',
    name: 'RealTime',
    component: RealTimeTest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

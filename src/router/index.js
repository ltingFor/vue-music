import Vue from 'vue'
import Router from 'vue-router'
import Singer from '../components/singer/singer'
import Rank from '../components/rank/rank'
import Search from '../components/search/search'
import Recomment from '../components/recomment/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Recomment
    },
    {
      path: '/recomment',
      component: Recomment
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})

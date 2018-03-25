import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import VidyardPlayer from '@/components/VidyardPlayer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/watch/:uuid',
      name: 'VidyardPlayer',
      component: VidyardPlayer
    }
  ]
})

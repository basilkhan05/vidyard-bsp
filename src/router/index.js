import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VidyardPlayer from '@/components/VidyardPlayer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/watch/:uuid',
      name: 'VidyardPlayer',
      component: VidyardPlayer
    }
  ]
})

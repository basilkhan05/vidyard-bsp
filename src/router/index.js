import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import SimpleSharingPage from '@/components/SimpleSharingPage'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/watch/:uuid',
      name: 'SimpleSharingPage',
      component: SimpleSharingPage
    }
  ]
})

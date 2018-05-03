import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import SimpleSharingPage from '@/components/sharingPageTypes/SimpleSharingPage'
import DetailedSharingPage from '@/components/sharingPageTypes/DetailedSharingPage'
import TwoColumnPlaylist from '@/components/sharingPageTypes/TwoColumnPlaylist'

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
    },
    {
      path: '/watch/:uuid/details',
      name: 'DetailedSharingPage',
      component: DetailedSharingPage
    },
    {
      path: '/watch/:uuid/playlist/two-column',
      name: 'TwoColumnPlaylist',
      component: TwoColumnPlaylist
    }
  ]
})

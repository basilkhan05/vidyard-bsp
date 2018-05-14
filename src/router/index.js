import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/IndexPage'
import SimpleSharingPage from '@/components/sharingPageTypes/SimpleSharingPage'
import DetailedSharingPage from '@/components/sharingPageTypes/DetailedSharingPage'
import OneColumnPlaylist from '@/components/sharingPageTypes/OneColumnPlaylist'
import TwoColumnPlaylist from '@/components/sharingPageTypes/TwoColumnPlaylist'
import TimelinePlaylist from '@/components/sharingPageTypes/TimelinePlaylist'

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
      name: 'SimpleSharingPage',
      component: SimpleSharingPage
    },
    {
      path: '/watch/:uuid/details',
      name: 'DetailedSharingPage',
      component: DetailedSharingPage
    },
    {
      path: '/watch/:uuid/playlist',
      name: 'OneColumnPlaylist',
      component: OneColumnPlaylist
    },
    {
      path: '/watch/:uuid/playlist/two-column',
      name: 'TwoColumnPlaylist',
      component: TwoColumnPlaylist
    },
    {
      path: '/watch/:uuid/timeline',
      name: 'TimelinePlaylist',
      component: TimelinePlaylist
    }
  ]
})

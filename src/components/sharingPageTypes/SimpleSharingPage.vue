<template>
  <div>
    <h1>{{playerName}}</h1>
    <div id="stage">
      <div v-if="!playerIsReady">
        <Loader />
      </div>
      <div class="aspect-ratio">
        <VidyardPlayer @playerData="getPlayerData" ref="VidyardPlayerContainer"></VidyardPlayer>
      </div>
    </div>
  </div>
</template>

<script>
import VidyardPlayer from '@/components/VidyardPlayer'
import Loader from '@/components/layout/Loader'

export default {
  name: 'SimpleSharingPage',
  components: { VidyardPlayer, Loader },
  data () {
    return {
      playerName: '',
      playerDescription: '',
      playerIsReady: false,
      playerStatus: {}
    }
  },
  methods: {
    getPlayerData (params) {
      this.playerName = params.playerMetadata.name
      this.playerDescription = params.playerMetadata.description
      this.playerIsReady = params.playerReady
      this.playerStatus = params.playerStatus
      document.title = this.playerName
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    this.$refs.VidyardPlayerContainer.loadVidyardEmbedCode(to.params.uuid)
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#stage {
  padding: 0;
  margin: 0 auto;
  max-width: 853px
}
#stage .aspect-ratio {
  padding-bottom: 56.272%;
  position: relative;
  width: 100%;
  height: 0;
}
#stage .vidyard_player>span {
  position: absolute!important;
  width: 100%!important;
  height: 100%!important;
}
</style>

<template>
  <div id="vidyard-player" ref="vidyardPlayer">
    <i class="fa fa-cog"></i>
  </div>
</template>

<script>

export default {
  name: 'VidyardPlayer',
  data () {
    return {
      VidyardPlayer: {}
    }
  },
  watch: {
  },
  methods: {
    loadVidyardEmbedCode (uuid) {
      let vidyardEmbedCode = document.createElement('script')
      vidyardEmbedCode.type = 'text/javascript'
      vidyardEmbedCode.id = `vidyard_embed_code_${uuid}`
      vidyardEmbedCode.setAttribute('src', `//play.vidyard.com/${uuid}.js?v=3.1.1&type=inline`)
      this.$refs.vidyardPlayer.innerHTML = ''
      this.$refs.vidyardPlayer.appendChild(vidyardEmbedCode)
      this.PlayerReady = false
      this.initPlayerApi(uuid)
    },
    initPlayerApi (uuid) {
      // eslint-disable-next-line
      let VidyardPlayer = new window.Vidyard.player(uuid)
      VidyardPlayer.on('ready', function () {
        console.log('ready')
      })
      VidyardPlayer.on('play', function () {
        console.log('play')
      })
      VidyardPlayer.on('pause', function () {
        console.log('pause')
      })
      VidyardPlayer.on('seek', function () {
        console.log('seek')
      })
      VidyardPlayer.on('beforeSeek', function () {
        console.log('beforeSeek')
      })
      VidyardPlayer.on('playerComplete', function () {
        console.log('playerComplete')
      })
      VidyardPlayer.on('chapterComplete', function () {
        console.log('chapterComplete')
      })
      VidyardPlayer.on('timeupdate', function () {
        console.log('timeupdate')
      })
      VidyardPlayer.on('volumeChange', function () {
        console.log('volumeChange')
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    this.loadVidyardEmbedCode(to.params.uuid)
    next()
  },
  mounted () {
    console.log('mounted')
    let uuid = this.$route.params.uuid
    this.loadVidyardEmbedCode(uuid)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

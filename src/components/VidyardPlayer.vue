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
      this.VidyardPlayer = new window.Vidyard.player(uuid)
      this.VidyardPlayer.on('ready', function () {
        console.log('ready')
      })
      this.VidyardPlayer.on('play', function () {
        console.log('play')
      })
      this.VidyardPlayer.on('pause', function () {
        console.log('pause')
      })
      this.VidyardPlayer.on('seek', function () {
        console.log('seek')
      })
      this.VidyardPlayer.on('beforeSeek', function () {
        console.log('beforeSeek')
      })
      this.VidyardPlayer.on('playerComplete', function () {
        console.log('playerComplete')
      })
      this.VidyardPlayer.on('chapterComplete', function () {
        console.log('chapterComplete')
      })
      this.VidyardPlayer.on('timeupdate', function () {
        console.log('timeupdate')
      })
      this.VidyardPlayer.on('volumeChange', function () {
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

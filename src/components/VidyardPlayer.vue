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
      VidyardPlayer: {},
      PlayerReady: false
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
    },
    initPlayerApi (uuid) {
      // eslint-disable-next-line
      this.VidyardPlayer = new window.Vidyard.player(uuid)
      if (this.VidyardPlayer) {
        let VidyardPlayer = this.VidyardPlayer
        VidyardPlayer.on('ready', function () {
          VidyardPlayer.play()
        })
      }
    },
    watchVidyardPlayer () {
      this.initPlayerApi()
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    this.loadVidyardEmbedCode(to.params.uuid)
    this.initPlayerApi(to.params.uuid)
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

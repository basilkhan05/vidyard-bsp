<template>
  <div id="vidyard-player" ref="vidyardPlayer">
    Hello Basil's first Vue App
  </div>
</template>

<script>

export default {
  name: 'VidyardPlayer',
  watch: {
    'this.$route.params.uuid': 'loadVidyardEmbedCode'
  },
  methods: {
    loadVidyardEmbedCode (uuid) {
      let vidyardEmbedCode = document.createElement('script')
      vidyardEmbedCode.type = 'text/javascript'
      vidyardEmbedCode.id = `vidyard_embed_code_${uuid}`
      vidyardEmbedCode.setAttribute('src', `//play.vidyard.com/${uuid}.js?v=3.1.1&type=inline`)
      this.$refs.vidyardPlayer.innerHTML = ''
      this.$refs.vidyardPlayer.appendChild(vidyardEmbedCode)
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

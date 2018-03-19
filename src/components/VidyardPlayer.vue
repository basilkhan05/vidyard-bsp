<template>
  <div id="vidyard-player" ref="vidyardPlayer">
    Hello Basil's first Vue App
  </div>
</template>

<script>
export default {
  name: 'VidyardPlayer',
  mounted () {
    let uuid = this.$route.params.uuid
    let vidyardEmbedCode = document.createElement('script')
    vidyardEmbedCode.type = 'text/javascript'
    vidyardEmbedCode.id = `vidyard_embed_code_${uuid}`
    vidyardEmbedCode.setAttribute('src', `//play.vidyard.com/${uuid}.js?v=3.1.1&type=inline`)
    this.$refs.vidyardPlayer.appendChild(vidyardEmbedCode)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

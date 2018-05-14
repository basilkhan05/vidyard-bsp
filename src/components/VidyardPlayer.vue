<template>
  <div id="vidyard-player" ref="vidyardPlayer"></div>
</template>

<script>
export default {
  name: 'VidyardPlayer',
  props: [ 'playerData' ],
  data () {
    return {
      VidyardPlayer: {},
      playerStatusReady: false
    }
  },
  methods: {
    loadVidyardEmbedCode (uuid) {
      let queryParams = this.jsonToQueryString(this.$route.query)
      let vidyardEmbedCode = document.createElement('script')
      vidyardEmbedCode.type = 'text/javascript'
      vidyardEmbedCode.id = `vidyard_embed_code_${uuid}`
      vidyardEmbedCode.setAttribute('src', `//play.vidyard.com/${uuid}.js?v=3.1.1&type=inline&height=480&${queryParams}`)
      this.$refs.vidyardPlayer.innerHTML = ''
      this.$refs.vidyardPlayer.appendChild(vidyardEmbedCode)
      this.initPlayerApi(uuid)
    },
    playerReady () {
      this.playerStatusReady = true
      this.$emit('playerData',
        { VidyardPlayer: this.VidyardPlayer,
          playerMetadata: this.VidyardPlayer.metadata,
          playerReady: this.VidyardPlayer._ready,
          playerStatus: this.VidyardPlayer.status
        })
    },
    playerPlay () {
    },
    playerPause () {
    },
    playerSeek () {
    },
    playerBeforeSeek () {
    },
    playerComplete () {
    },
    playerChapterComplete () {
    },
    playerTimeupdate () {
      if (this.playerStatusReady) {
        this.$emit('playerData',
          { VidyardPlayer: this.VidyardPlayer,
            playerMetadata: this.VidyardPlayer.metadata,
            playerReady: this.VidyardPlayer._ready,
            playerStatus: this.VidyardPlayer.status
          })
      }
    },
    initVidyardPlayerApiEvent (event, callback) {
      this.VidyardPlayer.on(event, callback)
    },
    unloadVidyardPlayerApiEvent (event, callback) {
      this.VidyardPlayer.off(event, callback)
    },
    initPlayerApi (uuid) {
      // eslint-disable-next-line
      this.VidyardPlayer = new window.Vidyard.player(uuid)
      this.initVidyardPlayerApiEvent('ready', this.playerReady)
      this.initVidyardPlayerApiEvent('play', this.playerPlay)
      this.initVidyardPlayerApiEvent('pause', this.playerPause)
      this.initVidyardPlayerApiEvent('seek', this.playerSeek)
      this.initVidyardPlayerApiEvent('beforeSeek', this.playerBeforeSeek)
      this.initVidyardPlayerApiEvent('playerComplete', this.playerComplete)
      this.initVidyardPlayerApiEvent('chapterComplete', this.playerChapterComplete)
      this.initVidyardPlayerApiEvent('timeupdate', this.playerTimeupdate)
    },
    jsonToQueryString (json) {
      return Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + '=' +
        encodeURIComponent(json[key])
      }).join('&')
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.loadVidyardEmbedCode(to.params.uuid)
    next()
  },
  mounted () {
    let uuid = this.$route.params.uuid
    this.loadVidyardEmbedCode(uuid)
  },
  beforeDestroy () {
    this.playerStatusReady = false
    this.unloadVidyardPlayerApiEvent('ready', this.playerReady)
    this.unloadVidyardPlayerApiEvent('play', this.playerPlay)
    this.unloadVidyardPlayerApiEvent('pause', this.playerPause)
    this.unloadVidyardPlayerApiEvent('seek', this.playerSeek)
    this.unloadVidyardPlayerApiEvent('beforeSeek', this.playerBeforeSeek)
    this.unloadVidyardPlayerApiEvent('playerComplete', this.playerComplete)
    this.unloadVidyardPlayerApiEvent('chapterComplete', this.playerChapterComplete)
    this.unloadVidyardPlayerApiEvent('timeupdate', this.playerTimeupdate)
    this.unloadVidyardPlayerApiEvent('volumeChange', this.playervolumeChange)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

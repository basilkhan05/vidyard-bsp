<template>
  <div>
    <h1>{{playerName}}</h1>
    <div id="stage">
      <div class="aspect-ratio">
        <VidyardPlayer @playerData="getPlayerData" ref="VidyardPlayerContainer"></VidyardPlayer>
      </div>
    </div>
    <div class="player-description container">
      <b-card bg-variant="dark"
              text-variant="white"
              :title="`Now Playing ${(currentVideoIndex+1)} of ${(chapterAttributes.length)}`"
        >
        <h2>{{nowPlayingVideoName}}
          <b-badge>{{currentVideoTime}} / {{totalVideoDuration}}</b-badge>
        </h2>
        <p class="card-text">
          <span v-html="nowPlayerVideoDesc"></span>
        </p>
        <div v-if="chapterAttributes.length > 1">
          <b-button variant="primary" @click="playNextVideo(currentVideoIndex+1)">
            Play Next Video <i class="fa fa-forward"></i>
          </b-button>
        </div>
      </b-card>
      <hr/>
      <p>{{playerDescription}}</p>

    </div>
  </div>
</template>

<script>
import VidyardPlayer from '@/components/VidyardPlayer'
import leftPad from 'left-pad'

export default {
  name: 'DetailedSharingPage',
  components: { VidyardPlayer },
  data () {
    return {
      playerObject: {},
      playerName: '',
      playerDescription: '',
      playerMetadata: {},
      playerIsReady: false,
      playerStatus: {},
      nowPlayingVideoName: '',
      nowPlayerVideoDesc: '',
      currentVideoTime: '',
      totalVideoDuration: '',
      currentVideoIndex: 0,
      chapterAttributes: []
    }
  },
  methods: {
    getPlayerData (params) {
      this.playerObject = params.VidyardPlayer
      this.playerMetadata = params.playerMetadata
      this.playerName = params.playerMetadata.name
      this.playerDescription = params.playerMetadata.description
      this.playerIsReady = params.playerReady
      this.playerStatus = params.playerStatus

      this.getVideoMetadata()

      document.title = this.playerName
    },
    getVideoMetadata () {
      let { chapterIndex, currentTime } = this.playerStatus
      let lengthInSeconds = this.playerMetadata.chapters_attributes[chapterIndex].video_attributes.length_in_seconds

      this.chapterAttributes = this.playerMetadata.chapters_attributes
      this.nowPlayingVideoName = this.playerMetadata.chapters_attributes[chapterIndex].video_attributes.name
      this.nowPlayerVideoDesc = this.playerMetadata.chapters_attributes[chapterIndex].video_attributes.description

      this.totalVideoDuration = this.convertVideoDuration(lengthInSeconds)
      this.currentVideoTime = this.convertVideoDuration(currentTime)
      this.currentVideoIndex = chapterIndex
    },
    playNextVideo (index) {
      index = (index > this.chapterAttributes.length - 1) ? 0 : index
      this.playerObject.playChapter(index)
    },
    convertVideoDuration (totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = Math.floor(totalSeconds % 60)
      return minutes + ':' + leftPad(seconds, 2, 0)
    }
  },
  beforeRouteUpdate (to, from, next) {
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
.player-description {
  max-width: 853px;
  padding: 35px 0;
}
</style>

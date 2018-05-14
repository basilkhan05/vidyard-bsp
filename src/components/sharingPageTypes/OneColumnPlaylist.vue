<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="12">
          <div v-if="!playerIsReady">
            <Loader />
          </div>
          <h1 class="text-center">{{playerName}}</h1>
          <div id="stage">
            <div class="aspect-ratio">
              <VidyardPlayer @playerData="getPlayerData" ref="VidyardPlayerContainer"></VidyardPlayer>
            </div>
          </div>
        </b-col>
        <b-col lg="12">
          <div id="vy-playlist" v-if="playerIsReady">
            <div v-for="(video, index) in chapterAttributes" :key="video.id">
              <b-card :img-src="video.video_attributes.thumbnail_urls.play_button_small"
                  img-alt="Card image"
                  img-top
                  @click="playChapter(index)"
                  v-bind:class="{ active: currentVideoIndex === index }">
                <p class="card-text">
                  <span class="now-playing" v-if="currentVideoIndex === index">
                    Now Playing
                  </span>
                  {{video.video_attributes.name}}
                  <small class="video-duration">{{convertVideoDuration(video.video_attributes.length_in_seconds)}}</small>
                </p>
              </b-card>
            </div>
          </div>
          <div v-else>
            <Loader />
          </div>
        </b-col>
        <b-col lg="12">
          <div class="player-description container" v-if="playerIsReady">
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VidyardPlayer from '@/components/VidyardPlayer'
import Loader from '@/components/layout/Loader'
import leftPad from 'left-pad'

export default {
  name: 'DetailedSharingPage',
  components: { VidyardPlayer, Loader },
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
      this.playerObject.play()
    },
    playChapter (index) {
      this.playerObject.playChapter(index)
      this.playerObject.play()
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
<style scoped>
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
#vy-playlist .card {
  cursor: pointer;
  margin: 10px;
  transition: 0.25s all;
  width: 300px;
}
#vy-playlist {
  display: -webkit-box;
  overflow: scroll;
}
#vy-playlist .card:hover {
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#vy-playlist .card .now-playing {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 24px;
  background: rgba(0,0,0,0.5);
}
#vy-playlist .card small {
  padding: 4px;
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  background: grey;
}
</style>

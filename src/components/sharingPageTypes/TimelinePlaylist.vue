<template>
  <div>
    <b-container>
      <b-row>
        <b-col lg="7">
          <h1 class="text-left">{{playerName}}</h1>
          <div v-if="!playerIsReady">
            <Loader />
          </div>
          <div id="stage">
            <div class="aspect-ratio">
              <VidyardPlayer @playerData="getPlayerData" ref="VidyardPlayerContainer"></VidyardPlayer>
            </div>
          </div>
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
        <b-col lg="5" class="player-timeline">
          <h3>Player Timeline</h3>
          <div class="timeline-wrap" v-if="playerIsReady">
            <ul class="timeline">
              <div id="vy-playlist">
                <div v-for="(video, index) in chapterAttributes" :key="video.id">
                  <li class="era">
                    <b-card :img-src="video.video_attributes.thumbnail_urls.play_button_small"
                        img-alt="Card image"
                        img-bottom
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
                  </li>
                  <div v-if="videoChaptering[index]">
                    <li class="entry entry--right" v-for="(chapterMark) in videoChaptering[index]" :key="chapterMark.id" >
                      <div class="entry__content wow animated fadeIn"
                           data-wow-duration="1s"
                           data-wow-delay="0.5s"
                           @click="playChapterMark(index, chapterMark.seekTime)"
                          >
                          <h2>{{ chapterMark.description }} <small>({{ convertVideoDuration(chapterMark.seekTime) }})</small></h2>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
          </ul>
        </div>
        <div v-else>
          <Loader />
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
      chapterAttributes: [],
      videoChaptering: []
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
      this.videoChaptering = this.getVideoChaptering(this.playerMetadata.custom_attributes)
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
    playChapterMark (index, seekTime) {
      this.playerObject.playChapter(index)
      this.playerObject.play()
      this.playerObject.seek(seekTime)
    },
    convertVideoDuration (totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = Math.floor(totalSeconds % 60)
      return minutes + ':' + leftPad(seconds, 2, 0)
    },
    getVideoChaptering (customAttributes) {
      let videoChaptering = []
      for (let i = 0; i < customAttributes.length; i++) {
        let videoChapterMark = customAttributes[i].name.split('_')
        let videoChapterMarkIndex = parseInt(videoChapterMark[1])
        if (videoChapterMark[0] === 'vytimeline' && typeof videoChapterMarkIndex === 'number') {
          let chapterMarkDescription = videoChapterMark.slice(2).join(' ')
          let seekTime = parseInt(customAttributes[i].value)
          if (!videoChaptering[videoChapterMarkIndex]) {
            videoChaptering[videoChapterMarkIndex] = []
          }
          videoChaptering[videoChapterMarkIndex].push({
            description: chapterMarkDescription,
            seekTime: seekTime
          })
          // let chapterMarkDescription = videoChapterMark.slice(2).join(' ')
          // let seekTime = parseInt(customAttributes[i].value)
          // if (!videoChaptering[videoChapterMarkIndex]) {
          //   videoChaptering[videoChapterMarkIndex] = {}
          // }
          // videoChaptering[videoChapterMarkIndex][chapterMarkDescription] = seekTime
        }
      }

      for (var i = 0; i < videoChaptering.length; i++) {
        videoChaptering[i].sort(function (a, b) {
          let keyA = a.seekTime
          let keyB = b.seekTime
          if (keyA < keyB) return -1
          if (keyA > keyB) return 1
          return 0
        })
      }

      return videoChaptering
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
#vy-playlist .card {
  cursor: pointer;
  margin: 10px;
  transition: 0.25s all;
}
#vy-playlist .card.active {
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
.player-timeline {
  padding: 20px 0;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.timeline-wrap {
  height: 750px;
  overflow: scroll;
}
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding-top: 20px;
    background-color: inherit;
}
.timeline li {
  list-style: none;
}
.timeline:after {
    content: '';
    position: absolute;
    width: 5px;
    background-color: #3290B1;
    left: 50%;
    top: 0;
    bottom: 0;
    margin-left: -2px;
}

.timeline--first:after {
    top: 20px;
}

.era {
    text-align: center;
    position: relative;
    z-index: 1;
    padding-bottom: 20px;
}

.era__title {
    background-color: #3290B1;
    color: #EEEEEE;
    display: inline-block;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: default;
}

.entry {
    padding: 10px 30px 40px 30px;
    width: 50%;
    position: relative;
    background-color: inherit;
}

.entry--right {
    margin-left: 50%;
}

.entry__content {
    padding: 20px 30px;
    background-color: #EEEEEE;
    position: relative;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 0.2);
}

.entry__content:hover {
    background-color: rgb(231, 76, 60);
    color: #fff;
}

.entry:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 20px;
    width: 0;
    z-index: 1;
}

.entry:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    right: -17px;
    background-color: #EEEEEE;
    border: 4px solid #3290B1;
    top: 20px;
    border-radius: 50%;
    z-index: 1;
}

.entry--right:after {
    right: auto;
    left: -16px;
}

.timeline h2 {
    margin-bottom: 0.5em;
    font-size: 22px;
    font-weight: bold;
    text-transform: capitalize;
}

.timeline p {
    font-size: 15px;
    line-height: 1.4;
}

@media all and (max-width: 1500px) {
    .timeline:after {
        left: 33.75px;
    }
    .era {
        text-align: left;
        padding-left: 31.875px;
    }
    .entry {
        width: 100%;
        margin-left: 0;
        padding-left: 64px;
        padding-right: 20px;
    }
    .entry:before {
        right: auto;
        left: 56px;
        margin-left: 0;
    }
    .entry:after {
        left: 15px;
    }
}
</style>

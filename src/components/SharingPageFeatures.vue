<template>
  <b-container>
    <h2>Sharing Page Features</h2>
    <b-row>
      <b-col offset-lg="3" lg="6">
        <b-form-group horizontal
                  label-size="lg"
                  label="Player UUID"
                  label-for="player-uuid">
          <b-form-input id="player-uuid"
                      ref="playerUUID"
                      v-model="playerUUID"
                      type="text"
                      placeholder="Enter Vidyard Player UUID"
                      size="lg">
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col offset-lg="3" lg="6">
        <b-card cols="12" >
          <h3>Simple Sharing Page</h3>
          <b-input-group>
            <b-form-input type="text"
                          :value="'/watch/'+playerUUID"
                          :readonly="true">
            </b-form-input>
            <b-input-group-append>
              <b-btn variant="info" v-on:click="navigateTo('SimpleSharingPage', playerUUID)">
                <i class="fa fa-link"></i>
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-card>
      </b-col>
      <b-col offset-lg="3" lg="6">
        <b-card cols="12" >
          <h3>Detailed Sharing Page</h3>
          <b-input-group>
            <b-form-input type="text"
                          :value="'/watch/'+playerUUID+'/details'"
                          :readonly="true">
            </b-form-input>
            <b-input-group-append>
              <b-btn variant="info" v-on:click="navigateTo('DetailedSharingPage', playerUUID)">
                <i class="fa fa-link"></i>
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-card>
      </b-col>
      <b-col offset-lg="3" lg="6">
        <b-card cols="12" >
          <h3>One Column Playlist Page</h3>
          <b-input-group>
            <b-form-input type="text"
                          :value="'/watch/'+playerUUID+'/playlist'"
                          :readonly="true">
            </b-form-input>
            <b-input-group-append>
              <b-btn variant="info" v-on:click="navigateTo('OneColumnPlaylist', playerUUID)">
                <i class="fa fa-link"></i>
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-card>
      </b-col>
      <b-col offset-lg="3" lg="6">
        <b-card cols="12" >
          <h3>Two Column Playlist Page</h3>
          <b-input-group>
            <b-form-input type="text"
                          :value="'/watch/'+playerUUID+'/playlist/two-column'"
                          :readonly="true">
            </b-form-input>
            <b-input-group-append>
              <b-btn variant="info" v-on:click="navigateTo('TwoColumnPlaylist', playerUUID)">
                <i class="fa fa-link"></i>
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-card>
      </b-col>
      <b-col offset-lg="3" lg="6">
        <b-card cols="12" >
          <h3>Timeline Playlist Page</h3>
          <b-input-group>
            <b-form-input type="text"
                          :value="'/watch/'+playerUUID+'/timeline'"
                          :readonly="true">
            </b-form-input>
            <b-input-group-append>
              <b-btn variant="info" v-on:click="navigateTo('TimelinePlaylist', playerUUID)">
                <i class="fa fa-link"></i>
              </b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'SharingPageFeatures',
  methods: {
    navigateTo (page, uuid) {
      this.$router.push({ name: page, params: { uuid: uuid } })
    }
  },
  data () {
    return {
      playerUUID: this.$route.query.player_referrer ? this.$route.query.player_referrer : '2DRxX88aVKeMZnuXcbcv82'
    }
  }
}
</script>

<style scoped>
input {
  text-align: center;
}
</style>

<template>
  <div id="stage">
    <div class="aspect-ratio">
      <VidyardPlayer />
    </div>
  </div>
</template>

<script>
import VidyardPlayer from '@/components/VidyardPlayer'

export default {
  name: 'SimpleSharingPage',
  components: { VidyardPlayer }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#stage {
  padding: 0;
  margin: 0 auto;
  max-width: 1200px;
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
</style>

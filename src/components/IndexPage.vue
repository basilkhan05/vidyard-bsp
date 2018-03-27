<template>
  <div class="text-center container">
    <h1 class="padding-b-40">Welcome to the <br />{{ pageTitle }}</h1>
    <SharingPageFeatures />
  </div>
</template>

<script>
import SharingPageFeatures from '@/components/SharingPageFeatures'
import VueDocs from '@/components/VueDocs'

export default {
  name: 'IndexPage',
  components: { SharingPageFeatures, VueDocs },
  data () {
    return {
      pageTitle: 'Unofficial Vidyard Player Sharing Page 2.0'
    }
  },
  mounted () {
    document.title = this.pageTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-bottom: 40px
}
</style>

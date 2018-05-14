<template>
  <header>
    <div class="logo-holder">
      <router-link :to="{name: 'IndexPage', query: { player_referrer: this.$route.params.uuid} }">
        <img src="./assets/logo.png" class="respimg" alt="">
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
      top: 0;
      left: 0;
      position: fixed;
      width: 40%;
      height: 70px;
      background: transparent;
      z-index: 10;
      -webkit-transform: translate3d(0, 0, 0);
  }
  .logo-holder {
      float: left;
      max-width: 200px;
      height: 70px;
      position: relative;
      padding: 0 30px;
      line-height: 70px;
      background: rgb(231, 76, 60);
  }
  a {
    text-decoration: none;
    position: relative;
    color: #000;
  }
  .respimg {
    width: 100%;
    height: auto;
}

img {
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
}
  @media only screen and (max-width: 1036px) {
      header {
          width: 100%;
      }
  }
</style>

<template>
  <footer class="viselem visfooter" style="opacity: 1;">
    <div class="container">
      <div class="row">
        <!-- footer social -->
        <div class="footer-info">
          <h4>Connect with me</h4>
          <div class="footer-social">
            <ul>
              <li><a href="https://twitter.com/BasilAKhan" target="_blank"><i class="fa fa-twitter"></i></a></li>
              <li><a href="https://github.com/basilkhan05" target="_blank"><i class="fa fa-github"></i></a></li>
              <li><a href="https://ca.linkedin.com/in/basilkh" target="_blank"><i class="fa fa-linkedin"></i></a></li>
              <li><a href="skype:basi1.k?call" target="_blank"><i class="fa fa-skype"></i></a></li>
            </ul>
          </div>
        </div>
        <!-- footer contacts -->
        <div class="footer-info">
          <h4>Contact info</h4>
          <ul class="footer-contacts">
              <li><a href="https://www.google.ca/maps/place/Kitchener,+ON/@43.4305376,-80.5463551,12z/data=!3m1!4b1!4m5!3m4!1s0x882bf48c03ee5105:0x9525f8e6df5f544b!8m2!3d43.450301!4d-80.4831917"><i class="fa fa-map"></i> Kitchener, ON Canada</a></li>
              <li><a href="mailto:basil.khan@uwaterloo.ca"><i class="fa fa-envelope-o"></i> basil.khan@uwaterloo.ca</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--to top / privacy policy-->
    <div class="to-top-holder">
      <div class="container">
        <p> <span> © Basil Khan {{currentYear}} </span> </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currentYear: (new Date()).getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: rgb(231, 76, 60);
  text-decoration: none;
}
</style>

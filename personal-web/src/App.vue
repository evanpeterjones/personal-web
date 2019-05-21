<template>
  <div id="app">
    <div id="left-block">
      <ImageComponent />
      <Haiku />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  window.alert("Sorry this looks wonky, the page isn't mobile optimized yet");
}

import Haiku from './components/Haiku.vue'
import ImageComponent from './components/ImageComponent.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Footer, Haiku, ImageComponent
  }
}
</script>

<style>
#left-block{
  float : left;
}

#app{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 0.9em;
    font-family: 'Work Sans', sans-serif;
    background: #ffffff;
    text-align: center;
    margin-top: 60px;
}
</style>

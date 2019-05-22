<template>
  <div id="app">
    <div id="left-block">
      <ImageComponent />
      <Haiku />
    </div>
    <div id="right-block">
      <LinkList />
    </div>
    <div id="footer">
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
import LinkList from './components/LinkList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Haiku, ImageComponent, LinkList, Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&display=swap');

#left-block{
  float : left;
  margin-left: 10%;
}

#right-block {
  float : right;
  margin-right: 20%;
}

#app{
  margin: 15vh 0 0 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.9em;
  font-family: 'Work Sans', sans-serif;
  background: #ffffff;
  text-align: left;
  margin-top: 60px;
}
#footer {
  width: 100%;
  float: right;
  bottom: 0;
  text-align: right;
  margin: 5vh 14% 0 0;
}
</style>

<template>
  <div id="app">
      <div id="left-block">
        <ImageComponent />
        <Haiku />
        <div v-if="mobile">
          <LinkList v-bind:links="first" head="Work"/>
          <LinkList v-bind:links="second" head="Play"/>
        </div>
      </div>
      <div v-if="!mobile" id="right-block">
        <multipane layout="horizontal">
          <div><LinkList :links="first" head="Work" color="pink"/></div>
        <multipane-resizer></multipane-resizer>
          <div><LinkList :links="second" head="Play" color="#add8e6"/></div>
        </multipane>
      </div>
    <Footer />
  </div>
</template>

<script>
function isMobile () {
  return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) );
}

import Haiku from './components/Haiku.vue'
import { Multipane, MultipaneResizer } from 'vue-multipane'
import ImageComponent from './components/ImageComponent.vue'
import LinkList from './components/LinkList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Haiku, ImageComponent, LinkList, 
    Footer, Multipane, MultipaneResizer
  },
  data : function () {
    return {
      first : [
        { name : "Internetizens", url : "https://internetizens.net" },
        { name : "Relaxidaisical Blog", url : "https://relaxidaisical.blogspot.com/" },
        { name : "Github", url : "http://github.com/evanpeterjones" }
      ],
      second : [
        { name : "Twitter", url : "https://twitter.com/evanpeterjones", },
        { name : "LinkedIn", url : "https://www.linkedin.com/in/evanpeterjones/" },
        { name : "Instagram", url : "https://www.instagram.com/evanpeterjones", }
      ],
      mobile : isMobile()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&display=swap');

:root {
  --primary : aquamarine;
  --accent : pink;
  --grey : #3a3a3a;
  --shadow :   rgba(45, 39, 49, .2);
  --penumbra : rgba(39, 44, 49, .1);
}

#left-block{
  float : left;
  padding-left: 10%;
}

#right-block {
 float: right;
 padding-right: 10%;
}

#app{
  margin: 15vh 0 0 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.9em;
  font-family: 'Work Sans', sans-serif;
  text-align: left;
  margin-top: 60px;
}
#right-block {
  padding-right: 20%;
}
</style>

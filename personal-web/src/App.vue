<template>
  <div id="app">
    <div id="left-block">
      <ImageComponent />
      <Haiku />    
      <div v-if="mobile">
        <LinkList v-bind:links="first" head="Play"/>
        <LinkList v-bind:links="second" head="Work"/>
      </div>      
    </div>
    <div v-if="!mobile" id="side-panel">
       <LinkList v-bind:links="first" head="Play"/>
       <LinkList v-bind:links="second" head="Work"/>
    </div>
    <Footer />    
  </div>
</template>

<script>
function isMobile () {
  return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) );
}

import Haiku from './components/Haiku.vue'
import ImageComponent from './components/ImageComponent.vue'
import LinkList from './components/LinkList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Haiku, ImageComponent, Footer, LinkList
  },
  data : function () {
    return {
      first : {
    "Internetizens" : "https://internetizens.net",
    "Relaxidaisical Blog" : "https://relaxidaisical.blogspot.com/",
    "Github" : "http://github.com/evanpeterjones"
      },       
      second : {
    "Twitter" : "https://twitter.com/evanpeterjones",
    "LinkedIn" : "https://www.linkedin.com/in/evanpeterjones/",
    "Instagram" : "https://www.instagram.com/evanpeterjones",
      },      
      mobile : isMobile()
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&display=swap');

:root {
  --grey : #3a3a3a;
  --shadow :   rgba(45, 39, 49, .2);
  --penumbra : rgba(39, 44, 49, .1);
}

#left-block{
  float : left;  
  padding-left: 10%;
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
#side-panel {
  float: right;
}
</style>

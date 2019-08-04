<template>
  <div id="app">
    <div id="left-block" v-if="this.$store.state.mobile">
      <Haiku />
      <ImageComponent />
    </div>
    <div id="left-block" v-else>
      <ImageComponent />
      <Haiku />
    </div>
    <div id="right-block" v-if="!this.$store.state.mobile">
      <LinkList :links="first" head="Work" color="pink"/>
      <LinkList :links="second" head="Play" color="#add8e6"/>
      <Dialog />
    </div>
    <Footer />
  </div>
</template>

<script>
const Haiku = () => import('./components/Haiku.vue');
const ImageComponent = () => import('./components/ImageComponent.vue');
const LinkList = () => import('./components/LinkList.vue');
const Footer = () => import('./components/Footer.vue');
//const Overlay = () => import('./components/Overlay.vue');
const Dialog = () => import('./components/Dialog.vue');
// import '@zeit-ui/style'

export default {
  name: 'app',
  components: {
    Haiku, ImageComponent, LinkList, Footer, Dialog
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
      ]
    }
  },
  beforeMount () {
    this.$store.state.mobile = (window.innerWidth < 900) || 
      (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&display=swap');

:root {
  --primary : pink;
  --accent : white;
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
  width: 30%; 
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
body{
  background-color: var(--accent);
}

</style>

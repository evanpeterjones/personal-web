<template>
  <div id="app">
    <div>
      <ImageComponent />
    </div>
    <Footer />
  </div>
</template>

<script>
import ImageComponent from './components/ImageComponent.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    ImageComponent, Footer
  }
}
</script>

<style>
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

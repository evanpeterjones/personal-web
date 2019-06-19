<template>
<div>
  <div v-if="this.$store.state.mobile">
    <footer style="text-align:center;"><p>© {{ year }} <b>Design by Evan Jones</b> made w/Vue</p></footer>
  </div>
  <div v-else>
    <footer class="footer-style"><p>© {{ year }} <b>Design by Evan Jones</b> made w/Vue</p></footer>
  </div>
</div>
</template>

<script>
    export default {
        name : 'Footer',
        data : function () {
            return {
              year : (new Date()).getFullYear()
            }
        }
    }
</script>

<style scoped>
.footer-style {
  float: right;
  position:absolute;
  bottom: 0;
  right: 0;
  margin: 5vh 14% 0 0;
}
p {
  font-size: 0.9em;
  color : var(--grey);
  opacity: 0.4;
  letter-spacing: -0.3px;
}
</style>

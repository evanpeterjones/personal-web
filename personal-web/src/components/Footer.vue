<template>
<footer><p>© {{ year }} <b>Design by Evan Jones</b></p></footer>
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
footer {
  width: 20%;
  float: right;
  bottom: 0;
  right: 0;
  margin: 5vh 14% 0 0;
}
p {
  font-size: 0.9em;
  color: #1c1c1c;
  opacity: 0.4;
  letter-spacing: -0.3px;
}
</style>

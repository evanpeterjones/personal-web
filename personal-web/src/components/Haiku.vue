<template>
<a v-on:click="newHaiku"><span v-html="current"></span></a>
</template>

<script>
  var haikus = [
  "<h1>Hello,<br />I'm Evan.</h1><p>Developer, Creator,</p><p><i>~ this is a Haiku ~</i></p><br/></div>",
  "<p id='test'><b>I write, erase, rewrite,<p/><p>erase again, and then</p><p>a poppy blooms</p></b><p><br/><i>~ Hokushi ~</i></p>",
  "<p><b>What a strange thing!</p><p>to be alive</p><p>beneath cherry blossoms.</b></p><p><br/><i>~ Kobayashi Issa ~</i></p>",
  ];

  var count = 0;

  export default {
    name : 'Haiku',
    data : function () {
      return {
        current : haikus[0]
      }
    },
    methods : {
      newHaiku() {
        this.current = haikus[ count % haikus.length ];
        count++;
      }
    }
  }
</script>

<style scoped>
#Haiku {
  align-content: right;
}
>>> h1 {
  text-shadow: 1px 1px 2px lavender;
  color: var(--grey);
  margin: 0 0 15px 0;
  font-size : 4em;
  line-height: 60px;
}
>>> p {
  color: var(--grey);
  width:100%;
  font-size: 1.8em;
  margin: 2px 0 0 0;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  animation: type 3s steps(60, end);
}
</style>

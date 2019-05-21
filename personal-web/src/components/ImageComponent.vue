<template>
<a v-bind:href="wikilink">
    <img alt="image of Evan Jones" src="../assets/evan.jpg">
</a>
</template>

<script>
    function randomWikiLink()
    {
        return 'https://en.wikipedia.org/wiki/Special:Random';
    }

    export default {
        name : 'Footer',
        data : function () {
            return {
                wikilink : randomWikiLink()
            }
        }
    }
</script>

<style scope='local'>
img {
  -webkit-transition: 0.4s ease;
  width : 400px;
  margin-right: 10px;
  border-radius : 100px;
  padding: 20px;
  background: pink;
  margin: 0px 0 0 -35px;
}

img:hover {
  -webkit-transition: 0.15s ease;
  width: 420px;
  border-radius : 60px;
}
</style>

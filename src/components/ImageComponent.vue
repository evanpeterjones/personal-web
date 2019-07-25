<template>
<a v-bind:href="wikilink">
    <div v-if="this.$store.state.mobile">
        <img alt="image of Evan Jones" src="../assets/evan.png" class="mobileimg">
    </div>
    <div v-else>
        <img alt="image of Evan Jones" src="../assets/evan.png" class="desktop">
    </div>
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
.desktop {
  -webkit-transition: 0.3s ease;
  height : 30em;
  border-radius : 100px;
  margin: 0px 0 30px 0px;
  box-shadow: 8px 20px 38px var(--shadow), 1px 3px 8px var(--penumbra);
}

.desktop:hover {
  -webkit-transition: 0.2s ease;
  height: 31em;
  border-radius : 80px;
}

.mobileimg {
    -webkit-transition: 0.4s ease;
    box-shadow: 8px 20px 38px var(--shadow), 1px 3px 8px var(--penumbra);
    margin: 0px 0 30px 0px;
    border-radius: 10px;
    border: 0px var(--accent) solid;
    width: 90%;
}
</style>

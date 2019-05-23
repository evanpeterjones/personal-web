<template>
<div id="link">
  <span class="border" :style="style"></span>
    <h1>{{ head }}</h1>
    <ul>
        <list-item 
            v-for="item in links" 
            :key="item.name" 
            :itemName="item.name"
            :url="item.url">
        </list-item>
    </ul>
</div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name : 'LinkList',
  props : {
    'links' : Array,
    'head'  : String,
    'color' : String
  },
  components : {
    ListItem
  },
  computed : {
    style () {
      return 'color : ' + this.color + ';'
    }
  }
}
</script>

<style scoped>
#link {
    width: 30%;
}
h1 {
  font-size: 2.2em;
  letter-spacing: -0.5px;
  color: var(--grey);
}
#link .border {
  height : 10px;
  margin: 0 0 10px 0;
  width: 20%;
  display: block;
}
</style>

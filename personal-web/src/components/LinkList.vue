<template>
<div id="link">
  <span class="border" :style="style">
    <h1>{{ head }}</h1>
  </span>
    <ul>
      <ListItem
      v-for="item in links"
      :key="item"
      :object="item"
      />
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
h1 {
  font-size: 2.2em;
  letter-spacing: -0.5px;
  color : var(--grey);
  float : left;
}
li {
  color : var(--grey);
}
#link .border {
  width: 100%;
  display: block;
}
</style>

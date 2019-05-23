<template>
<div>
  <li><a v-bind:href="url">{{ itemName }}</a></li>
</div>
</template>

<script>
export default {
  name : 'ListItem',
  props : {
    "itemName" : String,
    "url" : String
  }
}
</script>

<style>
li {
  -webkit-transition: 0.3s ease;
  list-style-type: none;
  margin: 15px 0;
  font-size: 1.3em;
}
li:hover {
  -webkit-transition: 0.07s ease;
  padding: 0 0 0 10px;
  border-left: 5px solid grey;
  opacity: .8;
}
a {
  text-decoration: none;
  color: var(--grey);
}
</style>

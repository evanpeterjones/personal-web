<template>
<div>
  <p><a v-bind:href="url">{{ itemName }}</a></p>
</div>
</template>

<script>
export default {
  name : 'ListItem',
  props : {
    "itemName" : String,
    "url" : String,
    "color" : String
  }
}
</script>

<style>
p {
  -webkit-transition: 0.3s ease;
  list-style-type: none;
  margin: 15px 0;
  font-size: 1.3em;
}
p:hover {
  -webkit-transition: 0.07s ease;
  padding: 0 0 0 10px;
  border-left: 5px solid green;
  opacity: .8;
}
a {
  text-decoration: none;
  color: var(--grey);
}
</style>

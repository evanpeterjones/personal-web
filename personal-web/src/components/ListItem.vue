<template>
<div>
  <p>{{ object.name }}</p>
</div>
</template>

<script>
export default {
  name : 'ListItem',
  props : {
    'object' : Object,
  }
}
</script>

<style>
li {
width: 100%;
color:black;
}
</style>

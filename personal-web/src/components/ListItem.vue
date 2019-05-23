<template>
    <a href="{{ url }}"><li>{{ itemName }}</li></a>
</template>

<script>
export default {
    name : 'ListItem',
    props : ['itemName', 'url']    
}
</script>

<template>
<div id="link">
    <h1>{{ head }}</h1>
    <ul>
        <ul> 
            <div v-for="link in links" v-bind:key="link.name" v-bind:value="link.url">
                <ListItem :itemName="link.name" :url="link.url" />
            </div>
        </ul>
    </ul>
</div>
</template>

<script>
var ListItem = require('./components/ListItem.vue');

export default {
    name : 'LinkList',
    components : {
        'ListItem' : ListItem
    },
    props : ['links', 'head']
}
</script>

<style scoped>
h1 {
    color : var(--grey);
}
li {
    color : var(--grey);
}
</style>

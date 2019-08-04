<template>
    <h1> {{ Lab }} {{ Lab }} </h1>
</template>

<script>
const Overlay = () => import('./Overlay.vue');

export default {
    name : 'Dialog',
    mixins : [Overlay],    
    data : function () {
        return {
            Lab : "test"
        }
    }
}
</script>

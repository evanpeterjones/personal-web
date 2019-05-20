<template>
<footer><p>© {{ year }} <b>Design by Evan Jones</b></p></footer>
</template>

<script>
    export default {
        name : 'Footer',
        data : function () {
            return {
                year : (new Date()).getFullYear()
            }
        }
    }
</script>

<style scope='local'>
footer {
    
}
</style>

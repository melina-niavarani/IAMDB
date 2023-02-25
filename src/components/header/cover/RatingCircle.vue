<template>

    <circle-progress
        :percent="79" 
        show-percent="true"
        size="80"
        border-width="6"
        border-bg-width="6"
        class="color: white"
        fill-color='#CE1212'
        empty-color="#EEEBDD"
        linecap="thin" />

</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
    components: {
        CircleProgress
    },

}



</script>
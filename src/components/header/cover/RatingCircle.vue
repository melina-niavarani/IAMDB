<template>
    <div>
        <RadialProgress 
            startColor="#CE1212"
            stopColor="#CE1212"
            innerStrokeColor="#EEEBDD"
            strokeWidth="6"
            innerStrokeWidth="6"
            strokeLinecap="thin"
            :diameter="80"
            :completed-steps=" _movie.imDbRating "
            total-steps="10">
                {{ _movie.imDbRating }}  <!-- Your inner content here -->
        </RadialProgress>
    </div>
</template>

<script>
import RadialProgress from "vue3-radial-progress";

export default {
    components: {
        RadialProgress
    },
    props: [
        "_movie"
    ]
} 




</script>

<style>
.circle-font {
    font-size: 24px;
}
</style>
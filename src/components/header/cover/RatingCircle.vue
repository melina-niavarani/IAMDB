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
            :completed-steps="completedSteps"
            total-steps="10">
                {{ completedSteps  }}  <!-- Your inner content here -->
        </RadialProgress>
    </div>
</template>

<script>
import RadialProgress from "vue3-radial-progress";
import { ref } from "vue";

export default {
    components: {
        RadialProgress
    },
    setup(){
        const completedSteps = ref(8);
        return {
            completedSteps,
        }
    }
} 




</script>

<style>
.circle-font {
    font-size: 24px;
}
</style>
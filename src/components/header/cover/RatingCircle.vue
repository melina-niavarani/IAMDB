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
            :completed-steps=" movies.vote_average "
            total-steps="10">
                {{ movies.vote_average?.toFixed(1) }}  <!-- Your inner content here -->
        </RadialProgress>
    </div>
</template>

<script>
import RadialProgress from "vue3-radial-progress";

import { mapState} from "pinia";
import { useFetchData } from "@/stores/store.js"

export default {
    components: {
        RadialProgress
    },
    computed: {
        ...mapState(useFetchData, ['movies'])
    },
} 




</script>

<style>
.circle-font {
    font-size: 24px;
}
</style>
<template>
    <section class="hidden md:block mt-[-50px] min-w-fit">
        <img class="w-[276px] h-[415px] rounded-xl shadow-[0px_6px_12px_0px_#1B1717]" 
        :src="movies.image" alt="movie-cover">
        <div class="centering mt-6">
            <div class="mr-[18px]">
                <RatingCircle/>
            </div>
            <div>
                <span>{{ movies.imDbRatingVotes}}</span>
                <h5>ratings on IMDB</h5>
            </div>
        </div>
    </section>
</template>

<script>
import RatingCircle from "@/components/header/cover/RatingCircle.vue";

import { mapState} from "pinia";
import { useFetchData } from "@/stores/store.js"

export default {
    components: {
        RatingCircle
    },
    computed: {
        ...mapState(useFetchData, ['movies'])
    },
}
</script>



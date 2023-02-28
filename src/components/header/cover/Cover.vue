<template>
    <section class="hidden md:block mt-[-50px] min-w-fit">
        <img class="w-[276px] h-[415px] rounded-xl shadow-[0px_6px_12px_0px_#1B1717]" 
        :src="_movie.image" alt="movie-poster">
        <div class="flex items-center mt-6">
            <div class="mr-[18px]">
                <RatingCircle :_movie="_movie"/>
            </div>
            <div>
                <span>{{ _movie.imDbRatingVotes}}</span>
                <h5>ratings on IMDB</h5>
            </div>
        </div>
    </section>
</template>

<script>
import RatingCircle from "@/components/header/cover/RatingCircle.vue";

export default {
    components: {
        RatingCircle
    },
    props: [
        "_movie"
    ],
}
</script>



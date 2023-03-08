<template>
    <section >
        <carousel  :itemsToShow="3.95" :transition="10" :wrapAround="true" :autoplay="4000" >
            <slide v-for="likeThis in _movie.similars" :key="_movie.id" >
                <div class="mx-3">
                    <router-link :to="'/details/' + likeThis.id" class="hover:cursor-pointer ">
                        <div><img class="rounded-xl min-w-[230px] w-[342px] h-[342px] md:w-[409px] md:min-w-[276px] md:h-[409px] block" :src="likeThis.image" alt=""></div>
                        <div class="flex justify-between mt-[13px] md:mt-3">
                            <h5 class="text-sm font-bold md:text-lg">{{ likeThis.title }}</h5>
                            <div>
                                <span v-if="favoriteList.some(item => item === likeThis.id)" class="bg-red-heart inline-block bg-no-repeat w-4 h-4 mt-[3px] mx-1.5"></span>
                                <span class="bg-star inline-block bg-no-repeat w-4 h-4 mt-[3px] mx-1.5"></span>
                                <span class="text-sm opacity-40 md:text-md"> {{ likeThis.imDbRating }}</span>
                            </div>
                        </div>
                     </router-link>
                </div>
            </slide>
            ...
        </carousel>
      
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { mapState } from "pinia";
import { useStorageList } from "@/stores/store.js"

export default {
    components: {
        Carousel,
        Slide
    },
    props: [
        "_movie" ,
    ],
    computed: {
        ...mapState(useStorageList, ['favoriteList'] )
    }
}
</script>


<template>
    <section >
        <carousel  :itemsToShow="3.95" :transition="10" :wrapAround="true" :autoplay="3000" :breakpoints="breakpoints">
            <slide v-for="likeThis in similar" :key="similar.id" >
                <div>
                    <router-link :to="'/details/' + likeThis.id" class="hover:cursor-pointer ">
                        <div><img class="rounded-xl w-[230px] h-[342px] md:w-[276px] md:h-[409px] block" :src="imagesUrl + likeThis.poster_path" :alt="likeThis.title"></div>
                        <div class="flex justify-between mt-[13px] md:mt-3">
                            <h5 class="text-start text-sm font-bold w-[137px] whitespace-nowrap text-ellipsis overflow-hidden md:w-[170px] md:text-lg">{{ likeThis.title }}</h5>
                            <div class="centering">
                                <span v-if="favoriteList.some(item => item === likeThis.id)" class="bg-red-heart inline-block bg-no-repeat w-4 h-4 mt-[3px] mx-1.5"></span>
                                <span class="bg-star inline-block bg-no-repeat w-4 h-4 mt-[3px] mx-1.5"></span>
                                <span class="text-sm opacity-40 mt-[3px]  md:text-md"> {{ likeThis.vote_average }}</span>
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
import { useStorageList, useFetchData  } from "@/stores/store.js"


import 'vue3-carousel/dist/carousel.css'

export default {
    components: {
        Carousel,
        Slide
    },
    computed: {
        ...mapState(useStorageList, ['favoriteList'] ),
        ...mapState(useFetchData, ['similar'] ),
        ...mapState(useFetchData, ['imagesUrl'])
    },    
    data(){
        return{
            breakpoints: {
                360: {
                    itemsToShow: 1.5,
                    snapAlign: 'start',
                },
                500: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
            // 700px and up
                700: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                    // snapAlign: 'end',
                },
            // 700px and up
                770: {
                    itemsToShow: 4,
                    snapAlign: 'center',
                    // snapAlign: 'end',
                },
            // 1200 and up
                1400: {
                    itemsToShow: 5,
                     snapAlign: 'center-even',
                },
            // 1840 and up
                1840: {
                    itemsToShow: 6,
                     snapAlign: 'center-even',
                },
                2100: {
                    itemsToShow: 7,
                     snapAlign: 'center-even',
                },                
            },
        }
    },
}
</script>


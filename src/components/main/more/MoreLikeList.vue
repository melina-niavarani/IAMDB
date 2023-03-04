<template>
    <section duration="180s" delay="5s" 
    v-on:mouseover="paused=true">
        <ul class="flex flex-nowrap overflow-x-scroll gap-6" >
            <li v-for="likeThis in _movie.similars">
                <router-link :to="'/details/' + likeThis.id" class="hover:cursor-pointer">
                    <div><img class="rounded-xl min-w-[230px] w-[342px] h-[342px] md:w-[409px] md:min-w-[276px] md:h-[409px]" :src="likeThis.image" alt=""></div>
                    <div class="flex justify-between mt-[13px] md:mt-3">
                        <h5 class="text-sm font-bold md:text-lg">{{ likeThis.title }}</h5>
                        <div>
                            <span v-if="isFavourite" class="Favourite bg-red-heart"></span>
                            <span class="star bg-star"></span>
                            <span class="text-sm opacity-40 md:text-md"> {{ likeThis.imDbRating }}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import InfiniteSlideBar from 'vue3-infinite-slide-bar';

export default {
    components: {
        InfiniteSlideBar
    },
    data() {
        return {
            isFavourite: false
        }
    },
    props: [
        "_movie" ,
    ],
    computed: {
        
    }
}
</script>

<style scoped>
    .star,
    .Favourite {
        display: inline-block;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        margin-top: 3px;
        margin-inline: 6px;
    }
</style>
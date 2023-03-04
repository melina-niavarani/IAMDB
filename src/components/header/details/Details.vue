<template>
    <section >
        <h1 class="md:text-xl">{{_movie.title}}</h1>
        <p class=" text-sm mt-1.5 md:text-md">Directors:  {{_movie.directors}} </p>
        <div class="mt-5 flex content-center items-center space-x-3 md:text-md md:mt-6">
            <span>{{_movie.year}} </span>
            <span class="dot"></span>
            <span>{{_movie.ratings}}</span>
            <span class="dot"></span>
            <span>{{_movie.runtimeStr}}</span>
        </div>
        <div class="flex items-center mt-5 md:mt-6 space-x-[18px]">
            <button class="bg-accent-color hover:bg-accent-hover flex items-center text-sm py-3 pl-6 w-[177px] rounded-[100px] md:text-[21px] md:py-[18px] md:pl-8  md:w-[227px]">
                <a href="#" title="thrailer" target="_blank">Watch thrailer</a>
                <span  class="play ml-3"></span>
            </button>
            <span class="share bg-share hover:bg-white/10 hover:rounded-[100px] hover:cursor-pointer"></span>
            <span @click="addToFavourite"
            class="heart hover:bg-white/10  hover:rounded-[100px] hover:cursor-pointer"
            :class="[isFavourite? `bg-heart-filled`: `bg-heart` ]"></span>
        </div>
        <p class="mt-[39px] text-xs opacity-60 md:mt-10 md:text-sm">
            {{_movie.plot}}
        </p> 
        <div class="mt-[38px] md:mt-[42px]">
            <h2 class="md:text-[28px] md:leading-[50px]">Details</h2>
            <DetailsTable :_movie="_movie"/>
        </div>
    </section>
</template>

<script>
    import DetailsTable from "@/components/header/details/DetailsTable.vue";

    export default {
        data(){
            return {
                backgroundUrl: '',
                isFavourite: false,
            }
        },
        components: {
            DetailsTable,
        },
        props: [
            "_movie"
        ],
        methods: {
            addToFavourite(){
                this.isFavourite = !this.isFavourite
                if ( this.isFavourite ) {
                    this._movie.title === true
                }
            }
        }
    }
</script>

<style>
    .dot {
        background-image: url(@/assets/images/circle.svg);
        background-repeat: no-repeat;
        width: 6px;
        height: 6px;
    }
    .play,
    .share,
    .heart
    {
        background-repeat: no-repeat;
        background-size: contain;
    }
    .play {
        background-image: url(@/assets/images/play.svg); 
        width: 18px;
        height: 18px;
        padding: 12px;
    }
    .share {
        width: 44px;
        height: 44px;
        padding: 5px;
        margin-inline: 18px;
    }
    .heart {
        width: 44px;
        height: 44px;
        padding: 5px;
        margin-inline: 18px;
    }

    @media (min-width: 550px) {
        .play {
            width: 20px;
            height: 20px;
        }
        .share,
        .heart,
        .heartLiked {
            width: 61px;
            height: 61px;
        }
    }
</style>
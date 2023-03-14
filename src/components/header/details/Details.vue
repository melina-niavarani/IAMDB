<template>
    <section class="w-[330px] sm:w-[410px] md:w-[504px]">
        <div v-if="trailerRun" class="pop-up-img">
            <div class="relative" >
                <iframe class="w-screen h-screen ml-[14%]"
                :src="'https://www.imdb.com/video/imdb/vi929409305/imdb/embed'"/>
                <span  @click="trailerRun = !trailerRun" class="close"></span>
            </div>
        </div>
        <h1 class="md:text-xl">{{movies.title}}</h1>
        <p class=" text-sm mt-1.5 md:text-md">Directors:  {{movies.directors}} </p>
        <div class="mt-5 centering space-x-3 md:text-md md:mt-6">
            <span>{{movies.year}} </span>
            <span class="dot"></span>
            <span>{{movies.ratings}}</span>
            <span class="dot"></span>
            <span>{{movies.runtimeStr}}</span>
        </div>
        <div class="centering mt-5 md:mt-6 space-x-[18px]">
            <button @click="trailerRun = !trailerRun ,watchThrailer()"  class="bg-accent-color hover:bg-accent-hover flex items-center text-sm py-3 pl-6 w-[177px] rounded-[100px] md:text-[21px] md:py-[18px] md:pl-8  md:w-[227px]">
                <span>Watch thrailer</span>
                <span class="play ml-3"></span>
            </button>
            <button @click=" this.share = !this.share" 
            class="share bg-share hover:bg-white/10 hover:rounded-[100px]">
                <shareList v-if="share"/>
            </button>
            <button @click="this.isFavorite = !this.isFavorite ,addTofavorite(movies.id)"
            class="heart hover:bg-white/10  hover:rounded-[100px] "
            :class="[isFavorite? `bg-heart-filled`: `bg-heart` ]"></button>
        </div>
        <p class="mt-[39px] text-xs opacity-60 md:mt-10 md:text-sm">
            {{movies.plot}}
        </p> 
        <div class="mt-[38px] md:mt-[42px]">
            <h2 class="md:text-[28px] md:leading-[50px]">Details</h2>
            <DetailsTable/>
        </div>
    </section>
</template>

<script>
    import DetailsTable from "@/components/header/details/DetailsTable.vue";
    import shareList from "@/components/header/details/Share.vue"
    
    import { mapStores, mapActions, mapState} from "pinia";
    import { useStorageList, useFetchData } from "@/stores/store.js"

    export default {
        data(){
            return {
                isFavorite: false,
                trailerRun: false,
                share: false,
            }
        },
        components: {
            DetailsTable,
            shareList
        },
        computed: {
            ...mapStores(useStorageList),
            ...mapState(useFetchData, ['movieTrailer']),
            ...mapState(useFetchData, ['movies'])
        },
        methods: {
            ...mapActions(useStorageList, ['addTofavorite']),
            ...mapActions(useFetchData, ['watchThrailer']),
            // ...mapActions(useFetchData, ['getInfo']),
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
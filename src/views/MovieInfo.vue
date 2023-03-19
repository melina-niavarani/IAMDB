<template >
    <div class="cover"
         :style="{ backgroundImage: `linear-gradient(rgba(27, 23, 23, 0) 58.33%,
                                    rgba(27, 23, 23, 0.8) 71.23%,
                                    #1B1717 100%),
                                    url(${ poster })` }">
        <!-- Movie Details -->
        <header class="px-[15px] md:px-[132px] pt-[164px] md:flex md:pr-[143px] md:pt-[521px] md:space-x-[60px]">
                <Cover/>
                <Details/>
                <CastAndCrew/>
        </header>
        <main>
            <!-- Photos -->
            <Photos class="px-[15px] md:px-[132px]"/>
            <!-- More Like This -->
            <MoreLikeThis/>
            <!-- FAQs -->
            <Quastions class="px-[15px] md:px-[132px]"/>
        </main>
    </div>
</template>

<script>
    import Cover from "@/components/header/cover/Cover.vue";
    import CastAndCrew from "@/components/header/casts/CastAndCrew.vue";
    import Details from "@/components/header/details/Details.vue";
    import Photos from "@/components/main/photos/Photos.vue";
    import MoreLikeThis from "@/components/main/more/MoreLikeThis.vue";
    import Quastions from "@/components/main/questions/Questions.vue";

    import { mapState} from "pinia";
    import { useFetchData } from "@/stores/store.js"
   

    export default {
        components: {
            Cover,
            CastAndCrew,
            Details,
            Photos,
            MoreLikeThis,
            Quastions
        },
        computed: {
            ...mapState(useFetchData, ['poster']),
            ...mapState(useFetchData, ['movies'])
        },
        watch: {
            $route: {
                immediate: true,
                handler(to, from) {
                    document.title = this.movies.title || 'IAMDB';
                }
            },
        },
    }
        
</script>

<style scoped>
    .cover {
        height: 264px;
        min-width: w-screen;
        background-position: top center;
        background-size: fill;
        background-repeat: no-repeat;
    }
    @media (min-width: 550px) {
        .cover {
            background-size: cover;
        }
    }
    @media (min-width: 770px) {
        .cover {
            height: 100vh;
            min-width: 1200px;
            background-size: cover;
        }
    }

</style>

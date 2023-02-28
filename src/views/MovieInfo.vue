<template >
    <div class="cover"
         :style="{ backgroundImage: `linear-gradient(rgba(27, 23, 23, 0) 58.33%,
                                    rgba(27, 23, 23, 0.8) 71.23%,
                                    #1B1717 100%),
                                    url(${ movies.image})` }">
        <!-- Movie Details -->
        <header class="px-[15px] md:px-[132px] pt-[164px] md:flex md:pr-[143px] md:pt-[521px] md:space-x-[60px]">
                <Cover :_movie="movies"/>
                <Details :_movie="movies"/>
                <CastAndCrew :_movie="movies"/>
        </header>
        <main>
            <!-- Photos -->
            <div class="px-[15px] md:px-[132px]"><Photos :_images="images"/></div>
            <!-- More Like This -->
            <MoreLikeThis :_movie="movies"/>
            <!-- FAQs -->
            <div class="px-[15px] md:px-[132px]"><Quastions :_movie="movies"/></div>
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

    import { useRoute } from "vue-router";

    export default {
        components: {
            Cover,
            CastAndCrew,
            Details,
            Photos,
            MoreLikeThis,
            Quastions
        },
        data(){
            return {
                movies: '',
                images: '',
                route : useRoute()
            }
        },
        methods: { 
            getInfo(){
                if ( this.searchContent != ''){
                    // fetch(`http://www.omdbapi.com/?apikey=29f7e005&i=${this.route.params.id}`)
                    fetch(`https://imdb-api.com/en/API/Title/k_61gu5fbz/${this.route.params.id}`, this.requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        console.log(result)
                        this.movies = result
                        // this.movies = result.results;
                    })
                    .catch(error => console.log('error', error));
                }
            },
            getPosters(){
                fetch(`https://imdb-api.com/API/Images/k_61gu5fbz/${this.route.params.id}`, this.requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        console.log(result)
                        this.images = result
                        // this.movies = result.results;
                    })
                    .catch(error => console.log('error', error));
            }
        },
        created() {
            this.getInfo()
            this.getPosters()
        }
    }
</script>

<style scoped>
    .cover {
        /* background-image: linear-gradient(rgba(27, 23, 23, 0) 58.33%,
                rgba(27, 23, 23, 0.8) 71.23%,
                #1B1717 100%),
                url(@/assets/images/poster.jpeg); */
        height: 264px;
        background-position: top center;
        background-size: fill;
        background-repeat: no-repeat;
    }

    @media (min-width: 550px) {
    .cover {
        height: 100vh;
        background-size: cover;
    }
    }
</style>

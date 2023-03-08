<template >
    <div class="cover"
         :style="{ backgroundImage: `linear-gradient(rgba(27, 23, 23, 0) 58.33%,
                                    rgba(27, 23, 23, 0.8) 71.23%,
                                    #1B1717 100%),
                                    url(${ poster })` }">
        <!-- Movie Details -->
        <header class="px-[15px] md:px-[132px] pt-[164px] md:flex md:pr-[143px] md:pt-[521px] md:space-x-[60px]">
                <Cover :_movie="movies"/>
                <Details :_movie="movies"/>
                <CastAndCrew :_movie="movies"/>
        </header>
        <main>
            <!-- Photos -->
            <Photos class="px-[15px] md:px-[132px]" :_images="images"/>
            <!-- More Like This -->
            <MoreLikeThis :_movie="movies"/>
            <!-- FAQs -->
            <Quastions class="px-[15px] md:px-[132px]" :_faq="faq"/>
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
                apiKey1: 'k_61gu5fbz',
                apiKey2: 'k_crzfp1ws',
                apiKey3: 'k_f2h9lgy2',
                movies: '',
                images: '',
                poster: '',
                faq: '',
                route : useRoute()
            }
        },
        methods: { 
            getRandom(min, max){
                return Math.floor(Math.random() * (max - min) + min)
            },
            async getInfo(){
                await fetch(`https://imdb-api.com/en/API/Title/${this.apiKey1}/${this.route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.movies = result
                })
                .catch(error => console.log('error', error));
            },
            async getImages(){
                await fetch(`https://imdb-api.com/API/Images/${this.apiKey1}/${this.route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.images = result
                })
                .catch(error => console.log('error', error));
            },
            async getPoster(){
                await fetch(`https://imdb-api.com/en/API/Posters/${this.apiKey1}/${this.route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.poster = result.posters[this.getRandom(0, result.posters.length)].link
                })
                .catch(error => console.log('error', error));
            },
            getFaq() {
                fetch(`https://imdb-api.com/API/FAQ/${this.apiKey1}/${this.route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.faq = result
                    console.log(this.faq)
                })

            }

        },
        created() {
            this.getRandom()
            this.getInfo()
            this.getImages()
            this.getPoster()
            this.getFaq() 
        }
    }
</script>

<style scoped>
    .cover {
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

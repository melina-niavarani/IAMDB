<template>
    <div>
        <section class="mb-2 md:flex md:justify-center md:items-center md:space-x-3 ">
            <input v-on:keyup.enter="GoToInfo"
                v-on:input="getMoviesInfo"
                v-model="searchContent"  
                class="border-[1px] border-white rounded-[100px] grow w-full bg-transparent pl-8 py-3 mt-[152px] outline-none placeholder:text-sm md:mt-0 md:text-lg md:placeholder:text-lg md:py-[18px] md:w-[162px]" 
                type="text" 
                placeholder="Your favorite movie ...">
            <div class="bg-accent-color py-3 mt-3 mb-[199px] w-full flex justify-center items-center rounded-[100px] hover:bg-accent-hover hover:cursor-pointer outline-none md:mb-0 md:mt-0 md:py-[18px] md:w-[162px]">
                <p class="text-sm md:text-lg">Search </p>
                <span class="search-icon p-3 h-[18px] w-[18px] ml-3 md:h-[21px] md:w-[21px]"></span>
            </div>
        </section>
        <SearchResult v-if="movieFound" : ="movies"/>
        <div v-for="movie in movies" :key="movie.id">
            <router-link :to="'/details' + movie.id">
                <div class="flex mb-2 hover:text-accent-color hover:cursor-pointer">
                    <img class="w-[90px] h-[110px]" :src="movie.image" >
                    <div class="pl-4 inline-block ">
                        <h3 class="mt-4 text-sm overflow-y-scroll mb-4 md:text-md md:w-[162px] ">{{ movie.title  }}</h3>
                        <p class="opacity-50 text-xs md:text-sm"> {{ movie.description }} </p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<style>
 .search-icon {
    background-image: url(@/assets/images/search.svg);
    background-size: contain;
    background-repeat: no-repeat;
 }
</style>

<script>
import SearchResult from '@/components/home/SearchResult.vue'

export default {
    components: {
        SearchResult,
    },
    data() {
        return {
            movieFound: false,
            searchContent: '',
            movies: ''
        };
    },
    methods: {
        GoToInfo(){
            // this.$router.push('/details')
            console.log(this.searchContent)
        },
        getRandomInt(min,max){
            return Math.floor(Math.random() * (max-min) + min )
        },
        getMoviesInfo(){
            if ( this.searchContent != ''){
                fetch(`https://imdb-api.com/API/AdvancedSearch/k_61gu5fbz/?title=${this.searchContent}`, this.requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.movieFound = true;
                    this.movies = result.results;
                    // this.movies.map((item) => {
                    //     this.movieId = this.movies.id
                    // }) 
                })
                .catch(error => console.log('error', error));
            }

        }

    }
}
</script>
<template>
    <div>
        <section class="mb-2 md:flex md:justify-center md:items-center md:space-x-3 ">
            <input v-on:keyup.enter="GoToInfo"
                v-on:input="getMoviesInfo"
                v-model="searchContent"  
                class="border-[1px] border-white rounded-[100px] grow w-full bg-transparent pl-8 py-3 mt-[152px] outline-none placeholder:text-sm md:mt-0 md:text-lg md:placeholder:text-lg md:py-[18px] md:w-[162px]" 
                type="text" 
                placeholder="Your favorite movie ...">
            <router-link to="/details" class="bg-accent-color py-3 mt-3 mb-[199px] w-full flex justify-center items-center rounded-[100px] hover:bg-accent-hover outline-none md:mb-0 md:mt-0 md:py-[18px] md:w-[162px]">
                <p class="text-sm md:text-lg">Search </p>
                <span class="search-icon p-3 h-[18px] w-[18px] ml-3 md:h-[21px] md:w-[21px]"></span>
            </router-link>
        </section>
        <SearchResult v-if="movieFound" :_movieTitle="movieTitle" :_moviePoster="moviePoster" :_moviedescription="moviedescription"/>
        <div v-for="movie in movies" :key="movie.id">
            {{ movie.title }}
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
            movies: '',
            movieTitle: '',
            moviePoster: '',
            moviedescription: ''
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
            fetch(`https://imdb-api.com/en/API/Search/k_61gu5fbz/${this.searchContent}`, this.requestOptions)
            .then(response => response.json())
            .then(result => {
                this.movieFound = true;
                this.movies = result.results;
                // this.movies.map((item) => {
                //     this.movieTitle = this.movies.title
                //     this.moviePoster = this.movies[0].image
                //     this.moviedescription = this.movies[0].description
                // }) 
            })
            .catch(error => console.log('error', error));

        }

    }
}
</script>
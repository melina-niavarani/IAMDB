<template>
    <div>
        <section class="mb-2 md:centering md:space-x-3 ">
            <input v-on:keyup.enter="GoToInfo"
                v-on:input="getMoviesInfo"
                v-model="searchContent"  
                class="border-[1px] border-white rounded-[100px] grow w-full bg-transparent pl-8 py-3 mt-[152px] outline-none placeholder:text-sm md:mt-0 md:text-lg md:placeholder:text-lg md:py-[18px] md:w-[162px]" 
                type="text" 
                placeholder="Your favorite movie ...">
            <div @click="getMoviesInfo" class="bg-accent-color py-3 mt-3  w-full flex justify-center items-center rounded-[100px] hover:bg-accent-hover hover:cursor-pointer outline-none md:mb-0 md:mt-0 md:py-[18px] md:w-[162px]">
                <p class="text-sm md:text-lg">Search </p>
                <span class="bg-contain bg-no-repeat bg-search-icon p-3 h-[18px] w-[18px] ml-3 md:h-[21px] md:w-[21px]"></span>
            </div>
        </section>
        <MatchItemsList :_movie="movies"/>
    </div>
</template>


<script>
import MatchItemsList from "@/components/home/MatchItems.vue";

export default {
    components: {
        MatchItemsList
    },
    data() {
        return {
            base_url: 'https://api.themoviedb.org/3',
            // base_url: 'https://imdb-api.com/API',
            // apiKey: 'k_61gu5fbz',
            // apiKey: 'k_crzfp1ws',
            // apiKey: 'k_f2h9lgy2',
            searchContent: '',
            movies: '',
            options : {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTEzYzYwYTY4Y2FhMzRjYmRhZGM2NzI4MzVlMWJkZCIsInN1YiI6IjY1NzcwZGY5YmJlMWRkMDExYjkwNTFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZaedGQGVuBuIlfquQrYwRAWvvLS12jv8eohZjfxhlQ'
                }
            }
        };
    },
    methods: {
        GoToInfo(){
            // if (this.movies[0].title.toUpperCase().indexOf(this.searchContent.toUpperCase()) > -1 ) {  
            //   this.$router.push(`/details/${this.movies[0].id}`)
            // } else  {
            //     this.$router.push(`/:pathMatch(.*)*`)
            // }
            if (this.movies[0].title.toUpperCase().indexOf(this.searchContent.toUpperCase()) > -1 ) {  
              this.$router.push(`/details/${this.movies[0].id}`)
            } else  {
                this.$router.push(`/:pathMatch(.*)*`)
            }
        },
        getMoviesInfo(){ 
            if ( this.searchContent != ""){
                // fetch(`${this.base_url}/Search/${this.apiKey}/${this.searchContent}`)
                // .then(response => response.json())
                // .then(result => {
                //     this.movies = result.results.slice(0, 4)
                //     this.movies = result
                //     console.log(this.movies.Title)
                //     if (!result.ok) {
                //         const error = data?.error?.details?.title || response.statusText;
                //         return Promise.reject(error);
                //     }
                // })
                // .catch(error => console.log('error', error));

                fetch(`${this.base_url}/search/movie?query=${this.searchContent}&page=1`, this.options)
                    .then(response => response.json())
                    .then(response => {
                        this.movies = response.results.slice(0, 4)
                        console.log(response)
                    })
                    .catch(err => console.error('error', err));

                }
            }
        },

}
</script>
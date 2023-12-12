import { defineStore, acceptHMRUpdate } from "pinia";
import { useRoute } from "vue-router";

export const useStorageList = defineStore('storeFavoriteMovies', {
    state: () => {
        return {
            favoriteList: []
        }
    },
    actions: {
        addTofavorite(id) {
            if (!this.favoriteList.some(item => item === id)){
                this.favoriteList.push(id)
            }else {
                this.favoriteList = this.favoriteList.filter( item => item !== id )
            }
            console.log(this.favoriteList)
        },
    },
});


export const useFetchData = defineStore('fetchMovieData', {
    state: () => {
        return {
            base_url: 'https://api.themoviedb.org/3',
            // base_url: 'https://imdb-api.com/API',
            // apiKey: 'k_5y2377sf',
            // apiKey: 'k_crzfp1ws',
            // apiKey: 'k_f2h9lgy2',
            route : useRoute(),
            movies: '',
            // imagesUrl: 'https://image.tmdb.org/t/p/w500/',
            imagesUrl: 'https://image.tmdb.org/t/p/original/',
            images: '',
            // poster: '',
            faq: '',
            trailerUrl: 'https://www.youtube.com/watch?v=',
            movieTrailer : '',
            casts: '',
            // directors: '',
            similar: '',
            options : {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTEzYzYwYTY4Y2FhMzRjYmRhZGM2NzI4MzVlMWJkZCIsInN1YiI6IjY1NzcwZGY5YmJlMWRkMDExYjkwNTFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZaedGQGVuBuIlfquQrYwRAWvvLS12jv8eohZjfxhlQ'
                }
            }
        }
    },
    actions: {
        getRandom(min, max){
            return Math.floor(Math.random() * (max - min) + min)
        },
        // async getInfo(){
        //     await fetch(`${this.base_url}/Title/${this.apiKey}/${this.route.params.id}`)
        //     .then(response => response.json())
        //     .then(result => {
        //         this.movies = result.results
        //     })
        //     .catch(error => 
        //         this.route.replace('/:pathMatch(.*)*'),
        //         console.log('error', error))
        //     setTimeout(() => {
        //         // for Trailers //
        //         fetch(`${this.base_url}/Trailer/${this.apiKey}/${this.route.params.id}`)
        //         .then(response => response.json())
        //         .then(result => {
        //             this.movieTrailer = result.linkEmbed
        //         })
        //         .catch(error => console.log('error', error));
        //         // for FAQ //
        //         fetch(`${this.base_url}/FAQ/${this.apiKey}/${this.route.params.id}`)
        //         .then(response => response.json())
        //         .then(result => {
        //             this.faq = result
        //         })
        //         .catch(error => console.log('error', error));
        //         // for Images //
        //         fetch(`${this.base_url}/Images/${this.apiKey}/${this.route.params.id}`)
        //         .then(response => response.json())
        //         .then(result => {
        //             this.images = result.items.slice(0, 10)
        //         })
        //         .catch(error => console.log('error', error));
        //         // for Posters //
        //         fetch(`${this.base_url}/Posters/${this.apiKey}/${this.route.params.id}`)
        //         .then(response => response.json())
        //         .then(result => {
        //             this.poster = result.posters[this.getRandom(0, result.posters.length)].link
        //         })
        //         .catch(error => console.log('error', error));
        //     }, "5000")
        // },
        async getInfo(){
            await fetch(`${this.base_url}/movie/${this.route.params.id}?`, this.options)
                    .then(response => response.json())
                    .then(response => {
                        this.movies = response
                        // console.log(response)
                    })
                    .catch(err => console.error(err));
                setTimeout(() => {
                // for casts and directors//
                    fetch(`${this.base_url}/movie/${this.route.params.id}/credits`, this.options)
                        .then(response => response.json())
                        .then(response => {
                            this.casts = response.cast
                        })
                        .catch(err => console.error(err));
                // for similar //
                fetch(`${this.base_url}/movie/${this.route.params.id}/similar`, this.options)
                    .then(response => response.json())
                    .then(response => {
                        this.similar = response.results.slice(0, 7)
                    })
                    .catch(err => console.error(err));
                // for Images //
                fetch(`${this.base_url}/movie/${this.route.params.id}/images`, this.options)
                    .then(response => response.json())
                    .then(result => {
                        this.images = result.backdrops.slice(0, 10)
                    })
                    .catch(error => console.log('error', error));
                // for Trailers //
                    fetch(`${this.base_url}/movie/${this.route.params.id}/videos` , this.options)
                    .then(response => response.json())
                    .then(result => {
                        // console.log('trailers', result.results.slice(0, 1))
                        this.movieTrailer = result.results.slice(0, 1)
                    })
                    .catch(error => console.log('error', error));
                    // for FAQ //
                    // fetch(`${this.base_url}/FAQ/${this.apiKey}/${this.route.params.id}`)
                    // .then(response => response.json())
                    // .then(result => {
                    //     this.faq = result
                    // })
                    // .catch(error => console.log('error', error));

            }, "5000")
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFetchData, import.meta.hot))
}
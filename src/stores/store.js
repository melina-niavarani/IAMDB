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
            base_url: 'https://imdb-api.com/API',
            // apiKey: 'k_5y2377sf',
            // apiKey: 'k_crzfp1ws',
            apiKey: 'k_f2h9lgy2',
            route : useRoute(),
            movies: '',
            images: '',
            poster: '',
            faq: '',
            movieTrailer : '',
        }
    },
    actions: {
        getRandom(min, max){
            return Math.floor(Math.random() * (max - min) + min)
        },
        async getInfo(){
            await fetch(`${this.base_url}/Title/${this.apiKey}/${this.route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.movies = result
            })
            .catch(error => 
                // this.route.replace('/:pathMatch(.*)*'),
                console.log('error', error))
            setTimeout(() => {
                fetch(`${this.base_url}/Trailer/${this.apiKey}/${this.route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.movieTrailer = result.linkEmbed
                })
                .catch(error => console.log('error', error));

                fetch(`${this.base_url}/FAQ/${this.apiKey}/${this.route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.faq = result
                })
                .catch(error => console.log('error', error));

                fetch(`${this.base_url}/Images/${this.apiKey}/${this.route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.images = result.items.slice(0, 10)
                })
                .catch(error => console.log('error', error));
                
                fetch(`${this.base_url}/Posters/${this.apiKey}/${this.route.params.id}`)
                .then(response => response.json())
                .then(result => {
                    this.poster = result.posters[this.getRandom(0, result.posters.length)].link
                })
                .catch(error => console.log('error', error));
            }, "5000")
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFetchData, import.meta.hot))
}
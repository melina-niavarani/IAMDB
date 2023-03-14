import { defineStore } from "pinia";
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
            // base_url: 'https://imdb-api.com/en/API',
            // title_url: base_url + '/Title',
            // images_url: base_url + '/Images',
            // posters_url: base_url + '/Posters',
            // faqs_url: base_url + '/FAQ',
            // trailers_url: base_url + '/Trailer',
            apiKey1: 'k_61gu5fbz',
            apiKey2: 'k_crzfp1ws',
            apiKey3: 'k_f2h9lgy2',
            apiKey4: 'k_35gf5vid',
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
            await fetch(`https://imdb-api.com/API/Title/${this.apiKey4}/${this.route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.movies = result
            })
            .catch(error => console.log('error', error));
            await fetch(`https://imdb-api.com/API/Trailer/${this.apiKey4}/${this.route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.movieTrailer = result.linkEmbed
            })
            .catch(error => console.log('error', error));
            await fetch(`https://imdb-api.com/API/FAQ/${this.apiKey4}/${this.route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.faq = result
            })
            .catch(error => console.log('error', error));
            await fetch(`https://imdb-api.com/API/Images/${this.apiKey4}/${this.route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.images = result.items.slice(0, 10)
            })
            .catch(error => console.log('error', error));
            await fetch(`https://imdb-api.com/en/API/Posters/${this.apiKey4}/${this.route.params.id}`)
            .then(response => response.json())
            .then(result => {
                this.poster = result.posters[this.getRandom(0, result.posters.length)].link
            })
            .catch(error => console.log('error', error));
        },
    },
}) 
import { defineStore } from "pinia";


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
    
})

export const fetchData = defineStore ('fetchMoviesData', {
    
})
   

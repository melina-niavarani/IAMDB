<template>
    <div class="bg-background-color text-light-gray cover "> 
        <section class="px-[15px] md:px-[120px]">
            <h1 @click="getMoviesInfo" class="pt-[220px] text-xl font-bold text-center md:pt-[250px] md:text-end md:text-xxl md:mb-[120px]">IAMDB</h1>
            <!-- search area -->
            <SearchBar/>
            <!-- <button @click="getMoviesInfo">find movie</button> -->
        </section>
    </div>
</template>

<script>
    import SearchBar from '@/components/home/SearchComponent.vue'

    export default {
        components: {
            SearchBar,
        },
        data(){
            return{
                requestOptions : {
                    method: 'GET',
                    redirect: 'follow'
                }
             }
        },
        // methods: {
        //     getMoviesInfo(){
        //         fetch('https://imdb-api.com/en/API/Search/k_61gu5fbz/inception 2010', this.requestOptions)
        //         .then(response => response.json())
        //         .then(result => {
        //             const list = result.results;
        //             // console.log(list)
        //             list.map((item) => {
        //                 const name = list.title;
        //                 console.log(name)
        //                 // const movie =  `<li><img src="${poster}"><h2>"${name}"</h2></li>`
        //             }) 
        //         })
        //         .catch(error => console.log('error', error));

        //     }
        // }
        
    }

</script>

<style scoped>
 .cover {
    background-image: url(../assets/images/home-bg1.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    height: 100vh;
 }

 @media (min-width: 480px) {
    .cover {
        background-image: url(../assets/images/home-bg.svg);
        background-size: cover;
        background-position: 30% 10% ;
    }
 }
 
</style>



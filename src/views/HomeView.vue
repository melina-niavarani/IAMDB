<template>
    <div class="bg-background-color text-light-gray cover "> 
        <section class="px-[15px] md:px-[120px]">
            <h1 class="pt-[220px] text-xl font-bold text-center md:pt-[250px] md:text-end md:text-xxl md:mb-[120px]">IAMDB</h1>
            <!-- search area -->
            <SearchBar/>
        </section>
    </div>
</template>

<script>
    import SearchBar from '@/components/Home/SearchComponent.vue'

    export default {
        components: {
            SearchBar,
        }
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



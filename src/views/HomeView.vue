<template>
    <div class="bg-background-color text-light-gray cover "> 
        <section class="px-[15px] md:px-[120px]">
            <h1 class="pt-[220px] text-xl font-bold text-center md:pt-[250px] md:text-end md:text-xxl md:mb-[120px]">IAMDB</h1>
            <!-- search area -->
            <section class="md:flex md:justify-center md:items-center md:space-x-3 ">
                <input class="border-[1px] border-white rounded-[100px] grow w-full bg-transparent pl-8 py-3 mt-[152px] outline-none placeholder:text-sm md:mt-0 md:text-lg md:placeholder:text-lg md:py-[18px] md:w-[162px]" type="text" placeholder="Your favorite movie ...">
                <button class="bg-accent-color py-3 mt-3 mb-[199px] w-full flex justify-center items-center rounded-[100px] hover:bg-accent-hover outline-none md:mb-0 md:mt-0 md:py-[18px] md:w-[162px]">
                    <p class="text-sm md:text-lg">Search </p>
                    <span class="search-icon p-3 h-[18px] w-[18px] ml-3 md:h-[21px] md:w-[21px]"></span>
                </button>
            </section>
        </section>
    </div>
</template>

<style scoped>
 .cover {
    background-image: url(../assets/images/home-bg1.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top;
    height: 100vh;
 }
 .search-icon {
    background-image: url(../assets/images/search.svg);
    background-size: contain;
    background-repeat: no-repeat;
 }
 @media (min-width: 480px) {
    .cover {
        background-image: url(../assets/images/home-bg.svg);
        background-size: cover;
        background-position: 30% 10% ;
    }
 }

 
</style>



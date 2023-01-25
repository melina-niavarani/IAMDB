<template >
    <div>
        <!-- Movie Details -->
        <header class="cover px-[15px] pt-[164px] md:flex md:pl-[132px] md:pr-[143px] md:pt-[521px] md:space-x-[60px]">
            <Cover/>
            <Details/>
            <CastAndCrew/>
        </header>
    </div>
</template>

<script>
    import Cover from "@/components/header/Cover.vue";
    import CastAndCrew from "@/components/header/casts/CastAndCrew.vue";
    import Details from "@/components/header/details/Details.vue";

    export default {
        components: {
            Cover,
            CastAndCrew,
            Details,
        },
    }
</script>

<style scoped>

.cover {
        background-image: linear-gradient(rgba(27, 23, 23, 0) 58.33%,
                rgba(27, 23, 23, 0.8) 71.23%,
                #1B1717 100%),
                url(@/assets/images/poster.jpeg);
        height: 264px;
        width: 100vw;
        background-position: top center;
        background-size: fill;
        background-repeat: no-repeat;
    }
  
@media (min-width: 550px) {
    .cover {
        height: 671px;
        background-size: cover;
        height: 100vh;
    }
}
</style>

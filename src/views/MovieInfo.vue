<template >
    <div class="cover">
        <!-- Movie Details -->
        <header class="px-[15px] md:px-[132px] pt-[164px] md:flex md:pr-[143px] md:pt-[521px] md:space-x-[60px]">
                <Cover/>
                <Details/>
                <CastAndCrew/>
        </header>
        <main>
            <!-- Photos -->
            <div class="px-[15px] md:px-[132px]"><Photos/></div>
            <!-- More Like This -->
            <MoreLikeThis/>
            <!-- FAQs -->
            <div class="px-[15px] md:px-[132px]"><Quastions/></div>
        </main>
    </div>
</template>

<script>
    import Cover from "@/components/header/cover/Cover.vue";
    import CastAndCrew from "@/components/header/casts/CastAndCrew.vue";
    import Details from "@/components/header/details/Details.vue";
    import Photos from "@/components/main/photos/Photos.vue";
    import MoreLikeThis from "@/components/main/more/MoreLikeThis.vue";
    import Quastions from "@/components/main/questions/Questions.vue";

    export default {
        components: {
            Cover,
            CastAndCrew,
            Details,
            Photos,
            MoreLikeThis,
            Quastions
        },
        data(){
            return {
                photos: ['img1', 'img2']
            }
        }
    }
</script>

<style scoped>

.cover {
        background-image: linear-gradient(rgba(27, 23, 23, 0) 58.33%,
                rgba(27, 23, 23, 0.8) 71.23%,
                #1B1717 100%),
                url(@/assets/images/poster.jpeg);
        height: 264px;
        background-position: top center;
        background-size: fill;
        background-repeat: no-repeat;
    }
  
@media (min-width: 550px) {
    .cover {
        height: 100vh;
        background-size: cover;
    }
}
</style>

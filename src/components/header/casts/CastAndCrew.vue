<template>
    <section class="min-w-fit w-[265px] overflow-scroll max-h-[630px]">
        <h2 class="md:text-h2">Cast & Crew</h2> 
        <CastList :actorsLoaded="actorsLoaded"/>
        <div 
            v-if="show"  
            @click="showAll" 
            class="centering mt-[39px]  hover:cursor-pointer md:justify-start"
        >
            <span class="text-accent-color text-md ">Show all</span>
            <span class="w-[21px] h-[21px] bg-no-repeat bg-flash-icon bg-contain mx-3"></span>
        </div>
        <div v-if="!show"  @click="showLess" class="centering mt-[39px] hover:cursor-pointer md:justify-start">
            <span class="text-accent-color text-md ">Show less</span>
            <span class="w-[21px] h-[21px] bg-no-repeat bg-flash-icon bg-contain mx-3"></span>
        </div>
    </section>
</template>

<script>
    import CastList from "@/components/header/casts/CastList.vue";
    import { mapState } from "pinia";
    import { useFetchData } from "@/stores/store.js"

    export default {
        components: {
            CastList
        },
        computed: {
            ...mapState(useFetchData, ['casts']),
            actorsLoaded() {
                let actors = this.casts;
                return actors.slice(0, this.length);
            },
        },
        data() {
            return {
                length: 5 ,
                // actors: this.casts,
                show : true
            }
        },
        methods: {
            showAll() {
                let  actors = this.casts ;
                this.show = !this.show
                if (this.length >= actors.length) return;
                this.length = actors.length;
            },
            showLess() {
                this.show = !this.show
                this.length = 5
            },
            
        }
    }
</script>

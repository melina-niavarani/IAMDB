<template>
    <section class="min-w-fit w-[265px] ">
        <h2 class="md:text-h2">Cast & Crew</h2> 
        <CastList :_movie="_movie"  :actorsLoaded="actorsLoaded"/>
        <div v-if="show"  @click="showAll" class="flex mt-[39px] justify-center items-center hover:cursor-pointer md:justify-start">
            <span class="text-accent-color text-md ">Show all</span>
            <span class="w-[21px] h-[21px] bg-no-repeat bg-flash-icon bg-contain mx-3"></span>
        </div>
        <div v-if="!show"  @click="showLess" class="flex mt-[39px] justify-center items-center hover:cursor-pointer md:justify-start">
            <span class="text-accent-color text-md ">Show less</span>
        </div>
    </section>
</template>

<script>
    import CastList from "@/components/header/casts/CastList.vue";

    export default {
        components: {
            CastList
        },
        props: [
            "_movie" ,
        ],
        data() {
            return {
                length: 5 ,
                actors: this._movie.actorList,
                show : true
            }
        },
        methods: {
            showAll() {
                this.show = !this.show
                if (this.length >= this.actors.length) return;
                this.length = this.actors.length;
            },
            showLess() {
                this.show = !this.show
                this.length = 5
            }
        }, 
        computed: {
            actorsLoaded() {
                return this.actors.slice(0, this.length);
            },
        },
    }
</script>

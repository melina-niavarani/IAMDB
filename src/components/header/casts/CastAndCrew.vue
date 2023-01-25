<template>
    <section >
        <h2 class="text-[24px] leading-[50px] font-bold md:text-[28px]">Cast & Crew</h2>
        <CastList/>
        <div class="flex mt-[39px] justify-center items-center md:justify-start">
            <span class="text-accent-color text-md">Show all</span>
            <span class="flash-icon"></span>
        </div>
    </section>
</template>

<script>
    import CastList from "@/components/header/casts/CastList.vue";

    export default {
        components: {
            CastList,
        },
    }
</script>

<style>
    .flash-icon {
        width: 21px;
        height: 21px;
        padding: 6;
        display: inline-block;
        background-image: url(@/assets/images/flash.svg);
        background-repeat: no-repeat;
        background-size: contain;
        margin-inline: 12px;
    }
</style>
<template>
    <section>
        <h2 class="px-[15px] my-6  md:text-h2 md:px-[132px] md:mt-[50px]">More like this</h2>
        <MoreLikeList />
    </section>
</template>

<script>
import MoreLikeList from "@/components/main/more/MoreLikeList.vue";

export default {
    components: {
        MoreLikeList
    }
}
</script>
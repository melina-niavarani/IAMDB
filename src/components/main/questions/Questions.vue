<template>
    <section>
        <h2 class="mb-6 mt-[28px]  md:mt-[62px] md:text-h2">FAQs</h2>
        <QuestionsList/>
    </section>
</template>

<script>
import QuestionsList from "@/components/main/questions/QuestionsList.vue";

export default {
    components: {
        QuestionsList,
    }
}
</script>
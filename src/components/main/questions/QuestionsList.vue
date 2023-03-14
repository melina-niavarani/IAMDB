<template>
    <div>
        <ul class="space-y-3 pb-[43px]">
            <li class="cursor-pointer text-md font-bold md:text-lg"
            v-for=" (FAQs, index) in faq.items.slice(0, 9)" :key="index">
                <p>{{ FAQs.index }}</p>
                <p @click="answer[index] = !answer[index]" class="cursor-pointer text-md font-bold md:text-lg">{{ FAQs.question }}</p>
                <p v-if="answer[index]" class="border-l-4 border-accent-color pl-4 mt-[18px] text-[12px] leading-[14px] opacity-60 md:pl-[28px] md:mt-1.5 md:text-sm md:leading-[19px] ">{{ FAQs.answer }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "pinia";
import { useFetchData } from "@/stores/store.js"

export default {
    computed: {
        ...mapState(useFetchData, ['faq']),
        ...mapState(useFetchData, ['movies'])
    },  
    data() {
        return {
            answer: {0:false, 1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false},
        }
    },
}
    
</script>
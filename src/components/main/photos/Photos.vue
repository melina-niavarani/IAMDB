<template>
    <section>
        <h2 class="mt-[27px] mb-6 md:mt-[65px] md:text-h2">Photos</h2>
        <PhotosList :_images="_images"/>
    </section>
</template>

<script>
import PhotosList from "@/components/main/photos/PhotosList.vue";

export default {
    components: {
        PhotosList, 
    },
    props: [
        "_images"
    ]
}
</script>
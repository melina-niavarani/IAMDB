<template>
    <section>
        <ul class="flex flex-wrap gap-3 md:gap-6" >
            <li v-for="(photos,index) in photos">
                <div class="expand"></div>
                <div><img class="rounded-xl md:max-w-[216px]" :src="imageUrl" alt="no1"></div>
            </li>

        </ul>
    </section>
</template>

<script>

</script>
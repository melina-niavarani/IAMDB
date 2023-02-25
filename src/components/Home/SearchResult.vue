<template>
    <ul class="pl-8  pb-2 hover:text-accent-color hover:cursor-pointer origin-center ">
        <li v-for="movie in _movies" :key="movie.id" class="flex">
            <img class="w-[80px] h-[100px]" :src="_movies.image" >
            <div class="pl-4 inline-block ">
                <h3 class="mt-4 text-sm overflow-y-scroll mb-4 md:text-lg md:w-[162px] ">{{ _movies.title  }}</h3>
                <p class="opacity-50"> {{ _movies.description }} </p>
            </div>
        </li>
    </ul>
</template>


<script>
export default {
    props: [
        '_movies',
        '_movieTitle',
        '_moviePoster',
        '_moviedescription'
    ]
}
</script>
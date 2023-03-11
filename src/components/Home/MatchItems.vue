<template>
    <ul>
        <li v-for="movie in _movie" :key="movie.id">
            <router-link :to="'/details/' + movie.id" class="flex mb-2 hover:text-accent-color hover:cursor-pointer">
                <img class="w-[90px] h-[110px]" :src="movie.image"  >
                <div class="pl-4 inline-block ">
                    <h3 class="mt-4 text-sm overflow-y-scroll mb-4 md:text-md md:w-[162px] "> {{ movie.title }}</h3>
                    <p class="opacity-50 text-xs md:text-sm"> {{ movie.description }} </p>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: [
        "_movie"
    ]
}
</script>
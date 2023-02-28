<template>
    <section>
        <table class="mt-[18px] border-spacing">
            <tr class="border-b-[0.5px] md:border-b-[1px]">
                <td class="w-[171px] py-3"><h3 class="text-sm  md:text-md font-bold">Writers</h3></td>
                <td class="opacity-60 py-3">{{ _movie.writers }}</td>
            </tr>
            <tr class="border-b-[0.5px] md:border-b-[1px]">
                <td class="w-[171px] py-3"><h3 class="text-sm md:text-md font-bold">Genres</h3></td>
                <td class="opacity-60 py-3">{{ _movie.genres }}</td>
            </tr>
            <tr class="border-b-[0.5px] md:border-b-[1px]">
                <td class="w-[171px] py-3"><h3 class="text-sm md:text-md font-bold">Awards</h3></td>
                <td class="opacity-60 max-w-[323px] py-3">{{ _movie.awards }}</td>
            </tr>
            <tr class="border-b-[0.5px] md:border-b-[1px] md:border-none">
                <td class="w-[171px] py-3"><h3 class="text-sm md:text-md font-bold">Country of Origin</h3></td>
                <td class="opacity-60 py-3">{{ _movie.countries }}</td>
            </tr>
            <tr class="md:hidden">
                <td class="w-[171px] py-3"><h3 class="text-sm md:text-md font-bold">IMDB Rating</h3></td>
                <td class="opacity-60 py-3">{{ _movie.imDbRating }}</td>
            </tr>
        </table>
    </section>
</template>

<script>
export default {
    props: [
        "_movie"
    ],
}
</script>
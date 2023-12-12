<template>
    <section>
        <ul >
            <li class="centering space-x-3 mt-6 hover:cursor-pointer"
                v-for="actor in actorsLoaded " :key="actor.id" >
                <div >
                    <img class="w-[75px] h-[75px] rounded-[100px] object-top object-cover" 
                        :src="imagesUrl + actor.profile_path" 
                        :alt="actor.name " 
                    />
                </div>
                <div>
                    <h3 class="text-bold text-sm">{{ actor.name }}</h3>
                    <span class="text-xs opacity-60">{{ actor.character }}</span>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    import { mapState } from "pinia";
    import { useFetchData } from "@/stores/store.js"

    export default {
        computed: {
            ...mapState(useFetchData, ['casts']),
            ...mapState(useFetchData, ['imagesUrl']),
        },
        props: [
            'actorsLoaded'
        ],
    }
</script>

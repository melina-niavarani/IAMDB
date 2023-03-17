<template>
    <section>
        <ul class="bg-background-color relative z-10 top-[10px] right-[90px] md:top-0 md:left-[-60%] rounded-xl shadow-[0px_6px_12px_0px_#1B1717] text-center w-[200px] mt-[39px] text-xs border border-black md:mt-20 md:text-sm ">
            <li class="centering my-2 py-2  gap-2 hover:bg-white/10 ">
                <img src="@/assets/images/facebook.svg" class="w-10 h-10 ml-1 inline-block" alt="facebook">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" class="opacity-60 p-2" target="_blank">Facebook</a>
            </li>
            <li class="centering my-2 py-2  gap-2 hover:bg-white/10 ">
                <img src="@/assets/images/twitter.svg" class="w-10 h-10 ml-1 inline-block"  alt="twitter">
                <a href="http://www.twitter.com/share" class="opacity-60 p-2" target="_blank">Twitter</a>
            </li>
            <li class="centering my-2 py-2  gap-2 hover:bg-white/10 ">
                <img src="@/assets/images/envelope.png" class="w-10 h-10 ml-1 inline-block"  alt="email">
                <a :href="'mailto:?subject=movie and series iamdb&body=Check out this site:' + baseUrl " class="opacity-60 p-2" target="_blank">Email Link</a>
            </li>
            <li class="centering my-2 py-2  gap-2 hover:bg-white/10 ">
                <img src="@/assets/images/link.png" class="w-10 h-10 ml-1 inline-block"  alt="">
                <div @click="coppyLink()" class="opacity-60 p-2" target="_blank">Copy Link</div>
            </li>
        </ul>
    </section>
</template>

<script>
 import { useRoute } from "vue-router";

 export default {
    data(){
        return {
            route: useRoute(),
            baseUrl: '',
            showMessage: false,
            message: 'Link copied!'
        }
    },
    methods: {
        coppyLink(){
            this.baseUrl = `http://localhost:5173/details/${this.route.params.id}`;
            navigator.clipboard.writeText(this.baseUrl);
            setTimeout(() => {
					this.showMessage = false;
				}, 3000); // 3 seconds
        }
    }
    
 }

</script>
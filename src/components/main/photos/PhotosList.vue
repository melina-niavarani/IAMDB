<template>
    <section>
        <div v-if="expand" class="pop-up-img">
            <div class="relative">
                <img class="rounded-xl full-screen-img" src="@/assets/images/d.jpg" alt="no1">
                <span  @click="expand = !expand" class="close"></span>
            </div>
        </div>
        <ul class="flex flex-wrap gap-3 md:gap-6" >
            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>
            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>
            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>
            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>
            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>
            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>            <li @click="expand = !expand" class="photo-container relative rounded-xl  bg-black hover:cursor-pointer ">
                <img class="rounded-xl h-[102.4] w-[159px] md:h-[144px] md:w-[216px]" src="@/assets/images/d.jpg" alt="no1">
                <div class="absolute expand opacity-0"></div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return {
            expand: false
        }
    },
}
</script>

<style>
    .expand {
        background-image: url(@/assets/images/expand.svg);
        background-repeat: no-repeat;
        width: 32px;
        height: 32px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .photo-container:hover .expand{
        opacity: 100%;
    }
    .photo-container:hover  img{
        opacity: 30%;
    }
    .pop-up-img{
        position: fixed ;
        top: 0;
        left: 0;
        background: rgb(27, 23, 23, 0.8);
        height: 100%;
        width: 100%;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .full-screen-img {
        height: 631px;
        max-width: 946.5px;
        z-index: 100;
    }
    .close {
        position: absolute;
        top: 20px;
        right: 26.5px;
        padding: 10px;
        background-image: url(@/assets/images/close.svg);
        background-repeat: no-repeat;
        background-size: contain;
        width: 58px;
        height: 58px;
        z-index: 101;
        cursor: pointer;
    }
   
    @media (max-width: 768px){
        .full-screen-img {
            width: 90vw;
            height: unset;
            aspect-ratio: 16/9;
        }
        .close{
            top: 10px;
            right: 16.5px;
            width: 32px;
            height: 32px;
        }
    }
</style>
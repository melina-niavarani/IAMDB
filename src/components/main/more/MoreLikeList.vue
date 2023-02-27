<template>
    <section>
        <ul class="flex  flex-nowrap overflow-x-scroll gap-6 ">
            <li>
                <div class="hover:cursor-pointer">
                    <div><img class="rounded-xl min-w-[230px] w-[342px] md:w-[409px] md:min-w-[276px]" src="@/assets/images/more.png" alt=""></div>
                    <div class="flex justify-between mt-[13px] md:mt-3">
                        <h5 class="text-sm font-bold md:text-lg">Iron Man 2</h5>
                        <div>
                            <span v-if="isFavourite" class="Favourite"></span>
                            <span class="star"></span>
                            <span class="text-sm opacity-40 md:text-md">6.9</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="hover:cursor-pointer">
                    <div><img class="rounded-xl min-w-[230px] w-[342px] md:w-[409px] md:min-w-[276px]" src="@/assets/images/more.png" alt=""></div>
                    <div class="flex justify-between mt-[13px] md:mt-3">
                        <h5 class="text-sm font-bold md:text-lg">Iron Man 2</h5>
                        <div class="">
                            <span class="star"></span>
                            <span class="text-sm opacity-40 md:text-md">6.9</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="hover:cursor-pointer">
                    <div><img class="rounded-xl min-w-[230px] w-[342px] md:w-[409px] md:min-w-[276px]" src="@/assets/images/more.png" alt=""></div>
                    <div class="flex justify-between mt-[13px] md:mt-3">
                        <h5 class="text-sm font-bold md:text-lg">Iron Man 2</h5>
                        <div class="">
                            <span class="star"></span>
                            <span class="text-sm opacity-40 md:text-md">6.9</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="hover:cursor-pointer">
                    <div><img class="rounded-xl min-w-[230px] w-[342px] md:w-[409px] md:min-w-[276px]" src="@/assets/images/more.png" alt=""></div>
                    <div class="flex justify-between mt-[13px] md:mt-3">
                        <h5 class="text-sm font-bold md:text-lg">Iron Man 2</h5>
                        <div class="">
                            <span class="star"></span>
                            <span class="text-sm opacity-40 md:text-md">6.9</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="hover:cursor-pointer">
                    <div><img class="rounded-xl min-w-[230px] w-[342px] md:w-[409px] md:min-w-[276px]" src="@/assets/images/more.png" alt=""></div>
                    <div class="flex justify-between mt-[13px] md:mt-3">
                        <h5 class="text-sm font-bold md:text-lg">Iron Man 2</h5>
                        <div class="">
                            <span class="star"></span>
                            <span class="text-sm opacity-40 md:text-md">6.9</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="hover:cursor-pointer">
                    <div><img class="rounded-xl min-w-[230px] w-[342px] md:w-[409px] md:min-w-[276px]" src="@/assets/images/more.png" alt=""></div>
                    <div class="flex justify-between mt-[13px] md:mt-3">
                        <h5 class="text-sm font-bold md:text-lg">Iron Man 2</h5>
                        <div class="">
                            <span class="star"></span>
                            <span class="text-sm opacity-40 md:text-md">6.9</span>
                        </div>
                    </div>
                </div>
            </li>
            <li class="">
                <div class="hover:cursor-pointer">
                    <div><img class="rounded-xl min-w-[230px] w-[342px] md:w-[409px] md:min-w-[276px]" src="@/assets/images/more.png" alt=""></div>
                    <div class="flex justify-between mt-[13px] md:mt-3">
                        <h5 class="text-sm font-bold md:text-lg">Iron Man 2</h5>
                        <div class="">
                            <span class="star"></span>
                            <span class="text-sm opacity-40 md:text-md">6.9</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isFavourite: false
        }
    }
}
</script>

<style scoped>
    .star,
    .Favourite {
        display: inline-block;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        margin-top: 3px;
        margin-inline: 6px;
    }
    .star {
        background-image: url(@/assets/images/star.svg);
    }
    .Favourite {
        background-image: url(@/assets/images/redheart.svg);
    }
</style>
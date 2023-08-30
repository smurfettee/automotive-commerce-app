<template>
    <article class="w-full flex justify-center transition-colors">
        <a href="/#/car" class="flex w-[95%] m-2 p-5 bg-[#d22a41] items-center justify-between text-white text-lg cursor-pointer hover:bg-[#eb5368] duration-200">
            <div class="">
                <span class="font-bold">{{ maker }}</span> | {{ model }}
            </div>
            <div>{{ price?.toLocaleString() }}€</div>
        </a>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "CarInList",
    props: {
        maker: String,
        model: String,
        price: Number,
    },
});
</script>
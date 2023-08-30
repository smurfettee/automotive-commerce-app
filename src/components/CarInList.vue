<template>
    <article class="w-11/12 flex justify-center transition-colors">
        <a class="flex w-11/12 m-2 p-5 bg-[#d22a41] items-center justify-between text-white text-lg cursor-pointer hover:bg-[#eb5368] duration-200">
            <div class="">
                {{ maker }} | {{ model }}
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
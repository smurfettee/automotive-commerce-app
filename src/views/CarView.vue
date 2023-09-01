<template>
    <div class="w-full flex flex-col items-center justify-center transition-colors">
        <a @click="resetSearchInfo" class="mt-10 rounded-md text-2xl text-[#d22a41] font-semibold hover:text-[#ff3e58] duration-200" href="/#/">Return</a>
        <article class="flex flex-col m-10 bg-[#e8e8e8] text-center w-5/6 min-h-[16rem] max-w-2xl md:flex-row">
            <div class="bg-[#d22a41] text-white p-3 md:w-2/6 md:flex md:flex-col md:justify-center">
                <div class="text-3xl font-semibold">{{ $store.state.carDetails.make }}</div>
                <div>{{ $store.state.carDetails.model }}</div>
            </div>
            <div class="[&>div]:m-5 md:w-3/6 md:flex md:flex-col md:justify-center md:text-left">
                <div class="text-lg">{{ $store.state.carDetails.description }}</div>
                <div class="text-xl font-semibold">{{ $store.state.carDetails.features }}</div>
                <div>
                    <div class="font-bold text-xl">{{ $store.state.carDetails.mileage }}km</div>
                    <div class="text-[#444444] text-sm font-semibold">Mileage</div>
                </div>
            </div>
            <div class="bg-[#d22a41] text-white p-3 text-xl md:w-1/6 md:flex md:flex-col md:justify-center">{{ $store.state.carDetails.price.toLocaleString() }}€</div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CarView",
    methods: {
        // Resetting the searchInput value after returning to the home page.
        resetSearchInfo() {
            this.$store.commit("setSearchInput", "");
        }
    },
});
</script>
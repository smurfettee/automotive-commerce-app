<template>
    <div class="w-full flex flex-col items-center justify-center transition-colors">
        <a class="mt-10 rounded-md text-2xl text-[#d22a41] font-semibold hover:text-[#ff3e58] duration-200" href="/#/">Return</a>
        <article class="flex flex-col m-10 bg-[#e8e8e8] text-center w-5/6">
            <div class="bg-[#d22a41] text-white p-3">
                <div class="text-3xl font-semibold">{{ $store.state.carDetails.maker }}</div>
                <div>{{ $store.state.carDetails.model }}</div>
            </div>
            <div class="[&>div]:m-5">
                <div class="text-lg">{{ $store.state.carDetails.description }}</div>
                <div class="text-xl font-semibold">{{ $store.state.carDetails.features }}</div>
                <div>
                    <div class="font-bold text-xl">{{ $store.state.carDetails.mileage }}km</div>
                    <div class="text-[#444444] text-sm font-semibold">Mileage</div>
                </div>
            </div>
            <div class="bg-[#d22a41] text-white p-3 text-xl">{{ $store.state.carDetails.price.toLocaleString() }}€</div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CarView",
});
</script>
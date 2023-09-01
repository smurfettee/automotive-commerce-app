<template>
    <article class="w-full flex justify-center transition-colors">
        <a @click="setCarView" href="/#/car" class="flex w-[95%] m-2 p-5 bg-[#d22a41] items-center justify-between text-white text-lg cursor-pointer hover:bg-[#eb5368] duration-200">
            <div class="">
                <span class="font-bold">{{ car?.make }}</span> | {{ car?.model }}
            </div>
            <div>{{ car?.price.toLocaleString() }}€</div>
        </a>
    </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface ChildProps {
    item: { 
        id: number,
        make: string,
        model: string,
        price: number,
        description: string,
        features: string,
        mileage: number 
    };
}

export default defineComponent({
    name: "CarSingle",
    props: {
        car: Object as PropType<ChildProps['item']>
    },
    methods: {
        setCarView() {
            this.$store.commit("setCarDetails", this.car);
        }
    }
});
</script>
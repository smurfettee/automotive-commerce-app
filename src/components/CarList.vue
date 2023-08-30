<template>
    <main class="flex flex-col items-center ">
        <CarInList v-bind:key="index" v-for="(car, index) in cars" :maker="car.make" :model="car.model" :price="car.price"/>
    </main>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import CarInList from './CarInList.vue';
import axios from "axios";

export default defineComponent({
    name: "CarList",
    components: { CarInList },
    data() {
        return {
            cars: [] as {id: number, make: string, model: string, price: number, description: string, features: string, mileage: number}[],
        }
    },
    methods: {
		getData() {
			axios.get("https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3/cars.json")
			.then(res => {
				this.cars = res.data;
			}).catch(e => {
				console.log(e);
			});
		}
	},
	beforeMount() {
		this.getData()
	}
});
</script>
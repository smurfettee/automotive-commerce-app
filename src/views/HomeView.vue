<template>
    <div class="home">
		<SearchBar/>
		<CarList/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import CarList from '@/components/CarList.vue';
import axios from "axios";

export default defineComponent({
    name: 'HomeView',
    components: {SearchBar, CarList},
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

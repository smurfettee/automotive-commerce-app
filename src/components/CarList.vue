<template>
    <main class="flex flex-col items-center h-[70%]">
        <div class="flex flex-col items-center overflow-auto w-11/12 relative left-1">
            <!-- In the component below, for every item inside the cars array we are creating
            a CarInList component. Also simultaneously filtering the cars array whenever the
            SearchInput variable changes.-->
            <CarInList v-bind:key="index" 
            v-for="(car, index) in cars.filter(car => car.make.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) || car.model.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()))" 
            :maker="car.make" :model="car.model" :price="car.price"/>
        </div>
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
            // An array of objects containing the following attributes.
            cars: [] as {id: number, make: string, model: string, price: number, description: string, features: string, mileage: number}[],
        }
    },
    methods: {
        // Gets the data from the gist and stores it in the cars variable.
		getData() {
			axios.get("https://gist.githubusercontent.com/joaofs/6a4eb62499572a29485ac5924a0c9e64/raw/97ac2191e65fb6d84f6f336dc8867efbc97410a3/cars.json")
			.then(res => {
				this.cars = res.data;
			}).catch(e => {
				console.log(e);
			});
		},
	},
	beforeMount() {
		this.getData()
	},
    // Gets the value of searchInput from the store whenever it(searchInput) changes.
    computed: {
        searchInput: function(){
            return this.$store.state.searchInput;
        }
    }
});
</script>
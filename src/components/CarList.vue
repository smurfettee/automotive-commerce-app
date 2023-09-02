<template>
    <main class="flex flex-col items-center h-[70%]">
        <div class="flex flex-col items-center overflow-auto w-11/12 relative left-1 max-w-2xl">
            <!-- In the component below, for every item inside the cars array we are creating
            a CarInList component. Also simultaneously filtering the cars array whenever the
            SearchInput variable changes.-->
            <CarSingle v-for="(car, index) in filtered(cars)" 
                v-bind:key="index" 
                :car="car"
            />
        </div>
        <div v-if="filtered(cars).length == 0 &&  searchInput != ''">
            Couldn't find for {{ searchInput }}
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import CarSingle from './CarSingle.vue';
import axios from "axios";

export default defineComponent({
    name: "CarList",
    components: { CarSingle },
    data() {
        return {
            // An array of objects containing the following attributes.
            // The response of the fetch is stored in this variable.
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
        // Filters the cars array for the current searchInput value.
        filtered(cars: Array<{ id: number, make: string, model: string, price: number, description: string, features: string, mileage: number }>) {
            // To make the code faster, if searchInput is an empty string it doesn't filter.
            if (this.searchInput == "") {
                return cars;
            }

            /* 
            This piece of code checks if the searchInput value is inside the make attribute
            then checks if it's inside the model attribute and finally checks if its inside both
            of those attributes. Then filters the car list accordingly.
            */
            return cars.filter(car => car.make.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase().trim()) || car.model.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase().trim()) || (car.make.toLocaleLowerCase() + " " + car.model.toLocaleLowerCase()).includes(this.searchInput.toLocaleLowerCase().trim()));
        }
	},
    // Fetches the data before the render.
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
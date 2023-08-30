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

export default defineComponent({
    name: 'HomeView',
    components: {SearchBar, CarList},
});
</script>

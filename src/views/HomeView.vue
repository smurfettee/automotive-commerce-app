<template>
    <div class="home">
      <SearchBar :test="test"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent({
    name: 'HomeView',
    components: {SearchBar},
	data() {
		return {
			test: "",
		}
	},
	watch: {
		test(){
			console.log(this.test);
		}
	}
});
</script>

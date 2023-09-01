<template>
    <header class="w-full flex justify-center p-10">
        <input class="p-2 text-xl w-11/12 border-2 border-gray-400 max-w-lg" v-model="searchInput" type="text" id="searchBar" placeholder="Search for cars...">
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SearchBar",
    data() {
        return {
            searchInput: "",
        }
    },
    watch: {
        // Whenever the searchInput changes, updates the searchInput value inside the store.
        searchInput() {
            this.$store.commit("setSearchInput", this.searchInput);
        }
    }
});
</script>
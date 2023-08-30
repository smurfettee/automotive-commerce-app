<template>
    <main>
        
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CarInList from './CarInList.vue';

export default defineComponent({
    name: "CarList",
    components: {},
    props: {
        carList: Array,
    }
});
</script>
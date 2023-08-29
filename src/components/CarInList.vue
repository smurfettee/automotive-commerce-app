<template>
    <article>
        <div>
            <div>
                <div>{{ maker }}</div>
                <div>{{ model }}</div>
            </div>
            <div>{{ price }}</div>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "CarInList",
    props: {
        maker: String,
        model: String,
        price: Number,
    }
});
</script>
<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    txt01: { type: String },
    number01: { type: Number },
})

const txt01 = ref('')
</script>

<template>
    <div class="Carouselitem-container">
        <h2>{{ props.txt01 }}</h2>
    </div>
</template>

<style lang="less" scoped>
.Carouselitem-container {
    padding: 2px;
}
</style>
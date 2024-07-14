<script setup>
import { ref, onMounted } from 'vue';
import ImageLoader from '@/components/ImageLoader/index.vue'

const props = defineProps({
    txt01: { type: String },
    number01: { type: Number },
    src: { type: Number },
    placeholder: { type: Number },
})

const txt01 = ref('')
</script>

<template>
    <div class="Carouselitem-container">
        <div>
            <ImageLoader :src="props.src" :placeholder="props.placeholder"/>
        </div>
        <h2>{{ props.txt01 }}</h2>
    </div>
</template>

<style lang="less" scoped>
.Carouselitem-container {
    padding: 2px;
}
</style>
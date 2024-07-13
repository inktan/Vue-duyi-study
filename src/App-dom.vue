<script setup>
import { ref, reactive, computed, onMounted,onBeforeUpdate } from 'vue'
const containerWidth = ref(0);
const containerHeight = ref(0);

const containerRef = ref(null);

onMounted(() => {
  containerWidth.value = containerRef.value.clientWidth;
  containerHeight.value = containerRef.value.clientHeight;
})
onBeforeUpdate(() => {
  containerWidth.value = containerRef.value.clientWidth;
  containerHeight.value = containerRef.value.clientHeight;
})
</script>

<template>
  <div class="app-container" ref="containerRef">
    容器宽度:{{ containerWidth }} ==>容器高度:{{ containerHeight }}
  </div>
</template>

<style lang="less" scoped></style>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUpdate } from 'vue'
import Clock from "./components/Clock.vue"

const showClock = ref(true)
</script>

<template>
  <div class="app-container" ref="containerRef">
    <Clock v-if="showClock" />
    <button @click="showClock = !showClock">切换显示</button>
  </div>
</template>

<style lang="less" scoped></style>

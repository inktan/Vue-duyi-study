<script setup>
import { ref, reactive, computed, onMounted, onBeforeMount, onUnmounted } from 'vue'
const timer = ref(null)
const current = ref('')

function getCurrent() {
    return new Date().toLocaleTimeString();
}

onBeforeMount(() => {
    timer.value = setInterval(() => {
        console.log(current.value)
        current.value = getCurrent();
    }, 500);
});
onUnmounted(() => {
    clearInterval(timer.value)
})
</script>

<template>
    <h1>当前时间:{{ current }}</h1>
</template>
<style></style>
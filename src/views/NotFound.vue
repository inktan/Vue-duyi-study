<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

</script>

<template>
    <div class="container">
        <h2>
            404 找不到页面
        </h2>
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.app-container {
    height: 100%;
}
</style>

<script setup>

import { ref, reactive, computed, toRefs } from 'vue'
import Empty from './components/Empty/index.vue'

</script>

<template>
  <div class="main">
    <Empty text="~~~~~~~~~~~~~" />
  </div>

</template>

<style lang="less" scoped>
.main {
  // width: 100%;
  height: 100%;
}
</style>

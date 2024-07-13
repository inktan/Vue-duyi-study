<script setup>

import { ref, reactive, computed, toRefs } from 'vue'
import Pager from './components/Pager/index.vue'

const current = ref(1);
const total = ref(1000);
const limit = ref(10);
const visibleNumber = ref(10);

function handlePageChange(newPage) {
  // console.log(newPage);
  this.current = newPage;
  // console.log("加载当前页数据")；
}
</script>

<template>
  <div id="id" class="test-container">
    <pager :current="current" :total="total" :limit="limit" :visibleNumber="visibleNumber"
      @pageChange="handlePageChange($event)" />
  </div>

</template>

<style lang="less" scoped>
.test-container {}
</style>

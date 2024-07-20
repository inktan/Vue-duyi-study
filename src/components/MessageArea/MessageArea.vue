<script setup>
import { ref, reactive, computed, onMounted, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

import DataForm from './DataForm.vue'
import DataList from './DataList.vue'

const props = defineProps({
  list: { type: Array, dafault: () => [] },
  title: { type: String, dafault: () => [] },
  subTitle: { type: Number, dafault: () => [] }
})

</script>

<template>
  <div class="message-area-container" id="message-area-container">
    <DataForm v-bind="$attrs"/>
    <h3>{{ title }}
      <span>({{ subTitle }})</span>
    </h3>
    <DataList :list="list" />
    <!-- 最下面底部转圈圈的效果 -->
    <div class="loading"></div>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.message-area-container {
  // height: 100%;
  // overflow: scroll;

  .loading {
    // position: relative;
    // height: 100px;
  }
}
</style>

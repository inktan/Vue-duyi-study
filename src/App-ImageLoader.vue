<script setup>

import { ref, reactive, computed, toRefs } from 'vue'
import ImageLoader from './components/ImageLoader/index.vue'

function handleLoaded() {
  console.log("图片加载完成==>");
}
</script>

<template>
  <div id="id" class="test-container">
    <ImageLoader src="https://gd-hbimg.huaban.com/b234bca10b2758b3a2ba412b1f5ad38352cee28390df3-wSixpG_fw658webp"
      placeholder="https://gd-hbimg.huaban.com/b234bca10b2758b3a2ba412b1f5ad38352cee28390df3-wSixpG_fw658webp"
      :duration="2000" @loaded="handleLoaded" />
  </div>

</template>

<style lang="less" scoped>
.test-container {
  border: 1px solid;
  width: 360px;
  height: 360px;
  margin: auto;
  position: relative;
  overflow: hidden;
}
</style>

<script setup>

import Layout from './components/Layout.vue'

</script>

<template>
  <div id="id" class="test-container">
    <Layout>
      <template #left>
        <div class="left">
          <p>我是-header插槽</p>
        </div>
      </template>
      <template #main>
        <div class="main">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae exercitationem harum quibusdam
            dolorum voluptates nisi, consectetur enim commodi unde error, quisquam excepturi temporibus explicabo porro
            labore iste officia consequuntur! Tempora.</p>
        </div>
      </template>
      <template v-slot:right>
        <div class="right">
          <p>我是-footer插槽</p>
        </div>
      </template>
    </Layout>

  </div>

</template>

<style lang="less" scoped>
.test-container {
  width: 60%;
  height: 100%;
  border: 1px solid;
  margin: 0 auto;
  // white-space: nowrap;

  .left {
    width: 180px;
    height: 100%;
    background-color: aliceblue;
  }

  .main {
    width: 100%;
    height: 100%;
    background-color: beige;
    // overflow: hidden;
  }

  .right {
    width: 150px;
    height: 100%;
    background-color: blanchedalmond;
  }
}
</style>

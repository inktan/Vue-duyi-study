<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Layout from './components/Layout.vue'
import SiteAside from "./components/SiteAside/index.vue";


</script>

<template>
  <div class="app-container">

      <Layout>
        <template #left>
          <div class="aside">
            <SiteAside />
          </div>
        </template>
        <template #main>
          <div class="main">
            <!-- <RouterLink to="/About">About</RouterLink>
          <RouterLink to="/Blog">Blog</RouterLink>
          <RouterLink to="/">Go to Home</RouterLink>
          <RouterLink to="/Message">Message</RouterLink>
          <RouterLink to="/Project">Project</RouterLink> -->
            <RouterView />

          </div>
        </template>
        <template v-slot:right>
          <div class="right">
          </div>
        </template>
      </Layout>


  </div>

  <!-- <RouterView /> -->
</template>

<style lang="less" scoped>
@import "./styles/mixin.less";
@import "./styles/var.less";

.app-container {
  height: 100%;

  .aside {
    width: 250px;
    height: 100%;
    overflow: auto;
    background-color: rebeccapurple;
  }

  .main {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>

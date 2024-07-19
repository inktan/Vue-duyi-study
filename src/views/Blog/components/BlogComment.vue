<script setup>
import MessageArea from '@/components/MessageArea/MessageArea.vue'
import { ref, reactive, computed, onMounted, onBeforeMount } from 'vue'

import { useRoute, useRouter } from 'vue-router';
import { inject } from 'vue';

const route = useRoute();
const router = useRouter();

const comments = ref(Object)
const loading = ref(true)
const page = ref(10)
const limit = ref(20)

import { getComments, postComment } from '@/api';

onBeforeMount(async () => {
  loading.value = true;
  comments.value = await getComments(route.params.id, page.value, limit.value);
  // console.log(comments.value.rows);
  loading.value = false;
})

async function handleSubmit(formData, callback) {
  // console.log(formData);
  const resp = await postComment({
    blogId: route.params.id,
    ...formData,
  });
  callback();
  comments.value.rows.unshift(resp);
}
</script>

<template>
  <div class="blog-comment-container">
    <MessageArea @submit="handleSubmit" :list="comments.rows" v-loading="loading" title="评论列表"
      :subTitle="comments.total" />
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.blog-comment-container {
  // height: 100%;
  // overflow: auto;
}
</style>

<script setup>
import MessageArea from '@/components/MessageArea/MessageArea.vue'
import { ref, reactive, computed, onMounted, onBeforeMount,onUnmounted ,onBeforeUnmount} from 'vue'

import { useRoute, useRouter } from 'vue-router';
import { inject } from 'vue';
import eventBus from '@/eventBus';

const route = useRoute();
const router = useRouter();

const comments = ref(Object)
const loading = ref(true)
const page = ref(1)
const limit = ref(12)

import { getComments, postComment } from '@/api';

const fetcData = async function () {
  loading.value = true;
  comments.value = await getComments(route.params.id, page.value, limit.value);
  loading.value = false;
}
onBeforeMount(fetcData)

async function fetchMore() {
  if (!hasMore.value)
    return
  loading.value = true;
  page.value++;
  const resp = await getComments(route.params.id, page.value, limit.value);
  comments.value.total = resp.total;
  comments.value.rows = comments.value.rows.concat(resp.rows);

  loading.value = false;
}

const hasMore = computed(() => {
  return comments.value.rows.length < comments.value.total;
})

// 监视滚动条的变化
const handleScroll = (event) => {
  if (loading.value)
    return
  // console.log(event)
  const dom = event.target;
  const scrollTop = dom.scrollTop;
  const clientHeight = dom.clientHeight;
  const scrollHeight = dom.scrollHeight;

  const range = 100;
  const dec = Math.abs(scrollTop + clientHeight - scrollHeight)
  if (dec <= range)
    fetchMore();
};

onMounted(() => {
  // 当组件挂载后，通过事件总线注册这个函数
  eventBus.on('register-scroll', handleScroll);
});

onBeforeUnmount(()=>{
  eventBus.off('register-scroll', handleScroll);
})
onBeforeMount(() => {
  window.fetchMore = fetchMore;
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
    <MessageArea @submit="handleSubmit" :list="comments.rows" title="评论列表" :subTitle="comments.total" />
    <div class="loading" v-loading="loading" v-show="loading"></div>
  </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.blog-comment-container {

  // height: 100%;
  // overflow: auto;
  .loading {
    height: 120px;
  }
}
</style>

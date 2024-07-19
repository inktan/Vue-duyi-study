<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { formatDate } from '@/utils'

const route = useRoute();
const router = useRouter();

const props = defineProps({
  list: { type: Array, dafault: () => [] },
})

</script>

<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <div class="avatar">
        <el-avatar
          src="http://10.1.12.30:8081/static/gooood/Casa%20Quinta%20San%20Miguel%20by%20MoGS%20-%20%E8%B0%B7%E5%BE%B7%E8%AE%BE%E8%AE%A1%E7%BD%91/8_14-casa-quinta-san-miguel-by-mogs.jpeg"
          :size="50" />
      </div>
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content"> {{ item.content }} </div>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </ul>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles/var.less";

.data-list-container {
  // overflow: auto;

  li {
    display: flex;
    border-bottom: 1px solid lighten(@gray, 20%);
    padding: 15px 0;
  }

  .avatar {
    margin-left: 12px;
    margin-right: 18px;
  }

  .data {
    flex: 1 1 auto;
    position: relative;

    .nickname {
      color: darken(@success, 10%);
      margin-bottom: 10px;
    }

    .content {
      font-size: 14px;
    }

    .time {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 12px;
      color: @gray;
    }
  }
}
</style>

<script setup>
import { ref, reactive, computed, toRefs } from 'vue'

const props = defineProps({
  // 当前页码
  current: {
    type: Number,
    dafault: 1,
  },
  // 总数据量
  total: {
    type: Number,
    dafault: 100,
  },
  // 页容量
  limit: {
    type: Number,
    dafault: 10,
  },
  // 可见页码数
  visibleNumber: {
    type: Number,
    dafault: 10,
  },
})

const { current, total, limit, visibleNumber } = toRefs(props);

// 一个计算属性 ref
const pageNumber = computed(() => {
  console.log(total.value / limit.value);
  console.log('total.value / limit.value');
  return Math.ceil(total.value / limit.value);
})

// console.log(total.value);
// console.log(limit.value);
// console.log(total.value / limit.value);
console.log(pageNumber.value);

const show = computed(() => {
  return pageNumber.value > 1;
})
console.log(show.value);

const visiualMin = computed(() => {
  let min = current.value - Math.floor(visibleNumber.value / 2);
  if (min < 1) {
    min = 1;
  }
  if (min >= pageNumber.value - 9) {
    min = pageNumber.value - 9;
  }
  return min;
})
const visiualMax = computed(() => {
  let max = visiualMin.value + visibleNumber.value - 1;
  if (max > pageNumber.value) {
    max = pageNumber.value;
  }
  return max;
})

const numbers = computed(() => {
  let nums = [];
  for (let i = visiualMin.value; i <= visiualMax.value; i++) {
    nums.push(i);
  }
  return nums;
})

const emit = defineEmits(['pageChange']); // 定义一个名为 'some-event' 的事件

function handleClick(newPage) {
  if (newPage < 1) {
    newPage = 1;
  }
  emit('pageChange', newPage);
}
</script>
<template>
  <!-- 只有总页数大于1时，才显示 -->
  <div class="pager-container" v-if="show">
    <a @click="handleClick(1)" :class="{ disable: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{ disable: current === 1 }">&lt;&lt;</a>
    <a @click="handleClick(n)" v-for="(n, i) in numbers" :key="i" :class="{ activate: n === current }">{{ n }}</a>
    <a @click="handleClick(current + 1)" :class="{ disable: current === pageNumber }">&gt;&gt;</a>
    <a @click="handleClick(pageNumber)" :class="{ disable: current === pageNumber }">&gt;&gt;|</a>
  </div>
</template>

<style lang="less" scoped>
@import "../../styles/mixin.less";
@import "../../styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    cursor: pointer;
    color: @primary;
    margin: 0 6px;

    &.disable {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.activate {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
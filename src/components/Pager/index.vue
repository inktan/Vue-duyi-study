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

const selPageNum = ref(props.current)

computed(() => {
  if (selPageNum.value < 1)
    selPageNum.value = 1;
  else if (selPageNum.value > pageCount.value)
    selPageNum.value = pageCount.value;
})

const pageCount = computed(() => {
  return Math.ceil(props.total / props.limit);
})

const show = computed(() => {
  return pageCount.value > 1;
})

const visiualMin = computed(() => {
  let min = selPageNum.value - Math.floor(props.visibleNumber / 2);
  if (min < 1) {
    min = 1;
  }
  if (min >= pageCount.value) {
    min = pageCount.value - props.visibleNumber;
  }
  // 当前页码输入异常，超出最大页码
  if (min < 1) {
    min = 1;
    selPageNum.value=1;
  }
  return min;
})

const visiualMax = computed(() => {
  let max = visiualMin.value + props.visibleNumber - 1;
  if (max > pageCount.value) {
    max = pageCount.value;
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

function handleClick(newPageNumber) {
  if (newPageNumber < 1)
    newPageNumber = 1;
  else if (newPageNumber > pageCount)
    newPageNumber = pageCount;

  selPageNum.value = newPageNumber;

  emit('pageChange', newPageNumber);
}
</script>
<template>
  <!-- 只有总页数大于1时，才显示 -->
  <div class="pager-container" v-if="show">
    <a @click="handleClick(1)" :class="{ disable: selPageNum === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(selPageNum - 1)" :class="{ disable: selPageNum === 1 }">&lt;&lt;</a>
    <a @click="handleClick(n)" v-for="(n, i) in numbers" :key="i" :class="{ activate: n === selPageNum }">{{ n }}</a>
    <a @click="handleClick(selPageNum + 1)" :class="{ disable: selPageNum === pageCount }">&gt;&gt;</a>
    <a @click="handleClick(pageCount)" :class="{ disable: selPageNum === pageCount }">&gt;&gt;|</a>
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
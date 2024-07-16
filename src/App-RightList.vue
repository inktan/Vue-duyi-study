<script setup>
import RightList from '@/views/Blog/componets/RightList.vue'
import { ref, onBeforeMount, onMounted, onUpdated, computed, nextTick, watch, onUnmounted } from 'vue';

const listData = ref([
  { name: 'a', isSelected: false },
  {
    name: 'b', isSelected: false, children: [
      { name: 'b-1', isSelected: true },
      { name: 'b-2', isSelected: false },
      {
        name: 'b-3', isSelected: true, children: [
          { name: 'b-3-1', isSelected: false },
          { name: 'b-3-2', isSelected: false },
          { name: 'b-3-3', isSelected: false },
          { name: 'b-3-4', isSelected: false },
        ]
      },
      { name: 'b-4', isSelected: false },
    ]
  },
  { name: 'c', isSelected: false },
  { name: 'd', isSelected: false },
  { name: 'e', isSelected: true },
  { name: 'f', isSelected: false },
  { name: 'g', isSelected: false },
  { name: 'h', isSelected: false },
])
const hangClick = function(item){
console.log(item)
}
</script>

<template>
  <div class="app-container ">
    <RightList :listData="listData" @selected="hangClick"/>
  </div>
</template>

<style>
.app-container {
  width: 100%;
  height: 100%;
  background-color: antiquewhite
}
</style>

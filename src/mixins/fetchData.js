// 公共的远程获取数据的代码
// 具体的组件中，需要提供一个远程获取数据的方法 fatchData

import { ref, onBeforeMount, onMounted, onUpdated, computed, nextTick, watch, onUnmounted } from 'vue';

const myMixin = {
    data() {
      return {
        // 混入的数据
        mixinData: 'Hello from mixin'
      };
    },
    methods: {
      // 混入的方法
      mixinMethod() {
        console.log(this.mixinData);
      }
    },
    created() {
      // 混入的生命周期钩子
      console.log('Mixin hook called');
    }
  };
  
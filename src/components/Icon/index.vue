<script setup>
import { ref, reactive, computed, toRefs } from 'vue'

const classMap = {
  home: "icon-zhuye",
  success: "icon-success",
  error: "icon-error",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-xinxi",
  blog: "icon-blog",
  code: "icon-code1",
  about: "icon-about",
  weixin: "icon-weixin",
  mail: "icon-email",
  github: "icon-github",
  qq: "icon-QQ-circle-fill",
  arrowUp: "icon-jiantouxiangshang",
  arrowDown: "icon-jiantouxiangxia",
  empty: "icon-icon_empty",
  chat: "icon-chat1196057easyiconnet1",
};

const props = defineProps({
  iconType: {
    type: String,
    required: true,
  },
  size: { type: Number, default: 16 },

})
const { iconType, size } = toRefs(props);

// 一个计算属性 ref
const fontClass = computed(() => {
  return classMap[iconType.value];
})

</script>
<template>
  <i class="iconfont icon-container" :class="fontClass" :style="{ fontSize: size + 'px', }"></i>
</template>


<style scoped>
@import "//at.alicdn.com/t/c/font_4609986_kkaayadfxu.css";

i {
  display: block;
}
</style>
<script setup>

import { ref, reactive, computed } from 'vue'
import Icon from './components/Icon/index.vue'

import DocumentationIcon from './components/icons/IconDocumentation.vue'
import ToolingIcon from './components/icons/IconTooling.vue'
import EcosystemIcon from './components/icons/IconEcosystem.vue'
import CommunityIcon from './components/icons/IconCommunity.vue'
import SupportIcon from './components/icons/IconSupport.vue'

let count = ref(0);
const increase = () => {
  count.value++;
}

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
  arrowUp: "icon-shangjiantou",
  arrowDown: "icon-xiajiantou",
  empty: "icon-icon_empty",
  chat: "icon-chat1196057easyiconnet1",
};
let classMapRef = ref(classMap);

</script>

<template>
  <div class="main">
    <div class="container">
      <Icon v-for="(value, key, index) in classMapRef" key="item.key" :iconType="key" />
      <i>
        <DocumentationIcon />
      </i>
      <i>
        <ToolingIcon />
      </i>
      <i>
        <EcosystemIcon />
      </i>
      <i>
        <CommunityIcon />
      </i>
      <i>
        <SupportIcon />
      </i>
    </div>
    <p>
      <button @click="increase">count:{{ count }}</button>
    </p>
  </div>

</template>

<style lang="less" scoped>
.main {
  padding-top: 100px;

  .container {
    // text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    i {
      &:hover {
        color:coral;
      }
    }
  }
}
</style>

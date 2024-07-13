<script setup>
import { ref, reactive, computed, toRefs } from 'vue'
import Icon from '../Icon/index.vue'
const props = defineProps({
    text: {
        type: String,
        default: "无数据",
    },
})
const { text } = toRefs(props);

</script>

<template>
    <div class="empty-contanier">
        <Icon iconType="empty" />
        <p>{{ text }}</p>
    </div>
</template>

<style lang="less" scope>
@import "../../styles/mixin.less";
@import "../../styles/var.less";

.empty-contanier {
    .self-center(absolute);
    color: @lightWords;
    text-align: center;
}

.icon-container {
    font-size: 36px;
}
</style>
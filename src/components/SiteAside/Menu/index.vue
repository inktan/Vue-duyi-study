<script setup>
import { ref, reactive, computed } from 'vue'
import Icon from "../../Icon/index.vue"
import { RouterLink } from 'vue-router'

const items = ref(
    [{
        name: 'Home',
        title: '首页',
        icon: 'home',
        exeact: true // 是否启动精确匹配
    }, {
        name: 'Blog',
        title: '文章',
        icon: 'blog',
        exeact: false //只要当前路径以link开头，当前菜单就是选中的
    }, {
        name: 'About',
        title: '关于我',
        icon: 'about',
        exeact: true // 是否启动精确匹配

    }, {
        name: 'Project',
        title: '项目&效果',
        icon: 'code',
        exeact: true // 是否启动精确匹配

    }, {
        name: 'Message',
        title: '留言板',
        icon: 'chat',
        exeact: true // 是否启动精确匹配
    }])

</script>

<template>
    <nav class="menu-contanier">
        <RouterLink :exact="item.exeact" :to="{ name: item.name }" v-for="item in items" :key="item.name"
            active-class="selected" exact-active-class="">
            <div class="icon">
                <Icon :iconType="item.icon" />
            </div>
            <span>{{ item.title }}</span>
        </RouterLink>
    </nav>
</template>

<style lang="less" scoped>
@import "../../../styles/mixin.less";
@import "../../../styles//var.less";

.menu-contanier {
    color: @gray;
    margin: 24px 0;

    a {
        margin: 12px auto;

        &.selected { 
            background: darken(@words, 30%);
        }

        padding: 0 30px;
        display: block;
        display: flex;
        align-items: center;
        height: 24px;

        .icon {
            width: 24px;
        }

        &:hover {
            color: white;
        }
    }
}
</style>
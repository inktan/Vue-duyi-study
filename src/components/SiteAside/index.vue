<script setup>
import Icon from "../Icon/index.vue";
import Contact from "./Contact/index.vue";
import Menu from "./Menu/index.vue";

</script>

<template>
    <div class="site-asdie-container">
        <div class="avatar-container">
            <el-avatar
                src="http://10.1.12.30:8081/static/archcollege/%E6%94%BF%E6%B2%BB%E5%A4%A7%E5%AD%A6%E5%85%AC%E5%85%B1%E8%A1%8C%E6%94%BF%E5%8F%8A%E4%BC%81%E4%B8%9A%E7%AE%A1%E7%90%86%E6%95%99%E8%82%B2%E4%B8%AD%E5%BF%83%20_%20%E6%BD%98%E5%86%80%E8%81%94%E5%90%88%E5%BB%BA%E7%AD%91%E5%B8%88%E4%BA%8B%E5%8A%A1%E6%89%80/1_1650167538913278.jpeg"
                :size="150" />
        </div>
        <h1 class="title">u_book_博客</h1>
        <Menu />
        <Contact />
        <p class="footer">
            <span>
                asd_845487265842_yueasd_845487265842_yueasd_845487265842_yueasd_845487265842_yue
            </span>
        </p>
    </div>
</template>

<style lang="less" scoped>
@import "../../styles/reset.css";
@import "../../styles/global.less";
@import "../../styles/var.less";

.site-asdie-container {
    width: 100%;
    height: 100%;
    background-color: @dark;
    padding-top: 20px;
    overflow: auto;

    .avatar-container {
        text-align: center;
    }

    .title {
        text-align: center;
        color: white;
        padding-top: 40px;
    }

    .footer {
        text-align: center;
        color: white;
        padding-top: 30px;
        font-size: 12px;

        span {
            word-wrap: break-word;
            line-height: 18px;
            background: linear-gradient(to right, #7e2f2d, #146420) no-repeat right bottom;
            background-size: 0 2px;
            transition: background-size 1s;
        }

        span:hover {
            background-position: left bottom;
            background-size: 100% 2px;

        }
    }
}
</style>
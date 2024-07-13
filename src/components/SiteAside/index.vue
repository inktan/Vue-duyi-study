<script setup>
import Icon from "../Icon/index.vue";
import Contact from "./Contact/index.vue";
import Menu from "./Menu/index.vue";
import Avatar from "../Avatar.vue";
</script>

<template>
    <div class="site-asdie-container">
        <div class="avatar-container">
            <Avatar
                :url="'http://10.1.12.30:8081/static/gooood/Studentenwohnheim%20Hainbase%20by%20Max%20Dudler%20-%20%E8%B0%B7%E5%BE%B7%E8%AE%BE%E8%AE%A1%E7%BD%91/2_003-studentenwohnheim-hainbase-by-max-dudler.jpeg'"
                :size="125" />
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
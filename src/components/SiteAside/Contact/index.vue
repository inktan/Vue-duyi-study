<script setup>
import Icon from "../../Icon/index.vue"
</script>

<template>
    <ul class="contact-contanier">
        <li>
            <a href="">
                <div class="icon weixin">
                    <Icon :iconType="'weixin'" />
                </div>
                <span>202407091543</span>
            </a>
            <div class="pop">
                <img src="https://img1.baidu.com/it/u=3685234108,954911792&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200"
                    alt="">
            </div>
        </li>

        <li>
            <a
                href="tencent://message/?Menu=yes&uin=327039389&Service=300&sigT=45a1e5847943664c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                <div>
                    <Icon :iconType="'qq'" />
                </div>
                <span>327039389</span>
            </a>
            <div class="pop">
                <img src="https://img1.baidu.com/it/u=3685234108,954911792&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200"
                    alt="">
            </div>
        </li>
        <li>
            <a href="mialto:inktan@163.com">
                <div>
                    <Icon :iconType="'mail'" />
                </div>
                <span>inktan@163.com</span>
            </a>
            <div class="pop">
                <img src="https://img1.baidu.com/it/u=3685234108,954911792&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200"
                    alt="">
            </div>
        </li>
    </ul>
</template>

<style lang="less" scoped>
@import "../../../styles/mixin.less";
@import "../../../styles//var.less";

.contact-contanier {
    // .self-center(absolute);
    // color: @lightWords;
    // text-align: center;
    // width: 100%;
    padding: 10px;
    margin: 0;
    color: @gray;
    @itemHeight: 30px;


    li {
        cursor: pointer;
        height: @itemHeight;
        line-height: 30px;
        position: relative;

        margin: 20px 0;
        &:hover {
            .pop {
                transform: scaleY(1);
            }
        }

        a {
            display: flex;

            // align-items: center;
            .weixin {
                font-size: 32px;
                // text-indent: -3px;
            }
        }

        .icon-container {
            font-size: 25px;
            width: 36px;
        }

        .pop {
            position: absolute;
            left: 0;
            bottom: @itemHeight+5px;
            padding: 10px 15px;
            background: #fff;
            border-radius: 5px;
            transform: scaleY(0);
            transform-origin: center bottom;
            transition: 0.3s;

            img {
                width: 150px;
                height: 150px;
            }

            &::after {
                content: "";
                position: absolute;
                left: 50%;
                transform: translateX(-50%) rotate(45deg);
                width: 8px;
                height: 8px;
                background: rgb(255, 255, 255);
                bottom: -4px;
            }
        }
    }
}
</style>
<template>
    <div class="layout-container">
        <!-- <header> -->
        <!-- 内置组件 插槽 占位 -->
        <!-- <slot name="left"></slot> -->
        <!-- </header> -->
        <!-- <main> -->
        <!-- <slot name="main"></slot> -->
        <!-- </main> -->
        <!-- <footer> -->
        <!-- <slot name="right"></slot> -->
        <!-- </footer> -->
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="main">
            <slot name="main"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" scope>
.layout-container {
    height: 100%;
    width: 100%;
    display: flex;

    .left,
    .right {
        flex: 0 0 auto;
        overflow: hidden;
    }

    .main {
        flex: 1 1 auto;
        overflow: hidden;
    }
}
</style>
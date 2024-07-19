<script setup>
import { ref, onBeforeMount, onMounted, onUpdated, computed, defineComponent, watch, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import RightList from './RightList.vue';
const route = useRoute();
const router = useRouter();

const loading = ref(false)
const activeAnchor = ref('')

const props = defineProps({
    toc: { type: Array, required: true, },
    scrollTop: { type: Number },
})

watch(() => props.scrollTop, (newValue, oldValue) => {
    console.log('Scroll position updated:', props.scrollTop);
    setSelect();
})

function handleSelect(item) {
    // 设置activaAnchor为正确的值
    activeAnchor.value = item.anchor
    router.push({
        hash: '#' + item.anchor,
    });
}
function setSelect() {
    activeAnchor.value = ''
    const range = 200;
    for (const dom of doms.value) {
        if (!dom) {
            continue;
        }
        const top = dom.getBoundingClientRect().top
        if (top >= 0 && top <= range) {
            activeAnchor.value = dom.id;
            return;
        } else if (top > range) {
            return;
        } else {
            activeAnchor.value = dom.id;
            return;
        }
    }
}

const tocWithSelect = computed(() => {
    const getToc = ((toc = []) => {
        return toc.map(t => ({
            ...t,
            isSelected: t.anchor === activeAnchor.value,
            children: getToc(t.children)
        }))
    });
    return getToc(props.toc);
})

const doms = computed(() => {
    const doms = [];
    const addToDoms = (toc_) => {
        for (const t of toc_) {
            doms.push(document.getElementById(t.anchor))
            if (t.children && t.children.length) {
                addToDoms(t.children)
            }
        }
    };
    addToDoms(tocWithSelect.value);
    return doms;
})

</script>

<template>
    <div class="BlogToc-container">
        <RightList :listData="tocWithSelect" @selected="handleSelect" />
    </div>
</template>

<style lang="less" scoped>
@import "@/styles/mixin.less";
@import "@/styles//var.less";

.container {
    width: 100%;
    height: 100%;
    // background-color: rgb(215, 233, 250);
    // padding: 20px;

    // h2 {
    //     font-weight: bold;
    //     letter-spacing: 2px;
    //     font-size: 1em;
    // }
}
</style>
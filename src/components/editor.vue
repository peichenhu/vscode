<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import useMonaco from '../use/useMonaco';
const props = defineProps(['workspace'])
const { workspace } = props

onMounted(() => {
    nextTick(() => {
        const container = document.getElementById('container')
        if (container && workspace) {
            workspace.editor = useMonaco(container)
        }
    })
})
</script>

<template>
    <div id="container"></div>
</template>

<style scoped lang="less">
#container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>
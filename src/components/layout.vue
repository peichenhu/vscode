<script setup lang="ts">
// import { useStorage } from '@vueuse/core';
// const isRight = useStorage('_isRight', false)
// console.info('isRight', isRight)
</script>


<template>
    <div class="row">
        <div class="col file">
            <slot name="file"></slot>
        </div>
        <div class="col editor">
            <slot name="editor"></slot>
        </div>
        <div class="col console">
            <slot name="console"></slot>
        </div>
    </div>
</template>

<style scoped lang="less">
.row {
    position: relative;
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    flex-flow: row nowrap;
    place-items: center;
    gap: 2px;

    .col {
        height: 100%;
        flex: 1 1 auto;
        position: relative;
    }

    .col.file {
        flex: 0 0 auto;
        background: lightblue;
        width: 200px;
    }

    .col.editor {
        flex: 8 1 auto;
        background: lightcoral;
    }

    .col.console {
        width: 300px;
        flex: 0 0 auto;
        background: lightgreen;
    }
}
</style>
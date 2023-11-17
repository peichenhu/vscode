<script setup lang="ts">
import { Console, DataAPI } from "vue-console-feed";
import useConsole from '../use/useConsole.ts'
import "vue-console-feed/style.css"


const consoleFeed = new DataAPI(false, 0) // if you use API set option to true, argument 2 offset deep location

const { workspace } = defineProps(['workspace'])
const task = useConsole();

// window.addEventListener('keydown', function (e) {
//     const { key = '', ctrlKey = false } = e
//     if (key.toLocaleUpperCase() === 'S' && ctrlKey) {
//         runJsFile()
//     }
// })


function runJsFile(): void {
    const { editor } = workspace || {}
    if (!editor) return;
    const jsFile = editor.getValue()

    consoleFeed.clear()
    try {
        task.dataList = [];
        task.isRun = true;
        new Function(`return (()=>{${jsFile}})()`)();
        setTimeout(() => {
            const msgList = task.dataList.flat()
            msgList.forEach(data => {
                consoleFeed.log(data)
            })
            task.dataList = [];
            task.isRun = false;
        }, 200)
    } catch (error) {
        console.error(error)
        consoleFeed.error(error)
    }
}
</script>
<template>
    <div class="my-console">
        <div class="console-title">
            <span>日志终端 (仅支持 consol.log)</span>
            <span class="run" @click="runJsFile">run</span>
        </div>
        <Console :data="consoleFeed.value" class="console-container" />
    </div>
</template>
<style lang="less" scoped>
.my-console {
    height: 100%;
    background: black;
    overflow: hidden;

    .run {
        float: left;
        background: #999;
        box-sizing: border-box;
        padding: 0 10px;
        letter-spacing: 1px;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
        color: rgb(3, 114, 108);

        &:hover {
            background: rgb(3, 114, 108);
            color: white;
        }

        &:active {
            background: rgb(31, 179, 171);
            color: white;
        }
    }

    .console-title {
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        color: white;
        border-bottom: 1px solid gray;
        text-align: center;
        // padding: 0 1em;
    }

    .console-container {
        height: calc(100% - 30px);
        overflow: auto;
    }
}
</style>
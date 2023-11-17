<script setup lang="ts">
import { onMounted } from 'vue';
import useGithubFileList from '../use/useGithubFileList';

const fileList = useGithubFileList()
const { workspace } = defineProps(['workspace']);

onMounted(() => {
    const parms = new URLSearchParams(location.search);
    const url = parms.get('url');
    url && setValue(url);
})

async function setValue(url: string) {
    const response = await fetch(url);
    const text = await response.text();
    if (text && workspace.editor) {
        workspace.editor.setValue(text);
        pushState(url)
    }
}

function pushState(url: string) {
    if (location.href !== url) {
        const parms = new URLSearchParams();
        parms.append('url', url)
        const new_url = [location.origin, parms.toString()].join('?')
        // 在不刷新页面的情况下，改变地址栏中的URL
        const state = { page: "RunJS" };
        const title = "RunJS";
        // 实例一：使用 pushState 方法
        // window.history.pushState(state, title, new_url);
        // 实例二：使用 replaceState 方法
        window.history.replaceState(state, title, new_url);

    }
}

</script>
<template>
    <div class="file-list">
        <template v-for="file in fileList">
            <div class="file" @click="setValue(file.url)">{{ file.name }}</div>
        </template>
    </div>
</template>


<style lang="less" scoped>
.file-list {
    display: flex;
    flex-flow: column nowrap;
    overflow: auto;
    height: 100%;
    gap: 5px;

    .file {
        height: 30px;
        line-height: 30px;
        padding: 0 1em;
        font-size: 12px;
        background: rgb(31, 179, 171);
        cursor: pointer;

        &:hover {
            background: rgb(25, 152, 145);
        }

        &:visited {
            background: rgb(3, 114, 108);
        }

    }
}
</style>
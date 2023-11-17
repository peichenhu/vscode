<script setup lang="ts">
import Layout from './components/layout.vue';
import Editor from './components/editor.vue';
import Console from './components/console.vue';
import FileList from './components/fileList.vue';
const workspace: { editor: any } = { editor: null };

</script>

<template>
  <div class="header">
    <div class="name">一个在线 JS 编辑运行环境</div>
  </div>
  <Layout>
    <template v-slot:file>
      <FileList :workspace="workspace"></FileList>
    </template>
    <template v-slot:editor>
      <Editor :workspace="workspace"></Editor>
    </template>
    <template v-slot:console>
      <Console :workspace="workspace" />
    </template>
  </Layout>
</template>

<style scoped lang="less">
.header {
  text-align: center;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid lightgray;

  .name {
    font-weight: 700;
    font-size: 36px;
    background: var(--main-color-fe-to-bg);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>

<script setup lang="ts">
  import { getCurrentInstance, onMounted, ref } from "@vue/runtime-core";
  import MarkdownItStrikethroughAlt from "markdown-it-strikethrough-alt";
  import Markdown from "vue3-markdown-it";
  import "highlight.js/styles/arta.css";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const axios = globalProperties?.axios;
  const props = defineProps({
    isModify: Boolean,
  });
  const markdown = ref("");
  const changeMarkdown = (e: { [key: string]: any }) => {
    markdown.value = e.target.value;
  };
  axios
    .get(
      "https://raw.githubusercontent.com/erasabi/trekthroughs/master/pen_testing/RickdiculouslyEasy.md"
    )
    .then((result: { [data: string]: string }) => {
      markdown.value = result.data;
    });
</script>
<template>
  <div class="md-editor-container">
    <textarea
      v-if="isModify"
      class="source"
      :value="markdown"
      @input="changeMarkdown"
    ></textarea>
    <Markdown
      class="markdown-wrapper"
      :html="true"
      :source="markdown"
      :plugins="[
        {
          plugin: MarkdownItStrikethroughAlt,
        },
      ]"
    />
  </div>
</template>
<style lang="scss">
  .md-editor-container {
    background: #ecf5ff;
    margin-top: 30px;
    display: flex;
    gap: 20px;
    overflow-y: auto;
    height: 700px;
    .source {
      color: white;
      background: black;
      border: 0;
      padding: 10px;
      width: 100%;
      resize: none;
    }
    .markdown-wrapper {
      width: 100%;
      height: 700px;
      overflow-y: auto;
      .markdown-body {
        width: 100%;
        blockquote {
          padding: 0 1em;
          color: #6a737d;
          border-left: 0.25em solid #dfe2e5;
        }
        a {
          color: #0366d6;
          text-decoration: none;
        }
        li {
          list-style: unset;
        }
        h2 {
          font-size: 1.5em;
        }
        hr {
          height: 0.25em;
          padding: 0;
          margin: 24px 0;
          background-color: #e1e4e8;
          border: 0;
        }
      }
    }
  }
</style>

<script setup lang="tsx">
  import { onMounted, ref, getCurrentInstance } from "@vue/runtime-core";
  import { defineComponent } from "vue";
  import List from "./List.vue";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;

  onMounted(() => {
    console.log("onmounted");
  });
</script>

<template>
  <main>
    <dl>
      <List />
      <List />
      <List />
      <List />
    </dl>
  </main>
</template>
<style scoped lang="scss">
  dl {
    :deep .row {
      &:not(:first-child) {
        margin-top: 40px;
      }
      dt {
        cursor: pointer;
        padding-right: 78px;
        padding-left: 52px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        letter-spacing: -0.6px;
        font-size: 24px;
        color: #e3e5e8;
        background: url("@/assets/images/question_ico.svg") no-repeat center
            left / 28px 28px,
          url("@/assets/images/list_arrow_top.svg") no-repeat center right /
            32px 32px;
      }
      dt.inActive {
        background: url("@/assets/images/question_ico.svg") no-repeat center
            left / 28px 28px,
          url("@/assets/images/list_arrow_bottom.svg") no-repeat center right /
            32px 32px;
      }
      dd {
        padding-left: 52px;
        line-height: 26px;
        letter-spacing: -0.4px;
        color: #525660;
        margin-top: 20px;
        padding-bottom: 40px;
        border-bottom: 1px solid #2f3137;
        background: url("@/assets/images/answer_ico.svg") no-repeat top left /
          28px 28px;
      }
    }
  }
</style>

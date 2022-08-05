<script setup lang="ts">
  import { onMounted } from "@vue/runtime-core";
  import { faBars } from "@fortawesome/free-solid-svg-icons";

  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <header>
    <mq-responsive target="tablet-">
      <svg-icon :fa-icon="faBars" class="menu-ico"></svg-icon>
    </mq-responsive>
    <img src="@/assets/images/logo.svg" class="logo" alt="logo" title="logo" />
    <router-link to="/dashboard" class="dashboard-link">대시보드</router-link>
    <router-link to="/questions" class="faq-link">문의하기</router-link>
  </header>
</template>
<style scoped lang="scss">
  header {
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 21;
    height: 80px;
    background-color: #1a1b1e;
    .dashboard-link,
    .faq-link {
      vertical-align: -3px;
      color: #b8bfc4;
      margin-right: 40px;
    }
    .router-link-active {
      color: #7091ff;
    }
    .menu-ico {
      color: #ccc;
      vertical-align: middle;
      position: absolute;
      top: 0;
      right: 32px;
      bottom: 0;
      margin: auto;
    }
  }
</style>

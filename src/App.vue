<script setup lang="ts">
  import { onMounted, getCurrentInstance } from "@vue/runtime-core";
  import Header from "@/components/layout/header/TheHeader.vue";
  import Footer from "@/components/layout/footer/TheFooter.vue";
  import Navigation from "@/components/layout/navigation/TheNavigation.vue";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const indexedDB = globalProperties?.$indexedDB();
  onMounted(() => {
    indexedDB.createDatabase();
  });
</script>

<template>
  <Header />
  <Navigation />
  <router-view />
  <Footer />
</template>

<style lang="scss">
  main {
    vertical-align: top;
    display: inline-block;
    width: calc(100% - 300px);
    padding: 52px;
    box-sizing: border-box;
  }
</style>

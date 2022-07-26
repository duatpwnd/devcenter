<script setup lang="ts">
  import {
    onMounted,
    getCurrentInstance,
    computed,
    watch,
  } from "@vue/runtime-core";
  import Header from "@/components/layout/header/TheHeader.vue";
  import Footer from "@/components/layout/footer/TheFooter.vue";
  import Navigation from "@/components/layout/navigation/TheNavigation.vue";
  import { useRoute } from "vue-router";
  const routeName = computed(() => {
    return useRoute().name;
  });
  const signInPathStyle = {
    marginLeft: 0,
    width: "100%",
  };
  const otherPathStyle = {
    marginLeft: "300px",
    width: "calc(100% -  300px)",
  };
</script>

<template>
  <Header />
  <Navigation v-if="routeName != 'signIn'" />
  <router-view
    :style="routeName == 'signIn' ? signInPathStyle : otherPathStyle"
  />
  <Footer />
</template>

<style lang="scss">
  main {
    position: relative;
    background: #1a1b1e;
    vertical-align: top;
    display: inline-block;
    margin-left: 300px;
    width: calc(100% - 300px);
    padding: 52px;
    box-sizing: border-box;
  }
</style>

<script setup lang="ts">
  import { computed } from "@vue/runtime-core";
  import Header from "@/components/layout/header/TheHeader.vue";
  import Footer from "@/components/layout/footer/TheFooter.vue";
  import Navigation from "@/components/layout/navigation/TheNavigation.vue";
  import { useRoute } from "vue-router";
  import { useMq } from "vue3-mq";
  const mq = useMq();
  const routeName = computed(() => {
    return useRoute().name;
  });
</script>

<template>
  <Header />
  <!--
      phone	0
      tablet	768
      laptop	1370
      desktop	1906
  -->
  <mq-responsive target="laptop+">
    <Navigation v-if="routeName != 'signIn'" />
  </mq-responsive>
  <router-view :class="[mq.current, routeName]" />
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
  main.tablet,
  main.phone,
  main.signIn {
    margin-left: 0;
    width: 100%;
  }
</style>

<script setup lang="ts">
  import { ref, computed, getCurrentInstance, watch } from "@vue/runtime-core";
  import { useRoute } from "vue-router";
  import { faBars } from "@fortawesome/free-solid-svg-icons";
  import Navigation from "@/components/layout/navigation/TheNavigation.vue";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const routeName = computed(() => {
    return useRoute().name;
  });
  const breakPoint = ref("laptop+");
  const activeNavigation = () => {
    if (breakPoint.value == "laptop+") {
      breakPoint.value = "";
    } else {
      breakPoint.value = "laptop+";
    }
  };
</script>
<template>
  <header>
    <mq-responsive target="tablet-">
      <svg-icon
        :fa-icon="faBars"
        class="menu-ico"
        @click="activeNavigation"
      ></svg-icon>
    </mq-responsive>
    <router-link to="/intro">
      <img
        src="@/assets/images/logo.svg"
        class="logo"
        alt="logo"
        title="logo"
      />
    </router-link>
    <router-link to="/dashboard" class="dashboard-link">대시보드</router-link>
    <router-link to="/help" class="faq-link">문의하기</router-link>
  </header>
  <mq-responsive :target="breakPoint">
    <Navigation v-if="routeName != 'signIn' && routeName != 'help'" />
  </mq-responsive>
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

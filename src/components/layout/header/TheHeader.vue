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
  const isActiveUserMenu = ref(false);
  const activeMenu = ref(0);
  const breakPoint = ref("laptop+");
  const closeMenu = (index: number) => {
    isActiveUserMenu.value = false;
    activeMenu.value = index;
  };
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
    <mq-responsive target="tablet-" tag="span">
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
    <div class="right-menu">
      <router-link to="/dashboard" class="dashboard-link">대시보드</router-link>
      <router-link to="/help/faq" class="faq-link">문의하기</router-link>
      <div class="user-wrap">
        <span class="user-id" @click="isActiveUserMenu = !isActiveUserMenu"
          >snaptag.co.kr</span
        >
        <ul class="user-menu" v-show="isActiveUserMenu">
          <li :class="{ active: activeMenu == 0 }" @click="closeMenu(0)">
            내정보
          </li>
          <li :class="{ active: activeMenu == 1 }" @click="closeMenu(1)">
            로그아웃
          </li>
        </ul>
      </div>
    </div>
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
    z-index: 1;
    height: 80px;
    border-bottom: 1px solid #2f3137;
    background-color: #1a1b1e;
    .right-menu {
      position: absolute;
      height: 21px;
      top: 0;
      right: 32px;
      bottom: 0;
      margin: auto;
      .user-wrap {
        display: inline-block;
        position: relative;
        .user-id {
          display: inline-block;
          padding-right: 20px;
          background: url("@/assets/images/selectbox_arrow_bottom.svg")
            no-repeat center right / 12px 12px;
          color: #757b8a;
        }
        .user-menu {
          position: absolute;
          top: 36px;
          right: 0;
          width: 140px;
          padding: 8px 16px;
          box-sizing: border-box;
          color: #525660;
          background: #1a1b1e;
          border: 1px solid #2f3137;
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.08);
          border-radius: 4px;
          li {
            padding: 11px 0;
          }
          li.active {
            color: #b7bac2;
          }
        }
      }
      .dashboard-link,
      .faq-link {
        color: #969ba6;
        margin-right: 40px;
      }
      // .router-link-active {
      //   color: #7091ff;
      // }
    }
    .menu-ico {
      color: #ccc;
      vertical-align: middle;
      margin-left: 32px;
    }
  }
</style>

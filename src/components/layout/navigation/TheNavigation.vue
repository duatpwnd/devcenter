<script setup lang="ts">
  import { onMounted, getCurrentInstance, ref } from "@vue/runtime-core";
  const defaultActiveNav = ref("sdk");
  const isLabcodeShow = ref(false);
  const isSdkShow = ref(true);
  const isfaqShow = ref(false);
  const activeStyle = {
    backgroundColor: "#3D6AFF",
    color: "#F6F7F8",
  };
</script>
<template>
  <nav>
    <ul class="main-menu">
      <li>
        <strong
          @click="
            isLabcodeShow = !isLabcodeShow;
            defaultActiveNav = 'intro';
          "
          :class="isLabcodeShow ? 'active' : 'inactive'"
          :style="defaultActiveNav == 'intro' ? activeStyle : ''"
          >랩코드 소개</strong
        >
        <slide-up-down v-model="isLabcodeShow" :duration="300">
          <ul class="sub-menu">
            <li>
              <router-link to="/intro">랩코드란?</router-link>
            </li>
          </ul>
        </slide-up-down>
      </li>
      <li>
        <strong
          @click="
            isSdkShow = !isSdkShow;
            defaultActiveNav = 'sdk';
          "
          :class="isSdkShow ? 'active' : 'inactive'"
          :style="defaultActiveNav == 'sdk' ? activeStyle : ''"
          >SDK 다운로드</strong
        >
        <slide-up-down v-model="isSdkShow" :duration="300">
          <ul class="sub-menu">
            <li>
              <router-link to="/docs"> 버전별 다운로드 </router-link>
            </li>
            <li>
              <router-link to="/topics"> 단계별 가이드 </router-link>
            </li>
          </ul>
        </slide-up-down>
      </li>
      <li>
        <strong
          @click="
            isfaqShow = !isfaqShow;
            defaultActiveNav = 'faq';
          "
          :class="isfaqShow ? 'active' : 'inactive'"
          :style="defaultActiveNav == 'faq' ? activeStyle : ''"
          >FAQ</strong
        >
        <slide-up-down v-model="isfaqShow" :duration="300">
          <ul class="sub-menu">
            <li><router-link to="/questions"> 문의하기</router-link></li>
          </ul>
        </slide-up-down>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
  nav {
    height: calc(100vh - 80px);
    background-color: #1a1b1e;
    display: inline-block;
    width: 300px;
    box-sizing: border-box;
    padding: 32px 16px;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 1;
    .main-menu {
      color: #b8bfc4;
      li {
        .active {
          background: url("@/assets/images/active_arrow_top.svg") no-repeat
            center right 16px / 16px 16px;
        }
        .inactive {
          background: url("@/assets/images/inactive_arrow_bottom.svg") no-repeat
            center right 16px / 16px 16px;
        }
        strong {
          border-radius: 8px;
          width: 100%;
          padding: 12px 16px;
          box-sizing: border-box;
          display: block;
        }
        a {
          color: #b8bfc4;
          width: 100%;
          padding: 9px 0 9px 44px;
          box-sizing: border-box;
        }
        .slide-up-down__container {
          font-size: 14px;
          a {
            color: #525660;
          }
          .router-link-active {
            color: #e3e5e8;
          }
        }
      }
    }
  }
</style>

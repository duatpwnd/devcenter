<script setup lang="ts">
  import { onMounted, ref, getCurrentInstance } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <aside>
    <strong class="guide1">궁금한점이<br />있으신가요?</strong>
    <p class="guide3">자세한 내용은 아래 FAQ를 참고해주세요.</p>
    <strong class="guide2">
      좋은 아이디어/어려운 점<br />있다면 저희에게<br />알려주세요.
    </strong>
    <router-link to="" class="write-link">의견 쓰기</router-link>
  </aside>
  <div class="lnb-menu">
    <router-link to="/help/faq">FAQ</router-link>
    <router-link class="history-link" to="/help/contactHistory"
      >문의 히스토리</router-link
    >
    <router-link to="/help/myInquires">내 문의</router-link>
  </div>
  <router-view />
</template>
<style scoped lang="scss">
  aside {
    width: 450px;
    background-color: #1a1b1e;
    display: inline-block;
    box-sizing: border-box;
    padding: 80px 80px 0 80px;
    height: 100%;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 2;
    strong {
      display: block;
      font-size: 28px;
      letter-spacing: -0.7px;
      color: #757b8a;
    }
    .guide1 {
      font-size: 36px;
      letter-spacing: -0.9px;
      color: #e3e5e8;
      line-height: 56px;
    }
    .guide2 {
      line-height: 44px;
    }
    .guide3 {
      margin-top: 16px;
      margin-bottom: 52px;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.35px;
      color: #525660;
    }
    .write-link {
      margin-top: 24px;
      background: #3d6aff;
      border-radius: 8px;
      padding: 14px 0;
      text-align: center;
      letter-spacing: -0.4px;
      color: #ffffff;
      width: 100%;
    }
  }
  .lnb-menu {
    margin-left: 450px;
    a {
      background: #2f3137;
      border-radius: 40px;
      color: #757b8a;
      padding: 0px 24px;
      height: 44px;
      box-sizing: border-box;
      line-height: 44px;
    }
    .history-link {
      margin: 0 16px;
    }
    .router-link-active {
      color: #ffffff;
      background: #3d6aff;
    }
  }
</style>

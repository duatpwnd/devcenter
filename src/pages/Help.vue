<script setup lang="ts">
  import {
    onMounted,
    ref,
    getCurrentInstance,
    KeepAlive,
  } from "@vue/runtime-core";
  import Faq from "@/components/help/Faq.vue";
  import ContactHistory from "@/components/help/ContactHistory.vue";
  import MyInquires from "@/components/help/MyInquires.vue";
  const activeTab = ref(0);
  const currentComp = ref(Faq);
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
  <div class="contents">
    <div class="lnb-menu">
      <button
        :class="{ active: activeTab == 0 }"
        @click="
          currentComp = Faq;
          activeTab = 0;
        "
      >
        FAQ
      </button>
      <button
        :class="[{ active: activeTab == 1 }, 'history-link']"
        @click="
          currentComp = ContactHistory;
          activeTab = 1;
        "
      >
        문의 히스토리
      </button>
      <button
        :class="{ active: activeTab == 2 }"
        @click="
          currentComp = MyInquires;
          activeTab = 2;
        "
      >
        내 문의
      </button>
    </div>
    <keep-alive>
      <component :is="currentComp"></component>
    </keep-alive>
  </div>
</template>
<style scoped lang="scss">
  .contents {
    margin-left: 450px;
    padding: 187px 140px;
    width: calc(100% - 450px);
    box-sizing: border-box;
  }
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
    margin-bottom: 40px;
    button {
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
    button.active {
      color: #ffffff;
      background: #3d6aff;
    }
  }
</style>

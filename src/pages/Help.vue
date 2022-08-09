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
  import Inquire from "@/components/help/Inquire.vue";
  import { useMq } from "vue3-mq";
  const activeTab = ref(0);
  const currentComp = ref(Faq);
  const isActiveInquireModal = ref(false);
  const mq = useMq();
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const scrollRight = () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  };
</script>
<template>
  <Inquire
    v-if="isActiveInquireModal"
    @close-Inquire-modal="isActiveInquireModal = false"
  />
  <button @click="scrollRight" class="scroll-top-btn"></button>
  <mq-responsive target="laptop+">
    <aside>
      <strong class="guide1">궁금한점이<br />있으신가요?</strong>
      <p class="guide3">자세한 내용은 아래 FAQ를 참고해주세요.</p>
      <strong class="guide2">
        좋은 아이디어/어려운 점<br />있다면 저희에게<br />알려주세요.
      </strong>
      <router-link to="" class="write-link">의견 쓰기</router-link>
    </aside>
  </mq-responsive>
  <div :class="[mq.current, 'contents']">
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
          isActiveInquireModal = true;
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
  .scroll-top-btn {
    width: 48px;
    height: 48px;
    position: fixed;
    bottom: 32px;
    right: 32px;
    background: url("@/assets/images/scroll_top_ico.svg") no-repeat center
      center / 48px 48px;
    z-index: 1;
  }
  .contents {
    margin-left: 450px;
    padding: 187px 80px;
    width: calc(100% - 450px);
    box-sizing: border-box;
  }
  .contents.tablet,
  .contents.phone {
    padding: 187px 40px;
    margin-left: 0;
    width: 100%;
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

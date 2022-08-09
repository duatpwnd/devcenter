<script setup lang="ts">
  import {
    onMounted,
    ref,
    getCurrentInstance,
    defineProps,
  } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const isActive = ref(true);
  const ddRef = ref(null);
  const slideRef = ref(null);
  window.addEventListener("resize", () => {
    (slideRef.value as unknown as { [key: string]: any }).$el.style.height =
      (ddRef.value as unknown as HTMLElement).clientHeight + "px";
  });
  onMounted(() => {
    (slideRef.value as unknown as { [key: string]: any }).$el.style.height =
      (ddRef.value as unknown as HTMLElement).clientHeight + "px";
  });
</script>
<template>
  <div class="row">
    <dt @click="isActive = !isActive" :class="{ inActive: !isActive }">
      스냅태그 이모티콘에 어떻게 가입하나요
    </dt>
    <slide-up-down v-model="isActive" :duration="300" ref="slideRef">
      <dd ref="ddRef">
        가장 좋은 기능 중 하나는 그것을 사용하여 만든 디자인을 코드로 빠르게
        전송할 수 있다는 것입니다. 앱 개발자이거나 디자이너와 함께 작업하는 경우
        배울 수 있는 귀중한 기술입니다. 내장된 도구와 수많은 플러그인의 도움으로
        Figma를 사용하면 디자인을 다양한 플랫폼으로 내보낼 수 있습니다. Contents
        Windows PC의 Figma에서 코드를 내보내는 방법피그 개발자이거나 디자이너와
        함께 작업하는 경우 배울 수 있는 귀중한 기술입니다. 내장된 도구와 수많은
        플러그인의 도움으로 Figma를 사용하면 디자인을 다양한 플랫폼으로 내보낼
        수 있습니다. Contents Windows PC의 Figma에서 코드를 내보내는 방법피그
      </dd>
    </slide-up-down>
  </div>
</template>
<style scoped lang="scss"></style>

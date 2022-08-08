<script setup lang="tsx">
  import { onMounted, ref, getCurrentInstance } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <main>
    <dl>
      <div class="row">
        <dt>스냅태그 이모티콘에 어떻게 가입하나요?</dt>
        <dd>
          가장 좋은 기능 중 하나는 그것을 사용하여 만든 디자인을 코드로 빠르게
          전송할 수 있다는 것입니다. 앱 개발자이거나 디자이너와 함께 작업하는
          경우 배울 수 있는 귀중한 기술입니다. 내장된 도구와 수많은 플러그인의
          도움으로 Figma를 사용하면 디자인을 다양한 플랫폼으로 내보낼 수
          있습니다. Contents Windows PC의 Figma에서 코드를 내보내는 방법피그
          개발자이거나 디자이너와 함께 작업하는 경우 배울 수 있는 귀중한
          기술입니다. 내장된 도구와 수많은 플러그인의 도움으로 Figma를 사용하면
          디자인을 다양한 플랫폼으로 내보낼 수 있습니다. Contents Windows PC의
          Figma에서 코드를 내보내는 방법피그
        </dd>
      </div>
      <div class="row">
        <dt>계정 및 비밀번호를 분실했어요.</dt>
        <dd>
          가장 좋은 기능 중 하나는 그것을 사용하여 만든 디자인을 코드로 빠르게
          전송할 수 있다는 것입니다. 앱 개발자이거나 디자이너와 함께 작업하는
          경우 배울 수 있는 귀중한 기술입니다. 내장된 도구와 수많은 플러그인의
          도움으로 Figma를 사용하면 디자인을 다양한 플랫폼으로 내보낼 수
          있습니다. Contents Windows PC의 Figma에서 코드를 내보내는 방법피그
          개발자이거나 디자이너와 함께 작업하는 경우 배울 수 있는 귀중한
          기술입니다. 내장된 도구와 수많은 플러그인의 도움으로 Figma를 사용하면
          디자인을 다양한 플랫폼으로 내보낼 수 있습니다. Contents Windows PC의
          Figma에서 코드를 내보내는 방법피그
        </dd>
      </div>
      <div class="row">
        <dt>스냅태그 데브 센터 가입 시 계정 정보는 어떻게 입력하나요?</dt>
        <dd>
          가장 좋은 기능 중 하나는 그것을 사용하여 만든 디자인을 코드로 빠르게
          전송할 수 있다는 것입니다. 앱 개발자이거나 디자이너와 함께 작업하는
          경우 배울 수 있는 귀중한 기술입니다. 내장된 도구와 수많은 플러그인의
          도움으로 Figma를 사용하면 디자인을 다양한 플랫폼으로 내보낼 수
          있습니다. Contents Windows PC의 Figma에서 코드를 내보내는 방법피그
          개발자이거나 디자이너와 함께 작업하는 경우 배울 수 있는 귀중한
          기술입니다. 내장된 도구와 수많은 플러그인의 도움으로 Figma를 사용하면
          디자인을 다양한 플랫폼으로 내보낼 수 있습니다. Contents Windows PC의
          Figma에서 코드를 내보내는 방법피그
        </dd>
      </div>
      <div class="row">
        <dt>FQA 타이틀 텍스트가 OVER 될 시 이렇게 가나다라 보여집니다.</dt>
        <dd>
          가장 좋은 기능 중 하나는 그것을 사용하여 만든 디자인을 코드로 빠르게
          전송할 수 있다는 것입니다. 앱 개발자이거나 디자이너와 함께 작업하는
          경우 배울 수 있는 귀중한 기술입니다. 내장된 도구와 수많은 플러그인의
          도움으로 Figma를 사용하면 디자인을 다양한 플랫폼으로 내보낼 수
          있습니다. Contents Windows PC의 Figma에서 코드를 내보내는 방법피그
          개발자이거나 디자이너와 함께 작업하는 경우 배울 수 있는 귀중한
          기술입니다. 내장된 도구와 수많은 플러그인의 도움으로 Figma를 사용하면
          디자인을 다양한 플랫폼으로 내보낼 수 있습니다. Contents Windows PC의
          Figma에서 코드를 내보내는 방법피그
        </dd>
      </div>
    </dl>
  </main>
</template>
<style scoped lang="scss">
  dl {
    .row {
      &:not(:first-child) {
        margin-top: 40px;
      }
      dt {
        padding-right: 78px;
        padding-left: 52px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        letter-spacing: -0.6px;
        font-size: 24px;
        color: #e3e5e8;
        background: url("@/assets/images/question_ico.svg") no-repeat center
            left / 28px 28px,
          url("@/assets/images/list_arrow_top.svg") no-repeat center right /
            32px 32px;
      }
      dd {
        padding-left: 52px;
        line-height: 26px;
        letter-spacing: -0.4px;
        color: #525660;
        margin-top: 20px;
        padding-bottom: 40px;
        border-bottom: 1px solid #2f3137;
        background: url("@/assets/images/answer_ico.svg") no-repeat top left /
          28px 28px;
      }
    }
  }
</style>

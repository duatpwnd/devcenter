<script setup lang="ts">
  import { onMounted } from "@vue/runtime-core";
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <main>
    <div class="comment-list">
      <div class="header">
        <span class="user-id">User</span>
        <span class="time">3시간</span>
      </div>
      <p class="contents">
        카카오 로그인/싱크 api 이용하여 간편가입을 작업하는 중인데, 카카오
        로그인시 json을 통하여 동의한 항목 이름/휴대폰번호/CI/EMAIL등이
        넘어오는건 확인했는데, 내국인 외국인 여부는 넘어오지않고, 어플리케이션의
        동의항목에도 내국인 외국인 여부를 체크하는 부분이 따로 없는거 같습니다.
        회원의 내국인 외국인 여부를 제공하지 않나요? 제공한다면 해당 부분의
        데이터를 가져오기 위해서는 어떻게 해야하는지 문의드립니다.
      </p>
    </div>
    <div class="refer-list">
      <div class="header">
        <span class="user-id">Admin</span>
        <span class="time">2시간</span>
      </div>
      <p class="contents">
        안녕하세요.<br />정확한 안내를 위해 앱 ID 부탁드립니다.
      </p>
    </div>
  </main>
</template>
<style scoped lang="scss">
  .comment-list,
  .refer-list {
    padding: 20px;
    border-bottom: 1px solid #ccc;
    .header {
      position: relative;
      .user-id {
        padding-left: 38px;
        font-weight: 700;
        font-size: 18px;
        display: inline-block;
        height: 45px;
        line-height: 45px;
        background: url("https://devtalk.kakao.com/user_avatar/devtalk.kakao.com/tim.l/45/14646_2.png")
          no-repeat center left -8px / 45px 45px;
      }
      .time {
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        height: 21px;
        color: #898585;
      }
    }
    .contents {
      margin-top: 15px;
      line-height: 40px;
    }
  }
</style>

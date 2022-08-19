<script setup lang="ts">
  import {
    onMounted,
    onActivated,
    ref,
    defineEmits,
    getCurrentInstance,
    defineProps,
  } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const emit = defineEmits(["update:reportModal", "remove:comment"]);
</script>
<template>
  <div class="comment">
    <header>
      <div>
        <span class="last-name">김</span>
        <span class="full-name">김스냅</span>
        <span class="date">2022.07.24 12:24</span>
        <button class="report-btn" @click="emit('update:reportModal')">
          신고
        </button>
      </div>
      <div>
        <button class="edit-btn"></button>
        <button class="remove-btn" @click="emit('remove:comment')"></button>
      </div>
    </header>
    <div class="contents">
      카카오톡 공유 api 를 사용하여 메세지를 전달하려고합니다. 홈페이지 script
      부분에 있는 변수를 카톡으로 보내려고하는데 버튼을 눌러서 변수의 값을
      변화시켜놔도 초기 변수 값으로만 전송이되네요.어떻게 해야 변화된 최종값으로
      전송될까요? 예를 들어 count=0 이라는 변수를 정하고 버튼을 만들어
      count=10으로 바꿨을때 아래 코드를 사용하면 10이 전달됐으면 합니다. 지금
      상태에서는 0이 전달됩니다.
    </div>
    <button class="reply-btn">답글</button>
  </div>
</template>
<style scoped lang="scss">
  .comment {
    margin-top: 20px;
    .contents {
      color: #757b8a;
      font-size: 14px;
      line-height: 22px;
      margin-top: 6px;
      margin-left: 44px;
    }
    .reply-btn {
      color: #e3e5e8;
      font-size: 12px;
      border: 1px solid #34363c;
      border-radius: 2px;
      background: transparent;
      padding: 6px 15.5px;
      margin-left: 44px;
      margin-top: 12px;
    }
    header {
      display: flex;
      justify-content: space-between;
      .report-btn {
        background: transparent;
        color: #525660;
        font-size: 12px;
        &::before {
          content: "·";
          font-size: 20px;
          margin-right: 8px;
          vertical-align: -2px;
        }
      }
      .full-name,
      .last-name {
        color: #e3e5e8;
        font-size: 14px;
      }
      .full-name {
        margin: 0 12px;
      }
      .last-name {
        background: #476deb;
        width: 32px;
        height: 32px;
        text-align: center;
        border-radius: 50px;
        line-height: 32px;
      }
      .edit-btn {
        width: 32px;
        height: 32px;
        background: url("@/assets/images/01-edit.svg") no-repeat center center /
          32px 32px;
        vertical-align: middle;
        margin-right: 10px;
      }
      .remove-btn {
        width: 32px;
        height: 32px;
        background: url("@/assets/images/02-delete.svg") no-repeat center center /
          32px 32px;
        vertical-align: middle;
      }
      .date {
        color: #525660;
        font-family: "Poppins";
        font-size: 12px;
        align-self: center;
        margin-right: 8px;
      }
    }
  }
</style>

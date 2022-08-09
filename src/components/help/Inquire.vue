<script setup lang="ts">
  import {
    onMounted,
    ref,
    defineEmits,
    getCurrentInstance,
    reactive,
  } from "@vue/runtime-core";
  import BaseSelectBox from "../common/BaseSelectBox.vue";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const emit = defineEmits(["close-Inquire-modal"]);
  const formatSizeUnits = globalProperties?.$formatSizeUnits;
  const fileInfo = ref<{ [key: string]: any } | null>(null);
  const attach = (e: { [key: string]: any }) => {
    const fileObj = e.target.files[0];
    fileInfo.value = {
      name: fileObj.name,
      size: formatSizeUnits(fileObj.size),
    };
  };
</script>
<template>
  <div class="inquire-modal">
    <h1 class="h1-title">의견/문의</h1>
    <div class="message-wrap">
      <p class="guide-message">
        좋은 아이디어 또는 궁금한점이 있다면 저희에게 알려주세요.
      </p>
      <p class="guide-message">
        이곳은 공개된 공간입니다.
        <span class="unique">비속어/ 개인정보/ 앱 키 등의 민감한 내용</span>이
        포함되지 않도록 신경써주세요.
      </p>
    </div>
    <h2 class="h2-title">의견 작성</h2>
    <div class="row">
      <label class="dt">제목</label>
      <input type="text" placeholder="제목 입력(50자 이내)" />
    </div>
    <BaseSelectBox
      :options="[{ name: 'Android(SDK)' }]"
      :style="{
        button: {
          background: '#3F424A',
        },
      }"
    />
    <div class="row">
      <label class="dt">내용</label>
      <textarea placeholder="내용 입력"></textarea>
    </div>
    <div class="row">
      <label class="dt">이미지 첨부</label>
      <label className="input-file" for="test" @change="attach">
        <span class="file-placeholder">이미지 첨부하기</span>
        <span className="number-file">2/<span class="total">5</span></span>
        <input
          type="file"
          id="test"
          class="file"
          accept="image/png, image/jpeg"
        />
      </label>
      <div class="attachments" v-if="fileInfo">
        <span class="file-name"> {{ fileInfo?.name }} </span>
        <span class="file-size"> {{ fileInfo?.size }} </span>
        <button class="delete-btn"></button>
      </div>
    </div>
    <div class="button-wrap">
      <button @click="emit('close-Inquire-modal')">취소</button>
      <button>새 의견 쓰기</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .inquire-modal {
    max-width: 920px;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2f3137;
    border-radius: 28px;
    padding: 60px 52px;
    z-index: 3;
    .h1-title {
      font-size: 36px;
      letter-spacing: -0.9px;
      color: #e3e5e8;
      border-radius: 2px;
    }
    .h2-title {
      padding-bottom: 8px;
      border-bottom: 1px solid #3f424a;

      letter-spacing: -0.6px;
      font-size: 24px;
      color: #e3e5e8;
    }
    .message-wrap {
      margin-top: 16px;
      margin-bottom: 40px;
      .guide-message {
        font-size: 14px;
        letter-spacing: -0.35px;
        line-height: 22px;
        color: #757b8a;
        .unique {
          color: #3d6aff;
        }
      }
    }
    .row {
      margin-top: 20px;
      .input-file {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: calc(100% - 156px);
        padding: 14px 20px;
        vertical-align: middle;
        color: #7091ff;
        border-radius: 8px;
        text-align: left;
        letter-spacing: -0.4px;
        background: url("@/assets/images/add_ico.svg") rgba(61, 106, 255, 0.12)
          no-repeat center right 20px / 20px 20px;
        .total {
          color: #757b8a;
        }
        .number-file {
          position: absolute;
          top: 0;
          right: 56px;
          bottom: 0;
          margin: auto;
          height: 18px;
          letter-spacing: 1px;
        }
      }
      .attachments {
        margin-top: 12px;
        box-sizing: border-box;
        width: calc(100% - 156px);
        padding: 14px 20px;
        position: relative;
        left: 156px;
        display: flex;
        justify-content: space-between;
        background: #34363c;
        border-radius: 8px;
        .file-name {
          flex: 2 1 0;
          color: #969ba6;
        }
        .file-size {
          margin-right: 20px;
          color: #7091ff;
        }
        .delete-btn {
          width: 20px;
          height: 20px;
          vertical-align: middle;
          background: url("@/assets/images/delete_ico.svg") no-repeat center /
            20px 20px;
        }
      }
      .dt {
        font-size: 14px;
        letter-spacing: -0.35px;
        color: #969ba6;
        vertical-align: middle;
        width: 156px;
        display: inline-block;
      }
      textarea {
        width: calc(100% - 156px);
        height: 300px;
        padding: 20px;
        box-sizing: border-box;
        background: #3f424a;
        border-radius: 8px;
      }
    }
    .button-wrap {
      margin-top: 44px;
      text-align: right;
      button {
        font-size: 18px;
        text-align: center;
        letter-spacing: -0.45px;
        color: #969ba6;
        width: 220px;
        padding: 21px 0px;
        box-sizing: border-box;
        border: 1px solid #525660;
        border-radius: 8px;
        background-color: transparent;
        &:nth-child(2) {
          background: #525660;
          margin-left: 12px;
        }
      }
    }
  }
</style>

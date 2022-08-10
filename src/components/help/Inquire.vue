<script setup lang="ts">
  import {
    onMounted,
    ref,
    defineEmits,
    getCurrentInstance,
    reactive,
  } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const emit = defineEmits(["close-Inquire-modal"]);
  const isAgree = ref(true);
  const disclosure = ref(true);
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
    <div class="row">
      <label class="dt">의견상세</label>
      <BaseSelectBox
        :options="[{ name: 'Android(SDK)' }]"
        :style="{
          ul: {
            background: '#3f424a',
          },
          li: {
            background: '#464A53',
          },
          button: {
            background: '#3F424A',
          },
        }"
      />
    </div>
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
      <div class="progress-area">
        <progress id="file" max="100" value="20">70%</progress>
        <span class="size">{{ fileInfo?.size }}</span>
        <p class="msg">
          첨부 파일은 최대 5개/ 20MB까지 등록 가능합니다.<br />
          첨부 가능 확장자명 : JPG, PNG
        </p>
      </div>
    </div>
    <div class="row row-border row-flex">
      <div>
        <strong>회사명, 직급 공개 여부</strong>
        <p class="msg">
          내가 작성한 글에서 나의 회사, 직급 공개 여부를 설정합니다.
        </p>
      </div>
      <BaseSwitcherButton v-model="disclosure" fieldId="test" />
    </div>
    <div class="row row-border">
      <strong>개인정보 수집• 이용 안내 (필수)</strong>
      <p class="msg">
        의견주신 내용의 성실한 답변을 위해 작성자의 개인정보를 수집합니다.
        수집한 개인 정보는 확인/ 답변/ 처리를 위한 용도외에 사용하지 않습니다.
        수집하는 개인정보 항목 : 이름/ 회사명/ 직급/ 이메일.
      </p>
      <div class="agree-area">
        <label class="container-checkbox">
          <input type="checkbox" id="agree" :checked="isAgree" />
          <span class="checkmark"></span>
        </label>
        <label for="agree">네, 동의합니다.</label>
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
    height: 90%;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2f3137;
    border-radius: 28px;
    padding: 60px 52px;
    z-index: 3;
    overflow-y: auto;
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
      input[type="text"] {
        width: calc(100% - 156px);
        padding: 14px 20px;
        box-sizing: border-box;
        background: #3f424a;
        border-radius: 8px;
        color: #e3e5e8;
        &::placeholder {
          color: #757b8a;
        }
      }
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
      .progress-area {
        margin-top: 20px;
        width: calc(100% - 156px);
        position: relative;
        left: 156px;
        progress {
          width: calc(100% - 84px);
          height: 8px;
          vertical-align: middle;
        }
        progress::-webkit-progress-bar {
          background: #34363c;
          border-radius: 4px;
        }
        progress::-webkit-progress-value {
          background: #3d6aff;
          border-radius: 4px;
        }
        .size {
          width: 52px;
          margin-left: 32px;
          color: #7091ff;
        }
        .msg {
          margin-top: 16px;
          font-size: 13px;
          color: #757b8a;
          line-height: 20px;
        }
      }
      .select-box-wrap {
        display: inline-block;
        width: calc(100% - 156px);
      }
      .dt {
        font-size: 14px;
        letter-spacing: -0.35px;
        color: #969ba6;
        vertical-align: middle;
        width: 156px;
        display: inline-block;
        &:not(:last-child) {
          &:after {
            content: "필수";
            padding: 4px 6px;
            margin-left: 8px;
            background: rgba(188, 54, 35, 0.15);
            border-radius: 2px;
            letter-spacing: -0.3px;
            font-size: 10px;
            color: #bc3623;
            vertical-align: middle;
          }
        }
      }
      textarea {
        width: calc(100% - 156px);
        height: 300px;
        padding: 20px;
        box-sizing: border-box;
        background: #3f424a;
        color: #e3e5e8;
        border-radius: 8px;
        &::placeholder {
          color: #757b8a;
        }
      }
    }
    .row-border {
      margin-top: 32px;
      padding: 32px 0;
      border-top: 1px solid #3f424a;
      border-radius: 2px;
      .switch-btn {
        align-self: center;
      }
      strong {
        color: #e3e5e8;
      }
      .msg {
        margin-top: 12px;
        font-size: 14px;
        color: #757b8a;
      }
      .agree-area {
        margin-top: 16px;
        letter-spacing: -0.35px;
        color: #e3e5e8;
        font-size: 14px;

        .container-checkbox {
          margin-right: 8px;
          vertical-align: middle;
          input {
            display: none;
          }
          input[type="checkbox"] + .checkmark {
            width: 20px;
            height: 20px;
            display: inline-block;
            border-radius: 4px;
            background: url("@/assets/images/inactive_circle_check_ico.svg")
              no-repeat center / 20px 20px;
          }
          input[type="checkbox"]:checked + .checkmark {
            background: url("@/assets/images/active_circle_check_ico.svg")
              no-repeat center / 20px 20px;
          }
        }
      }
    }
    .row-flex {
      display: flex;
      justify-content: space-between;
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

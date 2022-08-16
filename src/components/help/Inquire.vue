<script setup lang="ts">
  import { file } from "@babel/types";
  import {
    computed,
    ref,
    defineEmits,
    getCurrentInstance,
    reactive,
  } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const emit = defineEmits(["close-Inquire-modal"]);
  const isAgree = ref(true);
  const companyDisclosureStatus = ref(false);
  const postDisclosureStatus = ref(true);
  const formatSizeUnits = globalProperties?.$formatSizeUnits;
  const fileInfo = ref<{ [key: string]: any }[]>([]);
  const isFileCountExceed = ref(false);
  const maxFileSize = 10000000000;
  const form = reactive({
    title: "",
    contents: "",
  });
  const imageTotalSize = computed(() => {
    const byte = fileInfo.value.reduce(
      (acc: number, curr: { [key: string]: any }) => {
        return acc + curr.size;
      },
      0
    );
    const formatSize = formatSizeUnits(byte);
    return { byte, formatSize };
  });
  const validCheck = computed(() => {
    return (
      form.title.trim().length > 0 &&
      form.contents.trim().length > 0 &&
      imageTotalSize.value.byte < maxFileSize
    );
  });
  const deleteFile = (index: number) => {
    fileInfo.value.splice(index, 1);
    isFileCountExceed.value = false;
  };
  const attach = (e: { [key: string]: any }) => {
    const fileObj = e.target.files[0];

    const getBlobUrl = URL.createObjectURL(fileObj);
    fileInfo.value.push({
      name: fileObj.name,
      size: fileObj.size,
      formatSize: formatSizeUnits(fileObj.size),
      url: getBlobUrl,
    });
    if (fileInfo.value.length > 5) {
      isFileCountExceed.value = true;
      fileInfo.value.pop();
    }
  };
</script>
<template>
  <div class="scroll-custom">
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
        <label class="dt required">제목</label>
        <input
          type="text"
          @input="(e:any)=>{form.title = e.target.value}"
          maxlength="50"
          placeholder="제목 입력(50자 이내)"
        />
      </div>
      <div class="row">
        <label class="dt required">의견상세</label>
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
        <label class="dt required">내용</label>
        <textarea
          @input="(e:any)=>{form.contents = e.target.value}"
          placeholder="내용 입력"
        ></textarea>
      </div>
      <div class="row">
        <label class="dt">이미지 첨부</label>
        <label className="input-file" for="test" @change="attach">
          <span class="file-placeholder">이미지 첨부하기</span>
          <span className="number-file"
            >{{ fileInfo.length }}/<span class="total">5</span></span
          >
          <input
            type="file"
            id="test"
            class="file"
            accept="image/png, image/jpeg"
          />
        </label>
        <div class="attachments" v-for="(list, index) in fileInfo" :key="index">
          <span class="file-name"> {{ list.name }} </span>
          <span class="file-size"> {{ list.formatSize }} </span>
          <button class="delete-btn" @click="deleteFile(index)"></button>
        </div>
        <div class="file-image-wrap" v-if="fileInfo.length > 0">
          <div
            class="file-image-list"
            v-for="(list, index) in fileInfo"
            :key="index"
          >
            <img :src="list.url" class="file-image" />
            <button class="delete-btn" @click="deleteFile(index)"></button>
          </div>
        </div>
        <div class="progress-area">
          <progress
            id="file"
            :max="maxFileSize"
            :value="imageTotalSize.byte"
          ></progress>
          <span class="size">{{ imageTotalSize.formatSize }}</span>
          <p v-if="imageTotalSize.byte > maxFileSize" class="alert-msg">
            첨부 파일은 최대 20MB까지 등록 가능합니다.
          </p>
          <p v-if="isFileCountExceed" class="alert-msg">
            첨부 파일은 최대 5까지 등록 가능합니다.
          </p>
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
        <BaseSwitcherButton v-model="companyDisclosureStatus" fieldId="test" />
      </div>
      <div class="row row-border row-flex">
        <div>
          <strong>글 공개 여부</strong>
          <p class="msg">
            내가 작성한 글을 모든 사람들에게 공개 / 비공개 설정합니다.
          </p>
        </div>
        <BaseSwitcherButton v-model="postDisclosureStatus" fieldId="test" />
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
        <button :class="{ active: validCheck }">새 의견 쓰기</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .scroll-custom {
    padding: 60px 52px;
    max-width: 920px;
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 28px;
    z-index: 3;
    background: #2f3137;
    .inquire-modal {
      overflow-y: auto;
      height: 100%;
      padding-right: 25px;
      &::-webkit-scrollbar {
        width: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgb(63, 66, 74);
        border-radius: 10px;
        background-clip: padding-box;
      }
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
          background: url("@/assets/images/add_ico.svg")
            rgba(61, 106, 255, 0.12) no-repeat center right 20px / 20px 20px;
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
        .file-image-wrap {
          margin-top: 20px;
          display: flex;
          justify-content: flex-start;
          column-gap: 12px;
          width: calc(100% - 156px);
          position: relative;
          left: 156px;

          .file-image-list {
            position: relative;
            .delete-btn {
              position: absolute;
              top: 6px;
              right: 6px;
              width: 20px;
              height: 20px;
              background: url("@/assets/images/file_delete_ico.svg") no-repeat
                center / 20px 20px;
            }
            .file-image {
              width: 92px;
              height: 92px;
              border-radius: 8px;
              object-fit: cover;
            }
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
            text-align: right;
            width: 84px;
            color: #7091ff;
          }
          .alert-msg {
            margin-top: 8px;
            color: #a24235;
            font-size: 12px;
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
        }
        .dt.required {
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
        textarea {
          width: calc(100% - 156px);
          height: 300px;
          padding: 20px;
          box-sizing: border-box;
          background: #3f424a;
          color: #e3e5e8;
          border-radius: 8px;
          vertical-align: middle;
          &::placeholder {
            color: #757b8a;
          }
        }
      }
      .row-border {
        margin-top: 32px;
        padding-top: 32px;
        padding-left: 156px;
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
          line-height: 22px;
        }
        .agree-area {
          margin-top: 16px;
          letter-spacing: -0.35px;
          color: #e3e5e8;
          font-size: 14px;

          .container-checkbox {
            margin-right: 8px;
            display: inline-block;
            height: 20px;
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
        .msg {
          margin-top: 6px;
        }
      }
      .button-wrap {
        margin-top: 44px;
        text-align: right;
        position: sticky;
        bottom: 0;
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
          background: #2f3137;
          &:nth-child(2) {
            background: #525660;
            margin-left: 12px;
          }
        }
        button.active {
          color: #ffffff;
          background: #3d6aff;
        }
      }
    }
  }
</style>

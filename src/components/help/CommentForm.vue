<script setup lang="ts">
  import { onMounted, ref, getCurrentInstance } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const currentByte = ref(0);
  const contents = ref("");
  const fn_checkByte = (obj: { [key: string]: any }) => {
    const maxByte = 1000; //최대 100바이트
    const text_val = obj.target.value; //입력한 문자
    const text_len = text_val.length; //입력한 문자수
    let rLen = 0;
    let str2 = "";
    let totalByte = 0;
    for (let i = 0; i < text_len; i++) {
      const each_char = text_val.charAt(i);
      const uni_char = escape(each_char); //유니코드 형식으로 변환
      if (uni_char.length > 4) {
        // 한글 : 2Byte
        totalByte += 2;
      } else {
        // 영문,숫자,특수문자 : 1Byte
        totalByte += 1;
      }
      if (totalByte <= maxByte) {
        rLen = i + 1;
      }
    }
    currentByte.value = totalByte;
    if (totalByte > maxByte) {
      obj.target.value = text_val.substr(0, rLen);
      fn_checkByte(obj);
    }
  };
</script>
<template>
  <div class="comment-form">
    <div class="editor">
      <textarea
        ref="textAreaEl"
        placeholder="좋은 의견, 아이디어, 해결방안을 알려주세요."
        @input="(e:any)=>{contents = e.target.value}"
        @keyup="
          (e) => {
            fn_checkByte(e);
          }
        "
      ></textarea>
      <span class="current-byte">
        <span :style="{ color: '#7091FF' }">{{ currentByte }}</span> / 1000
      </span>
    </div>
    <div class="btn-wrap">
      <label className="input-file" for="test">
        <span class="file-placeholder">이미지 첨부하기</span>
        <input
          type="file"
          id="test"
          class="file"
          accept="image/png, image/jpeg"
        />
      </label>
      <div>
        <slot name="isCancel"></slot>
        <button :class="[{ active: contents.length > 0 }, 'submit-btn']">
          댓글 등록
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .comment-form {
    margin-top: 40px;
    .editor {
      position: relative;
      textarea {
        color: #e3e5e8;
        letter-spacing: -0.35px;
        height: 130px;
        font-size: 14px;
        width: 100%;
        background: transparent;
        border: 1px solid #2f3137;
        border-radius: 8px;
        padding: 16px;
        box-sizing: border-box;
        margin-bottom: 12px;
      }
      .current-byte {
        position: absolute;
        bottom: 26px;
        right: 16px;
        color: #525660;
        font-size: 14px;
        font-family: "Poppins";
      }
    }
    .btn-wrap {
      display: flex;
      justify-content: space-between;
      button {
        text-align: center;
        letter-spacing: -0.45px;
        color: #969ba6;
        width: 125px;
        padding: 14px 0px;
        box-sizing: border-box;
        border: 1px solid #525660;
        font-weight: 700;
        border-radius: 8px;
        background: transparent;
      }
      .submit-btn {
        background: #525660;
      }
      button.active {
        color: #ffffff;
        background: #3d6aff;
      }
      .input-file {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        padding: 14px 20px;
        vertical-align: middle;
        width: 40%;
        color: #7091ff;
        border-radius: 8px;
        text-align: left;
        letter-spacing: -0.4px;
        background: url("@/assets/images/add_ico.svg") rgba(61, 106, 255, 0.12)
          no-repeat center right 20px / 20px 20px;
        .file-placeholder {
          vertical-align: -1px;
        }
      }
    }
  }
</style>

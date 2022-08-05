<script setup lang="ts">
  import { onMounted, ref } from "@vue/runtime-core";
  const isMaintain = ref([]);
  const isShowPassword = ref(false);
  const userId = ref("");
  const userPw = ref("");
</script>
<template>
  <main>
    <div class="sign-in-form">
      <form>
        <fieldset>
          <legend>로그인</legend>
          <h1 class="login-title">LOGIN</h1>
          <div class="id-area">
            <input
              type="text"
              @input="(e:any)=>{userId = e.target.value}"
              id="userId"
              class="input-text"
              autocomplete="off"
              required
            />
            <label for="userId"><span>이메일</span></label>
          </div>
          <div class="pw-area">
            <input
              :type="isShowPassword ? 'text' : 'password'"
              @input="(e:any)=>{userPw = e.target.value}"
              id="userPw"
              class="input-password"
              autocomplete="off"
              required
            />
            <button
              type="button"
              class="show-hide-btn"
              v-if="userPw.length > 0"
              @click="isShowPassword = !isShowPassword"
              v-text="isShowPassword ? 'HIDE' : 'SHOW'"
            ></button>
            <label for="userPw"><span>비밀번호</span></label>
          </div>
          <div class="keep-login-area">
            <CheckBox
              fieldId="로그인 상태 유지"
              v-model="isMaintain"
              value="keep-login"
            />
          </div>
          <button type="button" class="login-btn">로그인</button>
        </fieldset>
      </form>
      <div class="link-wrap">
        <router-link to="" class="find-id-link">아이디 찾기</router-link>
        <router-link to="" class="reset-pw">비밀번호 재설정</router-link>
        <router-link to="">회원가입</router-link>
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
  :deep .base-checkbox {
    .container-checkbox {
      margin-right: 9px;
    }
    .field-id {
      color: #757b8a;
      font-size: 14px;
    }
  }
  main {
    height: calc(100vh - 80px);
    .sign-in-form {
      position: absolute;
      top: calc(50% - 80px);
      left: 50%;
      transform: translate(-50%, calc(-50% + 80px));
    }
    form {
      width: 480px;
      .id-area,
      .pw-area {
        margin-top: 16px;
        position: relative;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        input {
          box-sizing: border-box;
          padding: 34px 20px 13px 20px;
          width: 100%;
          color: #e3e5e8;
          border: 0;
          background: #2f3137;
          caret-color: #3d6aff;
        }
        label {
          position: absolute;
          left: 0px;
          bottom: 0;
          border: 1px solid #2f3137;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          text-align: left;
          pointer-events: none;
          overflow: hidden;
          span {
            color: #525660;
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            margin: auto;
            height: 20px;
            transition: all 0.3s ease;
          }
        }
        input {
          &:focus ~ label span,
          &:valid ~ label span {
            transform: translateY(-50%);
            font-size: 11px;
          }
          &:focus ~ label {
            border-radius: 8px;
            border: 1px solid #3d6aff;
            overflow: hidden;
            span {
              color: #969ba6;
            }
          }
        }
        .show-hide-btn {
          width: 50px;
          background: #2f3137;
          color: #3d6aff;
          position: absolute;
          top: 0;
          right: 20px;
          bottom: 0;
        }
      }

      .login-title {
        text-align: center;
        color: #e3e5e8;
        font-size: 50px;
        font-family: "Poppins";
      }
      .keep-login-area {
        margin: 16px 0 32px 0;
      }
      .login-btn {
        font-size: 18px;
        padding: 24px 0;
        background: #3d6aff;
        border-radius: 8px;
        color: #e3e5e8;
        width: 100%;
      }
    }
    .link-wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 32px;
      a {
        font-size: 13px;
        letter-spacing: -0.32px;
        color: #757b8a;
      }
      .find-id-link {
        flex-grow: 1;
      }
      .reset-pw {
        flex-grow: 10;
      }
    }
  }
</style>

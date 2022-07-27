<script setup lang="ts">
  import { onMounted, ref } from "@vue/runtime-core";
  const isMaintain = ref([]);
</script>
<template>
  <main>
    <div class="sign-in-form">
      <form>
        <fieldset>
          <legend>로그인</legend>
          <h1 class="login-title">LOGIN</h1>
          <input type="text" placeholder="이메일(아이디)" class="input-text" />
          <input
            type="password"
            placeholder="비밀번호"
            class="input-password"
          />
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
      .input-text,
      .input-password {
        background: #2f3137;
        border-radius: 8px;
        padding: 18px 20px;
        box-sizing: border-box;
        border: 1px solid #2f3137;
        width: 100%;
        height: 62px;
        border: 0;
        margin-top: 16px;
        color: #e3e5e8;
        caret-color: #3d6aff;
        &:focus {
          border: 1px solid #3d6aff;
          padding-left: 19px;
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

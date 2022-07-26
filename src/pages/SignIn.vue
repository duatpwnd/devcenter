<script setup lang="ts">
  import { onMounted } from "@vue/runtime-core";
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <main>
    <form>
      <fieldset>
        <legend>로그인</legend>
        <h1>로그인</h1>
        <input type="text" />
        <input type="password" />
        <input type="checkbox" />
        <button type="button">로그인</button>
      </fieldset>
    </form>
    <router-link to="">아이디 찾기</router-link>
    <router-link to="">비밀번호 재설정</router-link>
    <router-link to="">회원가입</router-link>
  </main>
</template>
<style scoped lang="scss"></style>

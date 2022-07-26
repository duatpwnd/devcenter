<script setup lang="ts">
  import { onMounted, getCurrentInstance, computed } from "@vue/runtime-core";
</script>
<template>
  <nav>
    <ul class="main-menu">
      <li>
        <strong>랩코드 소개</strong>
        <ul class="sub-menu">
          <li>
            <router-link to="/intro">랩코드란?</router-link>
          </li>
        </ul>
      </li>
      <li>
        <strong>SDK 다운로드</strong>
        <ul class="sub-menu">
          <li>
            <router-link to="/docs"> 버전별 다운로드 </router-link>
          </li>
        </ul>
      </li>
      <li>
        <strong>FAQ</strong>
        <ul class="sub-menu">
          <li><router-link to="/questions"> 문의하기</router-link></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
  nav {
    height: calc(100vh - 80px);
    background-color: #1a1b1e;
    display: inline-block;
    width: 300px;
    box-sizing: border-box;
    padding: 32px;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 1;
    .main-menu {
      li {
        a {
          color: #b8bfc4;
          width: 100%;
          padding: 12px 16px;
          box-sizing: border-box;
        }
        font-size: 18px;
        color: #b8bfc4;
        .sub-menu {
          margin: 15px 0;
          li {
            font-size: 16px;
            .router-link-exact-active {
              background: #3d6aff;
              border-radius: 8px;
              color: #f6f7f8;
            }
          }
        }
      }
    }
  }
</style>

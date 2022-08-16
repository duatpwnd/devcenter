<script setup lang="ts">
  import { onMounted, getCurrentInstance, ref } from "@vue/runtime-core";
  const defaultCategory = ref(1);
  const isLabcodeShow = ref(false);
  const isSdkShow = ref(true);
  const isfaqShow = ref(false);
  defaultCategory;
</script>
<template>
  <nav>
    <ul class="main-menu">
      <li>
        <strong
          @click="
            isLabcodeShow = !isLabcodeShow;
            defaultCategory = 0;
          "
          :style="[
            defaultCategory == 0
              ? { backgroundColor: '#3d6aff', color: '#f6f7f8' }
              : { backgroundColor: 'transparent' },
          ]"
          :class="{
            toggleActive: isLabcodeShow,
          }"
          >랩코드 소개</strong
        >
        <slide-up-down v-model="isLabcodeShow" :duration="300">
          <ul class="sub-menu">
            <li>
              <router-link to="/intro">랩코드란?</router-link>
            </li>
          </ul>
        </slide-up-down>
      </li>
      <li>
        <strong
          @click="
            isSdkShow = !isSdkShow;
            defaultCategory = 1;
          "
          :style="[
            defaultCategory == 1
              ? { backgroundColor: '#3d6aff', color: '#f6f7f8' }
              : { backgroundColor: 'transparent' },
          ]"
          :class="{
            toggleActive: isSdkShow,
          }"
          >스냅태그 싱크</strong
        >
        <slide-up-down v-model="isSdkShow" :duration="300">
          <ul class="sub-menu">
            <li>
              <router-link to="/docs"> SDK를 이용하기전에 </router-link>
            </li>
            <li>
              <router-link to="/docs1"> 스캔SDK </router-link>
              <ul>
                <li><router-link to="/docs2"> Android </router-link></li>
                <li><router-link to="/docs3"> Ios </router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="/docs4"> ETC </router-link>
              <ul>
                <li><router-link to="/docs5"> Android </router-link></li>
                <li><router-link to="/docs6"> Ios </router-link></li>
              </ul>
            </li>
            <li><router-link to="/docs7">SDK 다운로드 </router-link></li>
          </ul>
        </slide-up-down>
      </li>
      <!-- <li>
        <strong
          @click="isfaqShow = !isfaqShow"
          :class="{
            toggleActive: isfaqShow,
          }"
          >FAQ</strong
        >
        <slide-up-down v-model="isfaqShow" :duration="300">
          <ul class="sub-menu">
            <li>
              <router-link to="/questions"> 문의하기</router-link>
            </li>
          </ul>
        </slide-up-down>
      </li> -->
    </ul>
  </nav>
</template>
<style scoped lang="scss">
  nav {
    height: calc(100vh - 80px);
    background-color: #1a1b1e;
    display: inline-block;
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 32px 16px;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 2;
    .main-menu {
      color: #b8bfc4;
      li {
        strong {
          border-radius: 8px;
          width: 100%;
          padding: 12px 16px;
          box-sizing: border-box;
          display: block;
          background: url("@/assets/images/inactive_arrow_bottom.svg") no-repeat
            center right 16px / 16px 16px;
        }
        .toggleActive {
          background: url("@/assets/images/active_arrow_top.svg") no-repeat
            center right 16px / 16px 16px;
        }

        a {
          color: #b8bfc4;
          width: 100%;
          padding: 9px 0 9px 44px;
          box-sizing: border-box;
        }
        .slide-up-down__container {
          margin: 5px 0;
          font-size: 14px;
          .sub-menu {
            ul {
              position: relative;
              &::before {
                content: "";
                background: #2d2e31;
                width: 2px;
                position: absolute;
                top: 0px;
                left: 46px;
                height: 100%;
              }
              li {
                a {
                  padding-left: 64px;
                }
              }
            }
          }
          a {
            color: #525660;
          }
          .router-link-active {
            color: #e3e5e8;
            // &::before {
            //   content: "";
            //   background: #3d6aff;
            //   width: 2px;
            //   position: absolute;
            //   top: 9px;
            //   left: 21px;
            //   height: 29px;
            // }
          }
        }
      }
    }
  }
</style>

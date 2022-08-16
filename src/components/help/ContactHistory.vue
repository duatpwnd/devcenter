<script setup lang="ts">
  import { onMounted, ref, getCurrentInstance } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const router = globalProperties?.$router;

  const categoryList = [
    { name: "모든 카테고리" },
    { name: "Android(SDK)" },
    { name: "IOS(SDK)" },
  ];
  const dateList = [{ name: "최신순" }, { name: "오래된순" }];
</script>
<template>
  <main>
    <div class="filter">
      <BaseSelectBox
        @update:value="categoryList"
        :options="categoryList"
        :style="{
          button: {
            fontSize: '13px',
            border: '1px solid #34363C',
            borderRadius: '4px',
            background: 'transparent',
            padding: '0px 12px',
            lineHeight: 2.616,
          },
          ul: {
            borderRadius: '4px',
          },
          li: {
            lineHeight: 3.077,
            fontSize: '13px',
          },
          span: {
            marginLeft: '27px',
          },
        }"
      />
      <BaseSelectBox
        @update:value="categoryList"
        :options="dateList"
        :style="{
          button: {
            fontSize: '13px',
            border: '1px solid #34363C',
            borderRadius: '4px',
            background: 'transparent',
            padding: '0px 12px',
            lineHeight: 2.616,
          },
          ul: {
            borderRadius: '4px',
          },
          li: {
            lineHeight: 3.077,
            fontSize: '13px',
          },
          span: {
            marginLeft: '41px',
          },
        }"
      />
    </div>
    <div class="history-list">
      <table>
        <colgroup>
          <col style="width: 470px" />
          <col style="width: 140px" />
          <col style="width: 80px" />
          <col style="width: 80px" />
        </colgroup>
        <tr>
          <th>글</th>
          <th>참여자</th>
          <th>댓글</th>
          <th>작성일</th>
        </tr>
        <tr @click="router.push('/help/faq/1')">
          <td class="writing">
            압드로이드 랩코드 로그인 오류
            <div class="android">Android</div>
          </td>
          <td>
            <span class="user-name">염</span><span class="user-name">김</span>
          </td>
          <td class="comment">2</td>
          <td>22.07.21</td>
        </tr>
        <tr>
          <td class="writing">
            소재 리포트 API 호출 시 “허용된 API 요청을 초과하였습니다” 발생 문의
            박
            <div class="ios">IOS</div>
          </td>
          <td>
            <span class="user-name">염</span><span class="user-name">김</span>
          </td>
          <td class="comment">10</td>
          <td>22.07.25</td>
        </tr>
      </table>
    </div>
  </main>
</template>
<style scoped lang="scss">
  .filter {
    display: flex;
    column-gap: 9px;
  }
  .history-list {
    margin-top: 20px;
    overflow: auto;
    table {
      width: 100%;
      white-space: nowrap;
      table-layout: fixed;

      tr {
        th,
        td {
          font-size: 14px;
          letter-spacing: -0.35px;
          color: #525660;
          padding: 20px 12px;
          border-bottom: 1px solid #2f3137;
          &:nth-child(1),
          &:nth-child(2) {
            text-align: left;
          }
          &:nth-child(3),
          &:nth-child(4) {
            text-align: center;
          }
        }
        td {
          .android,
          .ios {
            margin-top: 6px;
            &::before {
              content: "";
              width: 12px;
              display: inline-block;
              margin-right: 6px;
              vertical-align: middle;
              height: 12px;
              background: #577333;
              border-radius: 2px;
            }
          }
          .ios {
            &::before {
              background: #476deb;
            }
          }
          .user-name {
            text-align: center;
            font-size: 13px;
            border-radius: 50px;
            background: gold;
            color: #ffffff;
            width: 24px;
            height: 24px;
            line-height: 1.847;
            &:not(:last-child) {
              margin-right: 6px;
            }
          }
          &:nth-child(1) {
            color: #e3e5e8;
          }
          &:nth-child(3) {
            color: #969ba6;
          }
        }
      }
    }
  }
</style>

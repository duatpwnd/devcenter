<script setup lang="ts">
  import { onMounted, ref } from "@vue/runtime-core";
  import MDEditor from "@/components/markdown/MDEditor.vue";
  import Editor from "@/components/froala/Editor.vue";
  import {
    faDownload,
    faExclamationCircle,
  } from "@fortawesome/free-solid-svg-icons";
  const isModify = ref(false);
  const modify = () => {
    isModify.value = true;
  };
  const complete = () => {
    isModify.value = false;
  };
  const test = () => {
    console.log("test");
  };
</script>
<template>
  <main>
    <!-- <BaseModal :okEvent="test">
      <template #title> 제목 입니다. </template>
      <template #contents> 내용입니다. </template>
    </BaseModal> -->
    <section class="guide-section">
      <div class="header">
        <h1 class="h1-title">SDK 및 응용 프로그램 다운로드</h1>
        <button class="modify-btn" v-if="isModify" @click="complete">
          수정완료
        </button>
        <button class="modify-btn" v-else @click="modify">수정하기</button>
      </div>
      <p class="guide-message">
        <svg-icon
          class="exclaim-icon"
          :color="'red'"
          :style="'vertical-align:middle;margin-right:5px;'"
          :fa-icon="faExclamationCircle"
        ></svg-icon>
        이 문서는 SDK 다운로드 링크와 버전별 레퍼런스를 제공합니다.
      </p>
      <p class="guide-message">
        스냅태그 플랫폼 서비스를 이용하여 JavaScript 웹 페이지를 개발하기
        위해서는 아래의 스냅태그 SDK for JavaScript(이하 JavaScript SDK)가
        필요합니다.
      </p>
    </section>
    <section class="version-list-section">
      <h2 class="h2-title">버전 다운로드</h2>
      <div class="version-list">
        <input
          type="text"
          v-if="isModify"
          value="1.1.1 GetTaxInvoiceScrapRequestURL"
        />
        <div v-else>
          <span class="version-name">2.1.0 랩코드 프로그램 </span>
          <a href="/Labcode Setup 2.1.0.exe" class="download-link" download
            ><svg-icon :fa-icon="faDownload"></svg-icon>
          </a>
        </div>
        <p class="guide-message">
          <svg-icon
            class="exclaim-icon"
            :color="'red'"
            :style="'vertical-align:middle;margin-right:10px;'"
            :fa-icon="faExclamationCircle"
          ></svg-icon
          >랩코드 프로그램 다운로드 링크를 클릭하여 다운받습니다.
        </p>
        <div class="editor-area">
          <Editor v-if="isModify" />
          <table v-else class="table">
            <thead>
              <tr>
                <th>버전</th>
                <th>변경 날짜</th>
                <th>변경 이력</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="version">2.1.0</td>
                <td>2022.3.29</td>
                <td>* 버그 수정</td>
              </tr>
              <tr>
                <td class="version">2.1.1</td>
                <td>2022.4.30</td>
                <td>* 버그 수정</td>
              </tr>
              <tr>
                <td class="version">2.1.2</td>
                <td>2022.6.29</td>
                <td>
                  <a
                    href="/docs/references/%EC%84%B8%EA%B8%88%EA%B3%84%EC%82%B0%EC%84%9C-API#TaxInvoice"
                    class=""
                    >* 버그 수정</a
                  >
                </td>
              </tr>
              <tr>
                <td class="version">2.1.3</td>
                <td>2022.6.31</td>
                <td>* 버그 수정</td>
              </tr>
              <tr>
                <td class="version">2.1.4</td>
                <td>2022.7.12</td>
                <td>* 버그 수정</td>
              </tr>
              <tr>
                <td class="version">2.1.5</td>
                <td>2022.7.17</td>
                <td>* 버그 수정</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="version-list">
        <input type="text" v-if="isModify" value="Markdown 작성법" />
        <h3 class="h3-title" v-else>Markdown 작성법</h3>
        <MDEditor :isModify="isModify" />
      </div>
      <div class="version-list">
        <input
          type="text"
          v-if="isModify"
          value="3.1.1 GetTaxInvoiceScrapRequestURL"
        />
        <h3 class="h3-title" v-else>3.1.1 GetTaxInvoiceScrapRequestURL</h3>
      </div>
    </section>
  </main>
</template>
<style scoped lang="scss">
  main {
    background-color: white;
    section {
      .modify-btn {
        color: white;
        background-color: #1a1b1e;
        border-radius: 5px;
        width: 100px;
        height: 50px;
      }
      .guide-message {
        display: inline-block;
        margin-top: 15px;
        font-weight: bold;
        color: rgba(62, 70, 84, 0.9);
      }
      .editor-area {
        margin-top: 30px;
        .table {
          width: 100%;
          box-sizing: border-box;
          border-collapse: collapse;
          border-radius: 4px;
          border: 1px solid #e2e4ee;
          overflow: hidden;
          th {
            padding: 14px 20px;
            background-color: #f5f6f9;
          }
          td {
            border: 1px solid #e2e4ee;
            padding: 14px 20px;
            text-align: center;
          }
          .version {
            color: #2d50ff;
          }
        }
      }
      .version-list {
        margin-top: 40px;
        padding-bottom: 60px;
        border-bottom: 2px dotted #ccc;
        .version-name {
          margin-right: 10px;
          font-weight: 700;
          font-size: 18px;
          vertical-align: middle;
        }
        .download-link {
          vertical-align: middle;
          color: #2d50ff;
          font-weight: 700;
          font-size: 19px;
        }
        input {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      }
    }
    .guide-section {
      padding-bottom: 40px;
      border-bottom: 2px solid #ccc;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
      }
    }
    .version-list-section {
      margin-top: 40px;
    }
  }
</style>

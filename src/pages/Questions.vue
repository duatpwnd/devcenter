<script setup lang="ts">
  import { onMounted, getCurrentInstance } from "@vue/runtime-core";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const router = globalProperties?.$router;
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <main>
    <div class="search-area">
      <input type="text" class="search-input" />
      <button class="search-btn">
        <svg-icon
          :style="'vertical-align:middle;'"
          :fa-icon="faSearch"
        ></svg-icon>
      </button>
    </div>
    <table
      class="table b-table m-0 table-list-style-cs table-hover b-table-fixed"
    >
      <!---->
      <colgroup>
        <col data-v-de9e90f8="" class="col-category" />
        <col data-v-de9e90f8="" />
      </colgroup>
      <thead role="rowgroup" class="">
        <!---->
        <tr role="row" class="">
          <th role="columnheader" scope="col" aria-colindex="1" class="">
            <div>카테고리</div>
          </th>
          <th role="columnheader" scope="col" aria-colindex="2" class="">
            <div>제목</div>
          </th>
        </tr>
      </thead>
      <tbody role="rowgroup">
        <tr role="row" tabindex="0" @click="router.push('/topics')">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            스냅태그 개발자센터는 어떤 서비스를 제공하고 있나요?
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            테스트/개발
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            스냅태그 API를 테스트하고 싶습니다. 어떻게 해야 하나요?
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            API 서비스 이용요금은 어떻게 되나요?
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            연동테스트 및 실제연동 절차가 궁금합니다.
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            서비스 이용이 가능한 시간이 궁금합니다.
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            계좌거래내역, 카드사용내역 조회를 지원하는 금융기관이 어떻게 되나요?
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            API 연동서비스와 구축서비스의 차이점은 무엇인가요?
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            구축서비스 이용절차가 궁금합니다.
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            구축서비스 이용요금이 궁금합니다.
          </td>
        </tr>
        <tr role="row" tabindex="0" class="">
          <td aria-colindex="1" role="cell" class="text-center text-gray-600">
            API 상품
          </td>
          <td aria-colindex="2" role="cell" class="pl-2 pl-lg-4 text-size-lg">
            서비스를 이용하려면 공동인증서가 꼭 필요하나요?
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<style scoped lang="scss">
  .search-area {
    margin-bottom: 20px;
    width: 260px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #d8dde6;
    input {
      width: calc(100% - 50px);
      border: 0;
    }
    .search-btn {
      padding: 10px;
      box-sizing: border-box;
      border-left: 1px solid #d8dde6;
      width: 50px;
    }
  }
  .input-group-append {
    display: inline-block;
    width: 46px;
  }
  table {
    width: 100%;
    box-sizing: border-box;
    border-collapse: collapse;
    border-bottom: 1px solid #d8dde6;
    tr {
      cursor: pointer;
      &:nth-child(2n-1) {
        background: #f2f4f8;
      }
      th {
        background-color: #6a77a4;
        padding: 16px;
        color: white;
      }
      td {
        padding: 16px;
        text-align: center;
      }
    }
  }
</style>

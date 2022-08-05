<script setup lang="ts">
  import "froala-editor/css/froala_editor.pkgd.min.css";
  import FroalaEditor from "froala-editor/js/froala_editor.pkgd.min.js";
  import { onMounted, getCurrentInstance } from "@vue/runtime-core";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const toDataURL = globalProperties?.$toDataURL;
  const { getIndexedDB, addIndexedDB, deleteIndexedDB } =
    globalProperties?.$indexedDB();
  const initFroala = () => {
    new FroalaEditor("#editor", {
      height: 300,
      events: {
        initialized: function () {
          this.html.insert(`
          <table class="table">
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
                <td>2022.6.29</td>
                <td>* 버그 수정</td>
              </tr>
              <tr>
                <td class="version">2.1.1</td>
                <td>2022.6.29</td>
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
         
            </tbody>
          </table>`);
        },

        "image.inserted": function ($img: any, response: any) {
          const getImageSrc = $img[0].getAttribute("src");
          const blobToUrl = toDataURL(getImageSrc, (result: string) => {
            addIndexedDB([{ id: this.id, url: result }]);
          });
        },
        "image.removed": function ($img: any) {
          console.log(this, $img);
          deleteIndexedDB(this.id);
        },
        "image.loaded": function ($img: any) {
          console.log(this, $img);
        },
        "image.uploaded": function (response: any) {
          console.log(this, response);
        },
      },
    });
  };
  onMounted(() => {
    initFroala();
  });
</script>
<template>
  <div id="editor" height="500px"></div>
</template>
<style lang="scss">
  .fr-view table {
    width: 100%;
    box-sizing: border-box;
    border-collapse: collapse;
    border: 1px solid #e2e4ee;
    th {
      text-align: center;
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
</style>

import { getCurrentInstance, computed } from "vue";
import store from "../store";
const globalProperties =
  getCurrentInstance()?.appContext.config.globalProperties;
const dbStore = computed(() => store.state.dbStore.db);
export default {
  install: (app: { [key: string]: any }, options: any) => {
    // base64를 파일객체로 바꿔주는 함수
    app.config.globalProperties.$getFileObject = (
      dataurl: string,
      name: string
    ) => {
      const arr = dataurl.split(",");
      const mime = (arr[0].match(/:(.*?);/) as any[])[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], name, { type: mime });
    };
    // url을 base64로 바꿔주는 함수
    app.config.globalProperties.$toDataURL = (
      url: string,
      callback: (param: string) => void
    ) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = () => {
          callback(reader.result as string);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.send();
    };
    // 스크롤 바닥 감지 함수
    app.config.globalProperties.$scrollDetect = (
      element: HTMLElement,
      callback: () => void
    ) => {
      if (element != null) {
        element.addEventListener("scroll", () => {
          if (
            element.clientHeight + Math.ceil(element.scrollTop) >=
            element.scrollHeight
          ) {
            callback();
          }
        });
      }
    };
    app.config.globalProperties.$indexedDB = () => {
      const createDatabase = () => {
        // db 생성
        const request = window.indexedDB.open("froala", 1);
        request.onsuccess = (e) => {
          store.commit("dbStore/SET_INDEXEDDB", request.result);
        };
        // table 생성
        request.onupgradeneeded = (event) => {
          request.result.createObjectStore("image", { keyPath: "id" });
        };
      };
      // 조회
      const getIndexedDB = (callback: (params: string) => void) => {
        const request = window.indexedDB.open("froala");
        request.onsuccess = (event) => {
          const db = request.result;
          const transaction = db.transaction("image");
          transaction.oncomplete = (event) => {
            console.log(event);
          };
          const objStore = transaction.objectStore("image");
          const cursorRequest = objStore.openCursor();
          cursorRequest.onsuccess = (e: { [key: string]: any }) => {
            let cursor = e.target.result;
            if (cursor) {
              const value = objStore.get(cursor.key); // 3. 커서를 사용해 데이터 접근
              value.onsuccess = (e: { [key: string]: any }) => {
                callback(e.target.result);
              };
              cursor.continue(); // 4. cursor로 순회
            }
          };
        };
      };
      // 추가
      const addIndexedDB = (params: any) => {
        const transaction = dbStore.value.transaction(["image"], "readwrite");
        transaction.oncomplete = function (event: any) {
          console.log("event complete:", event);
        };

        transaction.onerror = function (event: any) {
          console.log("error event complete:", event);
        };

        const objectStore = transaction.objectStore("image");

        // Add new student
        params.forEach((el: { [key: string]: any }) => {
          objectStore.add(el);
        });
      };
      // 삭제
      const deleteIndexedDB = (key: number) => {
        const request = window.indexedDB.open("froala", 1);
        const transaction = dbStore.value.transaction(["image"], "readwrite");
        const objectStore = transaction.objectStore("image").delete(key);
        request.onsuccess = () => {
          console.log(`Student deleted, email: ${request.result}`);
        };

        request.onerror = (err) => {
          console.error(`Error to delete student: ${err}`);
        };
      };
      return { createDatabase, addIndexedDB, getIndexedDB, deleteIndexedDB };
    };
  },
};

<script setup lang="ts">
  import { onMounted, ref } from "@vue/runtime-core";
  import moreViewIco from "@/assets/images/more.svg";
  import CommentList from "@/components/help/CommentList.vue";
  import BaseModal from "../components/common/BaseModal.vue";
  const isActiveCommentForm = ref(false);
  const options = [{ name: "공유" }, { name: "수정" }, { name: "삭제" }];
  const textAreaEl = ref(null);
  const currentByte = ref(0);
  const isActiveReportModal = ref(false);
  const isRemoveComment = ref(false);
  const fn_checkByte = (obj: { [key: string]: any }) => {
    const maxByte = 1000; //최대 100바이트
    const text_val = obj.target.value; //입력한 문자
    const text_len = text_val.length; //입력한 문자수
    let rLen = 0;
    let str2 = "";
    let totalByte = 0;
    for (let i = 0; i < text_len; i++) {
      const each_char = text_val.charAt(i);
      const uni_char = escape(each_char); //유니코드 형식으로 변환
      if (uni_char.length > 4) {
        // 한글 : 2Byte
        totalByte += 2;
      } else {
        // 영문,숫자,특수문자 : 1Byte
        totalByte += 1;
      }
      if (totalByte <= maxByte) {
        rLen = i + 1;
      }
    }
    currentByte.value = totalByte;
    if (totalByte > maxByte) {
      obj.target.value = text_val.substr(0, rLen);
      fn_checkByte(obj);
    }
  };
</script>

<template>
  <BaseModal modalType="confirm" v-if="isRemoveComment">
    <template #title> 의견/ 문의 삭제 </template>
    <template #contents> 작성하신 글을 삭제 하시겠습니까? </template>
    <template #button>
      <button class="cancel-button" @click="isRemoveComment = false">
        취소
      </button>
      <button class="ok-button">삭제</button>
    </template>
  </BaseModal>
  <div class="report-modal" v-if="isActiveReportModal">
    <strong>신고하기</strong>
    <div class="row">
      <label for="report1">
        <input id="report1" type="radio" name="reports" />
        <span class="checkmark"></span>
      </label>
      <dl>
        <dt>부적절한 글입니다.</dt>
        <dd>
          이 주제와 맞지 않는 글 또는 욕설 및 노골적인 콘텐츠가 포함되어
          있습니다.
        </dd>
      </dl>
    </div>
    <div class="row">
      <label for="report2">
        <input id="report2" type="radio" name="reports" />
        <span class="checkmark"></span>
      </label>
      <dl>
        <dt>스팸</dt>
        <dd>반복적으로 게시되거나 특정 기업, 상품을 광고하는 글입니다.</dd>
      </dl>
    </div>
    <div class="row">
      <label for="report3">
        <input id="report3" type="radio" name="reports" />
        <span class="checkmark"></span>
      </label>
      <dl>
        <dt>모욕적인 내용 또는 개인정보 침해</dt>
        <dd>모욕 또는 개인 정보 침해되는 내용이 포함되어 있습니다.</dd>
      </dl>
    </div>
    <div class="btn-wrap">
      <button class="cancel-btn" @click="isActiveReportModal = false">
        취소
      </button>
      <button class="report-btn">신고하기</button>
    </div>
  </div>
  <main>
    <div class="category">
      <span>문의하기</span>
      <span class="history">문의 히스토리</span>
      <span>문의 상세보기</span>
    </div>
    <div class="title-area">
      <strong class="title">기록api 텍스트 공유 질문입니다.</strong>
      <BaseSelectBox :options="options">
        <template #ico="scope">
          <button class="more-view-btn" @click="scope.eventHandler"></button>
        </template>
      </BaseSelectBox>
    </div>
    <div class="ios">IOS</div>
    <div class="user-info">
      <div>
        <span class="last-name">김</span>
        <span class="full-name">김철수</span>
        <span class="user-type">기업회원</span>
      </div>
      <span class="date">2022.07.24&nbsp;&nbsp;&nbsp;&nbsp;12:24</span>
    </div>
    <div class="contents">
      카카오톡 공유 api 를 사용하여 메세지를 전달하려고합니다. 홈페이지 script
      부분에 있는 변수를 카톡으로 보내려고하는데 버튼을 눌러서 변수의 값을
      변화시켜놔도 초기 변수 값으로만 전송이되네요. 어떻게 해야 변화된
      최종값으로 전송될까요? 예를 들어 count=0 이라는 변수를 정하고 버튼을
      만들어 count=10으로 바꿨을때 아래 코드를 사용하면 10이 전달됐으면 합니다.
      지금 상태에서는 0이 전달됩니다.
    </div>
    <div class="info">기업, 직급 정보</div>
    <dl>
      <div>
        <dt>기업명</dt>
        <dd>스냅태그</dd>
      </div>
      <div>
        <dt>직책</dt>
        <dd>대리</dd>
      </div>
      <div>
        <dt>이메일</dt>
        <dd>snaptag@gmail.com</dd>
      </div>
    </dl>
    <div class="comment-info">
      <span>
        <span class="comment">댓글<strong>0</strong></span>
        <span class="participants">참여자<strong>1</strong></span>
      </span>
      <button
        @click="isActiveCommentForm = !isActiveCommentForm"
        :class="{ active: isActiveCommentForm }"
      >
        댓글쓰기
      </button>
    </div>
    <!-- <p class="msg">
      댓글이 없습니다. 작성자에게 도움이 되는 좋은 아이디어 또는 의견을
      남겨주세요.
    </p> -->
    <CommentList
      @update:reportModal="isActiveReportModal = true"
      @remove:comment="isRemoveComment = true"
    />
    <div class="comment-form" v-show="isActiveCommentForm">
      <div class="editor">
        <textarea
          ref="textAreaEl"
          placeholder="좋은 의견, 아이디어, 해결방안을 알려주세요."
          @keyup="
            (e) => {
              fn_checkByte(e);
            }
          "
        ></textarea>
        <span class="current-byte">
          <span :style="{ color: '#7091FF' }">{{ currentByte }}</span> / 1000
        </span>
      </div>
      <div class="btn-wrap">
        <label className="input-file" for="test">
          <span class="file-placeholder">이미지 첨부하기</span>
          <input
            type="file"
            id="test"
            class="file"
            accept="image/png, image/jpeg"
          />
        </label>
        <div>
          <button @click="isActiveCommentForm = false">취소</button>
          <button>댓글 등록</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .modal {
    .event-area {
      display: flex;
      column-gap: 20px;
      button {
        width: 100%;
        height: 60px;
        color: #e3e5e8;
        font-size: 18px;
        border-radius: 12px;
      }
      .ok-button {
        background: #3d6aff;
      }
      .cancel-button {
        background: #525660;
      }
    }
  }
  .report-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    max-width: 510px;
    width: 100%;
    box-sizing: border-box;
    background: #34363c;
    border-radius: 16px;
    .btn-wrap {
      margin-top: 40px;
      display: flex;
      column-gap: 20px;
      button {
        width: 100%;
        color: #e3e5e8;
        font-size: 18px;
        padding: 18.5px 0;
        background: #525660;
        border-radius: 12px;
      }
      .report-btn {
        background: #3d6aff;
      }
    }
    strong {
      color: #e3e5e8;
      font-size: 28px;
    }
    .row {
      &:first-of-type {
        margin-top: 32px;
      }
      &:not(:first-of-type) {
        margin-top: 24px;
      }
      dl {
        width: calc(100% - 32px);
        margin-left: 12px;
        vertical-align: top;
        display: inline-block;
        dt {
          color: #e3e5e8;
          font-size: 18px;
        }
        dd {
          color: #757b8a;
          font-size: 14px;
          margin-top: 10px;
        }
      }
      input[type="radio"] {
        -webkit-appearance: auto;
        display: none;
      }
      input[type="radio"] + .checkmark {
        width: 20px;
        height: 20px;
        display: inline-block;
        border-radius: 4px;
        background: url("@/assets/images/inactive_circle_check_ico.svg")
          no-repeat center / 20px 20px;
      }
      input[type="radio"]:checked + .checkmark {
        background: url("@/assets/images/active_circle_check_ico.svg") no-repeat
          center / 20px 20px;
      }
    }
  }
  main {
    width: 840px;
    margin: 0 auto;
    padding: 60px 0;
    .category {
      text-align: right;
      color: #525660;
      font-size: 13px;
      .history {
        &::after {
          content: ">";
          margin: 0 6px;
        }
        &::before {
          margin: 0 6px;
          content: ">";
        }
      }
    }
    .title-area {
      display: flex;
      margin-top: 60px;
      justify-content: space-between;
      .title {
        color: #e3e5e8;
        font-size: 28px;
        align-self: center;
      }

      .select-box-wrap {
        width: 200px;
        text-align: right;
      }
      .more-view-btn {
        width: 44px;
        height: 44px;
        background: url("@/assets/images/more.svg") no-repeat center right /
          44px 44px;
      }
    }

    .ios {
      font-size: 13px;
      margin-top: 8px;
      margin-bottom: 16px;
      color: #969ba6;
      &::before {
        content: "";
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 6px;
        vertical-align: -2px;
        background: #476deb;
        border-radius: 2px;
      }
    }
    .user-info {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      .full-name,
      .last-name {
        color: #e3e5e8;
        font-size: 14px;
      }
      .full-name {
        margin-left: 12px;
        margin-right: 16px;
      }
      .last-name {
        background: #476deb;
        width: 32px;
        height: 32px;
        text-align: center;
        border-radius: 50px;
        line-height: 32px;
      }
      .user-type {
        color: #5cd6a3;
        font-size: 11px;
        background: rgba(27, 170, 101, 0.15);
        border-radius: 2px;
        padding: 2px 4px;
        vertical-align: middle;
      }
      .date {
        color: #525660;
        font-family: "Poppins";
        font-size: 12px;
        align-self: center;
      }
    }
    .contents {
      border-radius: 1px;
      border-top: 1px solid #2f3137;
      font-size: 14px;
      line-height: 22px;
      color: #b7bac2;
      padding-top: 20px;
    }
    .info {
      margin-top: 40px;
      margin-bottom: 10px;
      font-size: 13px;
      color: #b7bac2;
    }
    dl {
      dt {
        color: #757b8a;
        font-size: 12px;
        width: 32px;
        margin-right: 32px;
        display: inline-block;
      }
      dd {
        display: inline-block;
        font-size: 12px;
        color: #476deb;
      }
    }
    .comment-info {
      display: flex;
      justify-content: space-between;
      margin-top: 43px;
      color: #e3e5e8;
      padding-bottom: 12px;
      border-radius: 1px;
      border-bottom: 1px solid #2f3137;
      .participants {
        margin-left: 24px;
      }
      strong {
        color: #3d6aff;
        margin-left: 4px;
      }
      button {
        color: #e3e5e8;
        background: transparent;
        font-size: 13px;
        border: 1px solid #2f3137;
        border-radius: 4px;
        padding: 10px 14px;
      }
      .active {
        color: #3d6aff;
        border: 1px solid #3d6aff;
        border-radius: 4px;
      }
    }
    .msg {
      text-align: center;
      color: #525660;
      font-size: 14px;
      margin-top: 40px;
    }
    .comment-form {
      margin-top: 40px;
      .editor {
        position: relative;
        textarea {
          color: #e3e5e8;
          letter-spacing: -0.35px;
          height: 130px;
          font-size: 14px;
          width: 100%;
          background: transparent;
          border: 1px solid #2f3137;
          border-radius: 8px;
          padding: 16px;
          box-sizing: border-box;
          margin-bottom: 12px;
        }
        .current-byte {
          position: absolute;
          bottom: 26px;
          right: 16px;
          color: #525660;
          font-size: 14px;
          font-family: "Poppins";
        }
      }
      .btn-wrap {
        display: flex;
        justify-content: space-between;
        button {
          text-align: center;
          letter-spacing: -0.45px;
          color: #969ba6;
          width: 125px;
          padding: 14px 0px;
          box-sizing: border-box;
          border: 1px solid #525660;
          font-weight: 700;
          border-radius: 8px;
          background: transparent;
          &:nth-child(2) {
            background: #525660;
            margin-left: 12px;
          }
        }
        button.active {
          color: #ffffff;
          background: #3d6aff;
        }
        .input-file {
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          padding: 14px 20px;
          vertical-align: middle;
          width: 40%;
          color: #7091ff;
          border-radius: 8px;
          text-align: left;
          letter-spacing: -0.4px;
          background: url("@/assets/images/add_ico.svg")
            rgba(61, 106, 255, 0.12) no-repeat center right 20px / 20px 20px;
          .file-placeholder {
            vertical-align: -1px;
          }
        }
      }
    }
  }
</style>

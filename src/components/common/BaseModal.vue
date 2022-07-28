<script setup lang="ts">
  import { PropType } from "vue";
  import { onMounted, defineProps } from "@vue/runtime-core";
  interface Props {
    okEvent: () => void;
    modalType?: string;
  }
  const props = defineProps<Props>();
</script>
<template>
  <Teleport to="body">
    <div class="modal">
      <strong class="title">
        <slot name="title"></slot>
      </strong>
      <p class="contents">
        <slot name="contents"></slot>
      </p>
      <div class="event-area">
        <slot name="button">
          <button class="ok-button" @click="okEvent">확인</button>
          <button v-if="modalType == 'confirm'" class="cancel-button">
            취소
          </button>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
  .modal {
    padding: 28px;
    box-sizing: border-box;
    max-width: 412px;
    width: 100%;
    background: #34363c;
    border-radius: 16px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
      display: block;
      font-size: 28px;
      text-align: center;
      letter-spacing: -0.7px;
      color: #e3e5e8;
    }
    .contents {
      color: #757b8a;
      text-align: center;
      margin: 8px 0 42px 0;
    }
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
        background: #ccc;
      }
    }
  }
</style>

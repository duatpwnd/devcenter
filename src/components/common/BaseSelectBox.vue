<script setup lang="ts">
  import { onMounted, defineProps, defineEmits, ref } from "@vue/runtime-core";
  interface Props {
    options: { [key: string]: any }[];
    style?: { [key: string]: any };
  }
  const emit = defineEmits(["update:value"]);
  const props = defineProps<Props>();
  const isActiveSelectModal = ref(false);
  const selected = ref(props.options[0].name);
  const select = (name: string) => {
    selected.value = name;
    isActiveSelectModal.value = false;
    emit("update:value", name);
  };
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <div class="select-box-wrap">
    <slot name="ico">
      <button
        :style="style?.button"
        :class="[{ 'active-toggle': isActiveSelectModal }, 'select-btn']"
        @click="isActiveSelectModal = !isActiveSelectModal"
      >
        {{ selected
        }}<span
          :style="style?.span"
          class="arrow-ico"
          :class="isActiveSelectModal ? 'arrow-top' : 'arrow-bottom'"
        ></span>
      </button>
    </slot>
    <ul :style="style?.ul" class="options" v-show="isActiveSelectModal">
      <li
        v-for="(option, index) in options"
        :class="{ active: selected == option.name }"
        :key="index"
        :style="style?.li"
        @click="select(option.name)"
      >
        {{ option.name
        }}<span v-if="selected == option.name" class="selected-ico"></span>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
  .select-box-wrap {
    position: relative;
    display: inline-block;
    .select-btn {
      display: flex;
      justify-content: space-between;
      background: #2f3137;
      border: 1px solid #2f3137;
      border-radius: 8px;
      padding: 0px 20px 0px 20px;
      line-height: 3;
      width: 100%;
      box-sizing: border-box;
      color: #e3e5e8;
      .arrow-ico {
        width: 12px;
        height: 12px;
        align-self: center;
        margin-left: 24px;
      }
      .arrow-bottom {
        background: url("@/assets/images/select_arrow_bottom.svg") no-repeat
          center center / 12px 12px;
      }
      .arrow-top {
        background: url("@/assets/images/select_arrow_top.svg") no-repeat center
          center / 12px 12px;
      }
    }
    .select-btn.active-toggle {
      // border: 1px solid #3d6aff !important;
    }
    ul {
      background: #2f3137;
      box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      margin-top: 8px;
      padding: 8px;
      width: 100%;
      position: absolute;
      z-index: 1;
      box-sizing: border-box;
      li {
        box-sizing: border-box;
        letter-spacing: -0.4px;
        color: #e3e5e8;
        display: flex;
        justify-content: space-between;
        line-height: 3;
        padding: 0 12px;
      }
      li.active {
        background: #34363c;
        border-radius: 8px;
        .selected-ico {
          width: 16px;
          height: 16px;
          align-self: center;
          background: url("@/assets/images/selected_check_ico.svg") no-repeat
            center center / 16px 16px;
        }
      }
    }
  }
</style>

<script setup lang="ts">
  import { onMounted, defineProps, ref } from "@vue/runtime-core";
  interface Props {
    options: { [key: string]: any }[];
    style: { [key: string]: any };
  }
  const props = defineProps<Props>();
  const isActiveSelectModal = ref(false);
  const selected = ref(props.options[0].name);
  const select = (name: string) => {
    selected.value = name;
    isActiveSelectModal.value = false;
  };
  onMounted(() => {
    console.log("onmounted");
  });
</script>
<template>
  <button
    :style="style.button"
    :class="[{ 'active-toggle': isActiveSelectModal }, 'select-btn']"
    @click="isActiveSelectModal = !isActiveSelectModal"
  >
    {{ selected }}<span class="arrow-ico"></span>
  </button>
  <ul :style="style.ul" v-show="isActiveSelectModal">
    <li
      v-for="(option, index) in options"
      :class="{ active: selected == option.name }"
      :style="style.li"
      @click="select(option.name)"
    >
      {{ option.name
      }}<span v-if="selected == option.name" class="selected-ico"></span>
    </li>
  </ul>
</template>
<style scoped lang="scss">
  .select-btn {
    display: flex;
    justify-content: space-between;
    background: #2f3137;
    border: 1px solid #2f3137;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    color: #e3e5e8;
    .arrow-ico {
      width: 12px;
      height: 12px;
      align-self: center;
      background: url("@/assets/images/select_arrow_top.svg") no-repeat center
        center / 12px 12px;
    }
  }
  .select-btn.active-toggle {
    border: 1px solid #3d6aff;
  }
  ul {
    background: #2f3137;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 8px;
    li {
      box-sizing: border-box;
      letter-spacing: -0.4px;
      color: #e3e5e8;
      display: flex;
      justify-content: space-between;
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
</style>

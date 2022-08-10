<script setup lang="ts">
  import { onMounted, computed, defineProps } from "@vue/runtime-core";
  interface Props {
    modelValue: Boolean | string[];
    value?: string;
    fieldId: string;
  }
  const props = defineProps<Props>();
  onMounted(() => {
    console.log(props.value);
  });
</script>
<template>
  <span class="switch-btn">
    <label class="field-id" :for="fieldId" v-if="value != undefined">{{
      value
    }}</label>
    <label class="switch">
      <input
        type="checkbox"
        :checked="modelValue"
        :id="fieldId"
        @click="$emit('update:modelValue', !modelValue)"
      />
      <span class="slider round"></span>
    </label>
  </span>
</template>
<style scoped lang="scss">
  .switch-btn {
    .field-id {
      vertical-align: middle;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 28px;
      overflow: hidden;
      border-radius: 34px;
      vertical-align: middle;
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        background: #3d6aff;
      }
      .slider.round {
        border-radius: 34px;
      }
      .slider.round:before {
        border-radius: 50%;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: 2px;
        top: 0;
        bottom: 0;
        margin: auto;
        background: white;

        -webkit-transition: 0.4s;
        transition: 0.4s;
        box-shadow: 1px 1px 1px 0px white;
      }
      input {
        display: none;
      }
      input:checked + .slider {
        background: #3d6aff;
      }
      input:checked + .slider::before {
        background-color: white;
        -webkit-transform: translateX(50px);
        -ms-transform: translateX(50px);
        transform: translateX(22px);
        box-shadow: 1px 1px 1px 0px white;
      }
    }
  }
</style>

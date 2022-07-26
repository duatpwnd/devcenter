<script setup lang="ts">
  import { onMounted, computed } from "@vue/runtime-core";
  const emit = defineEmits(["all-check", "update:modelValue"]);
  const props = defineProps({
    modelValue: <any>[],
    value: String,
    allChecked: Boolean,
    fieldId: String,
  });
  const checked = computed(() => props.modelValue.includes(props.value));
  const allCheck = () => {
    emit("all-check", !props.allChecked);
  };
  const checkFunc = () => {
    const updatedValue = props.modelValue;
    if (checked.value) {
      const index = updatedValue.indexOf(props.value);
      updatedValue.splice(index, 1);
    } else {
      updatedValue.push(props.value);
    }
    emit("update:modelValue", updatedValue);
  };
</script>
<template>
  <span class="base-checkbox">
    <label class="container-checkbox">
      <input
        v-if="value == 'all'"
        :id="value"
        type="checkbox"
        :checked="allChecked"
        @click="allCheck()"
      />
      <input
        v-else
        :id="value"
        @input="checkFunc()"
        type="checkbox"
        :checked="checked"
      />
      <span class="checkmark"></span>
    </label>
    <label :for="value" class="field-id">{{ fieldId }}</label>
  </span>
</template>
<style scoped lang="scss">
  .container-checkbox {
    .checkmark {
      vertical-align: middle;
    }
  }
  input {
    display: none;
  }
  input[type="checkbox"] + .checkmark {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 4px;
    background: url("@/assets/images/before_check_ico.svg") no-repeat center /
      20px 20px;
  }
  input[type="checkbox"]:checked + .checkmark {
    background: url("@/assets/images/after_check_ico.svg") no-repeat center /
      20px 20px;
  }
</style>

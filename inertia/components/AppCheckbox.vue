<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{ label: string; disabled?: boolean; checked?: boolean; accent?: boolean }>(),
  {
    disabled: false,
    checked: false,
    accent: false,
  }
)
const classes = computed(() => {
  let classes = 'checkbox'
  if (props.accent) {
    classes += ' checkbox-success'
  }
  return classes
})
</script>

<template>
  <label class="cursor-pointer label">
    <input type="checkbox" :class="classes" disabled checked />
    {{ label }}
  </label>
</template>

<style scoped></style>

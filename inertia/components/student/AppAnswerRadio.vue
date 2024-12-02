<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ id: string; disabled: boolean; value: string; correctAnswer: string }>()
const model = defineModel()
const classes = computed(() => {
  let classes = ''
  if (props.disabled) {
    classes += ' opacity-50'
  }
  if (props.disabled && props.value === props.correctAnswer) {
    classes += ' text-success'
  }
  if (props.disabled && props.value !== props.correctAnswer && model.value === props.value) {
    classes += ' text-error'
  }
  return classes
})
</script>

<template>
  <label :for="id" :class="classes">
    <input
      :id="id"
      :disabled="disabled"
      type="radio"
      name="answer"
      :value="value"
      v-model="model"
    />
    {{ value }}
  </label>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ label: String; errors?: String; placeholder?: string; height?: number }>(),
  {
    placeholder: '',
    height: 48,
  }
)
const model = defineModel()
</script>

<template>
  <div class="flex flex-col gap-4 mt-4">
    <label for="content">{{ label }}</label>
    <textarea
      id="content"
      name="content"
      :class="`!h-${height} input input-bordered`"
      required
      v-model="model"
      :placeholder="placeholder"
    />
    <div v-if="errors">{{ errors }}</div>
  </div>
</template>

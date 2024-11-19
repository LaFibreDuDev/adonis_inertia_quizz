<script setup lang="ts">
const props = defineProps<{ label: String; errors?: String }>()
const model = defineModel()
</script>

<template>
  <div class="flex flex-col gap-4 mt-4">
    <label for="content">{{ label }}</label>
    <textarea
      id="content"
      name="content"
      class="input input-bordered h-48"
      required
      v-model="model"
    />
    <div v-if="errors">{{ errors }}</div>
  </div>
</template>

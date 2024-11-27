<script setup lang="ts">
defineProps<{ label?: string; name: string; errors?: string }>()
const model = defineModel()
</script>

<template>
  <div class="flex flex-col gap-4">
    <label v-if="label" :for="name">{{ label }}</label>
    <input
      :id="name"
      type="text"
      :name="name"
      class="input input-bordered"
      required
      v-model="model"
    />
    <div v-if="errors">{{ errors }}</div>
  </div>
</template>

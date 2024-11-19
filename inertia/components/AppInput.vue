<script setup lang="ts">
const props = defineProps<{ label: String; errors?: String }>()
const model = defineModel()
</script>

<template>
  <div class="flex flex-col gap-4">
    <label for="title">{{ label }}</label>
    <input id="title" name="title" class="input input-bordered" required v-model="model" />
    <div v-if="errors">{{ errors }}</div>
  </div>
</template>

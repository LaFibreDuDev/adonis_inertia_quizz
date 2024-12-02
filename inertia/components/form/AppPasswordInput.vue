<script setup lang="ts">
const props = defineProps<{ label: String; name: String; errors?: String }>()
const model = defineModel()
</script>

<template>
  <div class="flex flex-col gap-4">
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      type="password"
      :name="name"
      class="input input-bordered"
      required
      v-model="model"
    />
    <div v-if="errors">{{ errors }}</div>
  </div>
</template>

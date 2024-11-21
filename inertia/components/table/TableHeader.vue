<script setup lang="ts">
const props = defineProps<{ fields: String[] }>()
</script>

<template>
  <thead>
    <tr>
      <th></th>
      <template v-for="field in fields" :key="field">
        <th>{{ field }}</th>
      </template>
    </tr>
  </thead>
</template>

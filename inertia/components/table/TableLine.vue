<script setup lang="ts">
const props = defineProps<{ id: String; disabled?: boolean }>()
</script>

<template>
  <tr :data-id="id">
    <th>
      <label>
        <input type="checkbox" class="checkbox" data-table-checkbox="" :disabled="disabled" />
      </label>
    </th>
    <slot></slot>
  </tr>
</template>

<style scoped></style>
